import React, { useContext, useEffect, useState } from "react";
import { IssueBtcInputStyle, IssueStyle, AccountSwitch } from "./style";
import BCHs from '../CoinSelect/icons/BCH_s.svg'
import BTCs from '../CoinSelect/icons/BTC_S.svg'
import DOGEs from '../CoinSelect/icons/DOGE_s.svg'
import Sherpaxs from '../CoinSelect/icons/sherpax_s.svg'
import arrowYellow from './icons/arrow_yellow.svg'
import arrowGray from './icons/arrow_gray.svg'
import { InputNumber, Divider, Button } from "antd";
import { useTranslation } from "react-i18next";
import ExplainTag from '../ExplainTag'
import CoinSelect from "../CoinSelect";

interface coinProps {
  img_url: any;
  coinName: string;
  symol: string;
}

interface IssueProps {
  setShowNext: (bool: boolean)=>void;
}
function Issue({ setShowNext }: IssueProps): React.ReactElement<IssueProps> {
  const { t } = useTranslation();
  const optionList = [
    {
        img_url: BTCs,
        coinName: 'BTC',
        symol: 'Bitcoin'
    },
    {
        img_url: BCHs,
        coinName: 'BCH',
        symol: 'Bitcoin Cash'
    },
    {
        img_url: DOGEs,
        coinName: 'DOG',
        symol: 'Dogecoin'
    }
  ]
  const [isShow, setIsShow] = useState(false)
  
  const [coinSymol, setCoinSymol] = useState<coinProps>({
      img_url: BTCs,
      coinName: 'BTC',
      symol: 'Bitcoin'
  })
  const currCoin = (value:any) => {
      setCoinSymol(value)
      setIsShow(!isShow)
  }
  const ShowSelect = () =>{
      setIsShow(!isShow)
  }
  const address = <>5HpAy3ahw2S7LvXWphebx3K1Nh9qw8hjEGbUXhG6wWRg1WBb</>
  const hypothecateNum = <>0.00 PCX</>
  const chargeNum = <>0.00 {coinSymol.coinName}</>
  function nextRequest() {
    setShowNext(false)
  }
  return (
    <IssueStyle>
      <div className='topContent'>
        <AccountSwitch>
          <CoinSelect optionList={optionList} isShow={isShow} currCoin={currCoin} ShowSelect={ShowSelect} coinSymol={coinSymol}/>
          <div className='to'>To</div>
          <div className='currContent'>
            <img src={Sherpaxs} alt=""/>
            <p className='currName'>SherpaX</p>
          </div>
        </AccountSwitch>
        <IssueBtcInputStyle>
          <div className='issueNum'>
            <InputNumber
              value={``}
              onChange={(e) => {
                console.log(e)
              }}
            />
            <div className={`btc-title`}>{coinSymol.coinName}</div>
          </div>
          <img src={ true ? arrowYellow : arrowGray } alt='to' className='arrow' />
          <p className='receive'>{t("You will receive")}</p>
          <div className={`issueResNum`}>0 S{coinSymol.coinName}</div>
        </IssueBtcInputStyle>
      </div>
      <div className='bottomContent'>
        <ExplainTag  title='目标账户' children={address} />
        <ExplainTag  title='锁定抵押品' children={hypothecateNum} />
        <ExplainTag  title='手续费' children={chargeNum} />
        <Button className='gray' onClick={nextRequest}>{t("next")}</Button>
      </div>
    </IssueStyle>
  );
}

export default Issue;
