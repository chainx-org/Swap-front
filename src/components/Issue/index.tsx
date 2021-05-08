import React, { useContext, useEffect, useState } from "react";
import { IssueBtcInputStyle, IssueStyle, AccountSwitch } from "./style";
import arrowYellow from './icons/arrow_yellow.svg'
import arrowGray from './icons/arrow_gray.svg'
import { InputNumber, Divider, Button } from "antd";
import { useTranslation } from "react-i18next";
import ExplainTag from '../ExplainTag'
import CoinSelect from "../CoinSelect";

function Issue() {
  const { t } = useTranslation();
  const address = <>5HpAy3ahw2S7LvXWphebx3K1Nh9qw8hjEGbUXhG6wWRg1WBb</>
  const hypothecateNum = <>0.00 PCX</>
  const chargeNum = <>0.00 BTC</>
  return (
    <IssueStyle>
      <div className='topContent'>
        <AccountSwitch>
          <CoinSelect select={false} />
          <div className='to'>To</div>
          <CoinSelect select={true} />
        </AccountSwitch>
        <IssueBtcInputStyle>
          <div className='issueNum'>
            <InputNumber
              value={``}
              onChange={(e) => {
                console.log(e)
              }}
            />
            <div className={`btc-title`}>BTC</div>
          </div>
          <img src={ true ? arrowYellow : arrowGray } alt='to' className='arrow' />
          <p className='receive'>{t("You will receive")}</p>
          <div className={`issueResNum`}>0 SBTC</div>
        </IssueBtcInputStyle>
      </div>
      <div className='bottomContent'>
        <ExplainTag  title='目标账户' children={address} />
        <ExplainTag  title='锁定抵押品' children={hypothecateNum} />
        <ExplainTag  title='手续费' children={chargeNum} />
        <Button  className='gray'>{t("next")}</Button>
      </div>
    </IssueStyle>
  );
}

export default Issue;
