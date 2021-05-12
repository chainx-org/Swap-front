import React from 'react';
import ContainerCard from '../ContainerCard';
import ETHSymbol from '../../../assets/symbols_ETH.svg';
import DOGESymbol from '../../../assets/symbols_DOGE.svg';
import ArrowBlack from '../../../assets/arrow_black.svg';
import NormalButton from '../../Button';
import Loading from '../../../assets/loading.png';
import Error from '../../../assets/Feedback_failure.svg';
import Success from '../../../assets/Feedback_successed.svg'
import { CoinInfoWrapper, PriceWrapper, StatusWrapper, WaitingWrapper } from './style';
import PriceField from './PriceField';


interface CoinNumItem {
  coinIcon: string;
  coinName: string;
  coinNum: number;
}

interface ConfirmCardProps {
  statusValue?: 'success' | 'fail';
  confirmType: 'priceInfo' | 'waiting' | 'transactionStatus'
}

interface PriceFieldItem{
  fieldName: string;
  fieldContent: string;
}

const ConfirmCard = ({confirmType, statusValue}: ConfirmCardProps): React.ReactElement<ConfirmCardProps> => {
  const coinNumList: CoinNumItem[] = [
    {
      coinIcon: ETHSymbol,
      coinName: 'XETH',
      coinNum: 0.00245451
    },
    {
      coinIcon: DOGESymbol,
      coinName: 'XDOGE',
      coinNum: 9999.0024
    }
  ];

  const PriceFieldList: PriceFieldItem[] = [
    {
      fieldName: 'Price',
      fieldContent: '15.83 XDOGE/XETH'
    },
    {
      fieldName: 'Minimum Received',
      fieldContent: '15.83 XDOGE'
    },
    {
      fieldName: 'Price Impact',
      fieldContent: '< 0.01%'
    },
    {
      fieldName: 'Liquidity Provider Fee',
      fieldContent: '0.03926 XETH'
    },
  ]

  const backPriceContent: React.ReactNode = (
    <PriceWrapper>
      {PriceFieldList.map(item =>
        <PriceField name={item.fieldName} content={item.fieldContent}/>)
      }
      <NormalButton className='confirmButton' label='Confirm Swap'/>
    </PriceWrapper>
  )

  const backWaitingContent: React.ReactNode = (
    <WaitingWrapper>
        <img src={Loading} className='loading' alt="loading"/>
      <div className='waiting'>waiting for confimation</div>
      <div className='confirm'>Confirm this transaction in polkadot-js/extension</div>
    </WaitingWrapper>
  )

  const backStatusContent: React.ReactNode = (
    <StatusWrapper>
      {statusValue === 'fail' ?
        <>
          <img src={Error} className='status' alt="status"/>
          <div className='statusValue'>cause</div>
        </>:
        <>
          <img src={Success} className='status' alt="status"/>
          <div className='statusValue'>transaction submitted</div>
        </>
      }
      <NormalButton label='Close'/>
    </StatusWrapper>
  );

  const judgeConfirmType = (type: string): React.ReactNode => {
    switch (type) {
      case 'priceInfo':
        return backPriceContent;
      case 'waiting':
        return backWaitingContent;
      case 'transactionStatus':
        return backStatusContent;
    }
  }

  return (
    <ContainerCard exitOption title='Confirm Swap' backContent={judgeConfirmType(confirmType)}>
      <CoinInfoWrapper>
        <div className='numWrapper'>
          {coinNumList.map((item: CoinNumItem) =>
            <div className='numInfo'>
              <div className='coinName'>
                <img src={item.coinIcon} alt=""/>
                <div className='name'>{item.coinName}</div>
              </div>
              <div className='num'>{item.coinNum}</div>
            </div>
          )}
        </div>
        <img className='arrowDown' src={ArrowBlack} alt=""/>
      </CoinInfoWrapper>
    </ContainerCard>
  );
};

export default ConfirmCard;
