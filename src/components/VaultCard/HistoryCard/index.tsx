import React, {useContext, useState} from "react";
import {HistoryCardStyle} from "./style";
import {FunctionSwitchButton, TableStyle} from "../../../page/History/style";
import {useTranslation} from "react-i18next";
import {Table} from "antd";
import useAccountModel from "../../../hooks/useAccountModel";
import {useApi} from "../../../hooks/useApi";
import {useRedeemRequests} from "../../../hooks/useRedeemRequestList";
import {convertBalanceToDisplayValue} from '../../../util'
import {decodeAddress, encodeAddress} from "@polkadot/keyring";
const data = [
    {
        id: 'id',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
];
const data2 = [
    {
        key: '1',
        name: '赎回',
        age: 32,
        address: '赎回',
    },
];
interface HistoryRow {
    id: string;
    amount: string;
    chainxAddress: string;
    btcAddress: string;
    hash: string;
    countedBlock: string;
    status: string;
  }
function HistoryCard() {
    const [HistoryStatus, SetHistoryStatus] = useState('issue')
    const {currentAccount} = useAccountModel();
    const {api} =useApi()
    const {t} = useTranslation()
    const redeemRequestsList = useRedeemRequests();
    const Emitcolumns = [
        {
            title: t<string>("Request number"),
            dataIndex: "id",
            key: "id",
            width:80
        },
        {
            title: t<string>("Amount"),
            dataIndex: "amount",
            key: "amount",
            width:80
        },
        {
            title: t<string>("ChainX Address"),
            dataIndex: "chainxAddress",
            ellipsis: true,
            key: "chainxAddress"
        },
        {
            title: t<string>("BTC address"),
            dataIndex: "btcAddress",
            ellipsis: true,
            key: "btcAddress"
        }
    ]
    return (
        <HistoryCardStyle>
            <FunctionSwitchButton>
                <ul>
                    <li onClick={() => {
                        SetHistoryStatus('issue')
                    }} className={HistoryStatus === 'issue' ? "active" : ""}>{t('Redemption list')}</li>
                    <li style={{ cursor: "not-allowed" }} className={HistoryStatus === 'Redeem' ? "active" : ""}>{t('History')}</li>
                </ul>
            </FunctionSwitchButton>
            <TableStyle>
                {HistoryStatus === "issue" ?
                    <Table columns={Emitcolumns} dataSource={redeemRequestsList
                        .filter(value => encodeAddress(decodeAddress(value.vaultId),44) === currentAccount?.address)
                        .map<HistoryRow>(row => {
                          return {
                            id: row.id.toString(),
                            amount: convertBalanceToDisplayValue(row.amount).toString(),
                            chainxAddress: encodeAddress(decodeAddress(row.chainxAddr.toString()),44),
                            btcAddress: row.userBtcAddr.toString(),
                            hash: "",
                            countedBlock: "0",
                            status: "确认"
                          };
                        })} /> :
                    <Table columns={Emitcolumns} dataSource={data2} />
                }
            </TableStyle>
        </HistoryCardStyle>
    )
}
export default HistoryCard
