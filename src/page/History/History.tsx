import React, {useState, useEffect} from "react";
import {FunctionSwitchButton, HistoryStyle, TableStyle} from "./style";
import {useTranslation} from "react-i18next";
import {Table} from "antd";
import {ColumnType} from "antd/lib/table";
import useAccountModel from "../../hooks/useAccountModel"
import { decodeAddress, encodeAddress } from "@polkadot/keyring";
interface HistoryRow {
    id: number;
    amount: number;
    chainxAddr: string;
    vaultBtcAddr: string;
    hash: string;
    countedBlock: number;
    status: "process" | "completed" | "cancelled";
}
enum HistoryTab {
    Issue,
    Redeem
}

function History() {
    const [activeTab, setActiveTab] = useState<HistoryTab>(HistoryTab.Issue);
    const [issueLog, setIssueLog] = useState<HistoryRow[]>([]);
    const { currentAccount } = useAccountModel();
    const {t} = useTranslation()
    const [page, setPage] = useState(0);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://api-btc.spiderx.pro/xbridge/${
                    activeTab === HistoryTab.Issue ? "issue_requests" : "redeem_requests"
                }?page=0&pageSize=5&requester=${currentAccount?.address}`,
                {
                    method: "GET"
                }
            );
            const data = await response.json();
            let rows: HistoryRow[];
            if (activeTab === HistoryTab.Issue) {
                rows = (data.items as any[]).map<HistoryRow>(info => {
                    return {
                        id: info._id,
                        amount: info.btcAmount / 100000000,
                        chainxAddr: encodeAddress(decodeAddress(info.requester),44),
                        vaultBtcAddr: info.btcAddress,
                        hash: "",
                        countedBlock: 0,
                        status: info.status
                    };
                });
            } else {
                rows = (data.items as any[]).map<HistoryRow>(info => {
                    return {
                        id: info._id,
                        amount: info.amount / 100000000,
                        chainxAddr: info.requester,
                        vaultBtcAddr: info.btcAddress,
                        hash: "",
                        countedBlock: 0,
                        status: info.status
                    };
                });
            }
            setIssueLog(rows);
        })();
    }, [activeTab,currentAccount]);
    const columns: ColumnType<HistoryRow>[] = [
        {
            title: t<string>("Issue logo"),
            dataIndex: "id",
            key: "id"
        },
        {
            title: t<string>("Amount"),
            dataIndex: "amount",
            key: "amount"
        },
        {
            title: t<string>("ChainX Address"),
            dataIndex: "chainxAddr",
            ellipsis: true,
            key: "chainxAddr"
        },
        {
            title: t<string>("Vault BTC Address"),
            dataIndex: "vaultBtcAddr",
            ellipsis: true,
            key: "vaultBtcAddr"
        },
        {
            title: t<string>("BTC transaction"),
            dataIndex: "hash",
            key: "hash"
        },
        {
            title: t<string>("BTC Confirmation"),
            dataIndex: "countedBlock",
            key: "countedBlock"
        },
        {
            title: t<string>("State"),
            dataIndex: "status",
            key: "status"
        }
    ];
    return (
        <HistoryStyle>
            <FunctionSwitchButton>
                <ul>
                    <li onClick={() => {
                        setActiveTab(HistoryTab.Issue);
                        setPage(0);
                    }} className={activeTab === HistoryTab.Issue ? "active" : "none"}>{t('issue')}</li>
                    <li onClick={() => {
                        setActiveTab(HistoryTab.Redeem);
                        setPage(0);
                    }} className={activeTab === HistoryTab.Redeem ? "active" : "none"}>{t('Redeem')}</li>
                </ul>
            </FunctionSwitchButton>
            <TableStyle>
                <Table rowKey={({ id }) => id} columns={columns} dataSource={issueLog} />
            </TableStyle>
        </HistoryStyle>
    )
}
export default History;
