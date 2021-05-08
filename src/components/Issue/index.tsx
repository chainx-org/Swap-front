import { useContext, useEffect, useState } from "react";
import {
  ConfirmationIssueModalFooter,
  ConfirmationIssueModalStyle,
  CurrentAccountStyle,
  IssueBtcInputStyle,
  IssueFooterStyle,
  IssueStyle,
  LockingCollateralStyle,
  VaultAccountStyle,
  PCXbalanceStyle,
} from "./style";
import btcLogo from "./icons/btc.svg";
import { InputNumber, Divider, Button, Modal, notification } from "antd";
import { useTranslation } from "react-i18next";
import useAccountModel from "../../hooks/useAccountModel";
import { useApi } from "../../hooks/useApi";
import { BtcAddress, RpcVaultInfo } from "../../interfaces";
import { FeeContext } from "../../hooks/useFeeContext";
import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import ChangeChainXAddress from "../../util";
import { web3FromAddress } from "@polkadot/extension-dapp";
import { useAccountInfo } from "../../hooks/useAccountInfo";
import FormatBalance from "../../hooks/useFormatBalance";
import { AccountId } from "@polkadot/types/interfaces";

function Issue() {
  const value = useContext(FeeContext);
  const pcxPrice = value.pcxPrice;
  const { currentAccount } = useAccountModel();
  const { t } = useTranslation();
  const [confirmationIssue, setConfirmationIssue] = useState(false);
  const [rpcVaultInfo, setRpcVaultInfo] = useState<RpcVaultInfo | null>(null);
  const [IssueAmount, setIssueAmount] = useState(0);
  const [vaultAddress, setVaultAddress] = useState("");
  const [vaultBtcAddress, setVaultBtcAddress] = useState("");
  const [vaultButtonLoading, SetVaultButtonLoading] = useState(false);
  const [vaultInfo, setVaultInfo] = useState();
  const [vault, SetVault] = useState([]);
  const [vaultCollateral,setVaultCollateral] = useState()
  const { api, isApiReady } = useApi();
  const accountInfo = useAccountInfo(currentAccount?.address!!);
  async function ConfirmationIssueTrade() {
    const injector = await web3FromAddress(currentAccount!!.address);
    api.tx.xGatewayBitcoinV2
      .requestIssue(vaultAddress,IssueAmount * 100000000)
      .signAndSend(
        currentAccount!!.address,
        { signer: injector.signer },
        ({ status, dispatchError, events }) => {
          if (status.isInBlock) {
            notification["success"]({
              message: `Completed at block hash ${status.asInBlock.toString()}`,
              duration: 0,
            });
          } else if (dispatchError) {
            if (dispatchError.isModule) {
              const decoded = api.registry.findMetaError(
                dispatchError.asModule
              );
              const { documentation, name, section } = decoded;
              notification["error"]({
                message: `${section}.${name}: ${documentation.join(" ")}`,
                duration: 0,
              });
            }
          } else {
            notification["success"]({
              message: `Current status: ${status.type}`,
              duration: 0,
            });
            if (status.type === "Finalized") {
              setConfirmationIssue(false);
            }
          }
        }
      )
      .catch((error) => {
        notification["error"]({
          message: `:( transaction failed', ${error}`,
          duration: 0,
        });
      });
  }

  const handleMatchVault = async () => {
    if (IssueAmount <= 0) {
      notification.warn({ message: "发行的值必须大于0" });
      return;
    }
    const vaults = await api.query.xGatewayBitcoinV2.vaults.entries();
    const results = await Promise.all(
    vaults.map(async ([key, value]) => {
      const vault = value.unwrap();
      const collateral = await (await api.query.system.account(vault.id)).data.reserved;
      const maxToken = collateral.muln(pcxPrice).divn(3);
      return [vault.id, maxToken.sub(vault.issuedTokens).sub(vault.toBeIssuedTokens), vault.wallet]
    }))
    setVaultAddress(
      results ? ChangeChainXAddress(JSON.parse(JSON.stringify(results))[0][0]) : ""
    );
    setVaultBtcAddress(results ? JSON.parse(JSON.stringify(results))[0][2] : "");
    setConfirmationIssue(true);
    SetVaultButtonLoading(false);
  }
  return (
    <IssueStyle>
      <CurrentAccountStyle>
        <div>{t("Current Account")}</div>
        <div className={"current-account"}>{currentAccount?.address}</div>
      </CurrentAccountStyle>
      <IssueBtcInputStyle>
        <img src={btcLogo} alt="" />
        <InputNumber
          value={IssueAmount}
          onChange={(e) => {
            if (e) {
              setIssueAmount(e);
            } else {
              setIssueAmount(0);
            }
          }}
        />
        <div className={"btc-title"}>BTC</div>
      </IssueBtcInputStyle>
      <PCXbalanceStyle>
        PCX {t("balance")} {FormatBalance(accountInfo?.data.free)}
      </PCXbalanceStyle>
      <LockingCollateralStyle>
        <div className={"locking-title"}>{t("Locking collateral")}</div>
        <div className={"locking-num"}>
          {IssueAmount / pcxPrice / 10 || 0} PCX
        </div>
        <div className={"locking-tip"}>{t("Unlock after completion")}</div>
      </LockingCollateralStyle>
      <Divider />
      <IssueFooterStyle>
        <div className={"issue-footer-title"}>{t("You will receive")}</div>
        <div className={"issue-footer-num"}>{IssueAmount} XBTC</div>
        <Button loading={vaultButtonLoading} onClick={handleMatchVault}>
          {t("next")}
        </Button>
      </IssueFooterStyle>

      <ConfirmationIssueModalStyle>
        <Modal
          title={t("Confirmation of issuance")}
          getContainer={false}
          visible={confirmationIssue}
          onCancel={() => setConfirmationIssue(false)}
          footer={[
            <Button key="back" onClick={ConfirmationIssueTrade}>
              {t("next")}
            </Button>,
          ]}
        >
          <CurrentAccountStyle>
            <div>{t("Current Account")}</div>
            <div className={"current-account"}>{currentAccount?.address}</div>
          </CurrentAccountStyle>
          <LockingCollateralStyle>
            <div className={"locking-title"}>{t("Locking collateral")}</div>
            <div className={"locking-num"}>
              {IssueAmount / pcxPrice / 10 || 0} PCX
            </div>
            <div className={"locking-tip"}>{t("Unlock after completion")}</div>
          </LockingCollateralStyle>
          <ConfirmationIssueModalFooter>
            <div className={"issue-footer-title"}>{t("You will receive")}</div>
            <div className={"issue-footer-num"}>{IssueAmount} XBTC</div>
          </ConfirmationIssueModalFooter>
          <VaultAccountStyle>
            <div>{t("Vault")}</div>
            <div className={"current-account"}>
              {vaultAddress
                ? encodeAddress(decodeAddress(vaultAddress), 44)
                : ""}
            </div>
          </VaultAccountStyle>
          <VaultAccountStyle>
            <div>{t("BTC address of Vault")}</div>
            <div className={"current-account"}>{vaultBtcAddress}</div>
          </VaultAccountStyle>
        </Modal>
      </ConfirmationIssueModalStyle>
    </IssueStyle>
  );
}

export default Issue;
