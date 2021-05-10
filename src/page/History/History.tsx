import React, {useState, useEffect} from "react";
import {FunctionSwitchButton, HistoryStyle, ModalStyle, TableStyle} from "./style";
import {useTranslation} from "react-i18next";
import {Space, Table, Modal} from "antd";
import {ColumnType} from "antd/lib/table";
import useAccountModel from "../../hooks/useAccountModel"
import {decodeAddress, encodeAddress} from "@polkadot/keyring";
import CardMain from "../../components/CardMain";
import RequestID from "../../components/RequestID";
import ModalFooter from "../../components/ModalFooter";

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
    const {currentAccount} = useAccountModel();
    const {t} = useTranslation()
    const [page, setPage] = useState(0);
    const [currentTable, setCurrentTable] = useState("issue")

    const columns = [
        {
            title: '更新时间',
            dataIndex: 'time',
            key: 'title'
        },
        {
            title: '数量（XBTC）',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'BTC交易',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '交易确认数',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Chainx块高',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: '状态',
            key: 'action',
            render: (text: any, record: any) => (
                <Space size="middle">
                    {record.status === "进行中" && <div className={"processing"}>{record.status}</div>}
                    {record.status === "失败" && <div className={"fail"}>{record.status}</div>}
                    {record.status === "成功" && <div>{record.status}</div>}
                </Space>
            ),
        },
    ];

    const IssueData = [
        {
            key: '1',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '成功'
        },
        {
            key: '2',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '进行中'
        },
        {
            key: '3',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '失败'
        },
        {
            key: '4',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '成功'
        },
        {
            key: '5',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '成功'
        },
        {
            key: '6',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '成功'
        },
    ];
    const RedeemData = [
        {
            key: '1',
            time: '2021-04-16 18:20',
            number: 0.00002,
            address: '1b2978...fd247ac',
            status: '失败'
        },
        {
            key: '2',
            time: '2021-04-16 18:20',
            number: 0.00003,
            address: '1b2978...fd247ac',
            status: '进行中'
        },
        {
            key: '3',
            time: '2021-04-16 18:20',
            number: 0.00004,
            address: '1b2978...fd247ac',
            status: '失败'
        },
        {
            key: '4',
            time: '2021-04-16 18:20',
            number: 0.00006,
            address: '1b2978...fd247ac',
            status: '成功'
        },
        {
            key: '5',
            time: '2021-04-16 18:20',
            number: 0.00007,
            address: '1b2978...fd247ac',
            status: '成功'
        },
        {
            key: '6',
            time: '2021-04-16 18:20',
            number: 0.00001,
            address: '1b2978...fd247ac',
            status: '成功'
        },
    ];
    return (
        <HistoryStyle>
            <FunctionSwitchButton>
                <ul>
                    <li onClick={() => {
                        setCurrentTable("issue");
                        setPage(0);
                    }} className={currentTable === "issue" ? "active" : "none"}>{t('issue')}</li>
                    <li onClick={() => {
                        setCurrentTable("redeem");
                        setPage(0);
                    }} className={currentTable === "redeem" ? "active" : "none"}>{t('Redeem')}</li>
                </ul>
            </FunctionSwitchButton>
            <TableStyle>
                {currentTable === "issue" ? <Table columns={columns} dataSource={IssueData}/> :
                    <Table columns={columns} dataSource={RedeemData}/>}
            </TableStyle>
            <Modal visible={true} footer={null} getContainer={false}>
                <ModalStyle>
                    <div className={"card-header"}>
                        <div>
                            <div>剩余时间</div>
                            <img src="" alt=""/>
                        </div>
                        <div className={"time"}>
                            47:56:10
                        </div>
                    </div>
                    <CardMain opreturn={"81e71f40d31aa46f09da3f5d58a879c54708725f96730df2d8ac67050b6e2a07"} address={"ms3tsPc5nJZWunt3vXotJoDcoTHGohKiHC"}/>
                    <div className={"line"}/>
                    <RequestID requestID={"3123213123"}/>
                    <div className={"dotted-line"}/>
                    <ModalFooter btcReceiveAddress={"mHpAy3ahw2S7LvX...UXhG6wWRg1WBb"} lockCollateral={2} issueAmount={23} vaultPCXAddress={"5HpAy3ahw2S7…G6wWRg1WBb"} vaultBTCAddress={"5HpAy3ahw2S7…G6wWRg1WBb"}/>
                </ModalStyle>
            </Modal>
        </HistoryStyle>
    )
}

export default History;
