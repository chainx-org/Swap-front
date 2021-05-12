import React from 'react';
import ContainerCard from '../../page/page-homePage/components/ContainerCard';
import ETHSymbol from '../../assets/symbols_ETH.svg';
import DOGESymbol from '../../assets/symbols_DOGE.svg';
import ArrowBlack from '../../assets/arrow_black.svg'
import styled from 'styled-components';
import NormalButton from '../Button';

const CoinInfoWrapper = styled.div`
  position: relative;
  .arrowDown{
    position: absolute;
    width: 16px;
    height: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
  }
  .numWrapper{
    width: 100%;
    padding: 29.5px 72px 14.5px 72px;
    .numInfo{
      background: rgba(255,255,255,0.90);
      border: 1px solid #EFEFEF;
      border-radius: 20px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 256px;
  
      .coinName{
        display: flex;
        align-items: center;
        padding: 10px 89px 10px 10px;
        > img{
          width: 20px;
          height: 20px;
          padding-right: 6px;
        }
        .name{
          font-size: 14px;
          color: #282828;
          font-weight: 500;
        }
      }
      .num{
        font-size: 14px;
        color: #282828;
        font-weight: 500;
        padding: 10px 16px 10px 0;
      }
      &:first-child{
        margin-bottom: 48px;
      }
    }
  }
`;

const PriceWrapper = styled.div`
  padding: 16px;
  
  .field{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    .fieldName{
      font-size: 12px;
      color: #908E8E;
      line-height: 17px;
    }
    .fieldContent{
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: #3F3F3F;
      font-weight: 500;
      line-height: 17px;
    }
  }
`

interface CoinNumItem {
  coinIcon: string;
  coinName: string;
  coinNum: number;
}

const ConfirmCard = (): React.ReactElement => {
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

  const backContent = (
    <PriceWrapper>
      <div className='field'>
        <span className='fieldName'>Price</span>
        <span className='fieldContent'>15.83 XDOGE/XETH</span>
      </div>
      <div className='field'>
        <span className='fieldName'>Minimum Received</span>
        <span className='fieldContent'>15.83 XDOGE</span>
      </div>
      <div className='field'>
        <span className='fieldName'>Price Impact</span>
        <span className='fieldContent'>{'< 0.01%'}</span>
      </div>
      <div className='field'>
        <span className='fieldName'>Liquidity Provider Fee</span>
        <span className='fieldContent'>0.03926 XETH</span>
      </div>
      <NormalButton label='Confirm Swap'/>
    </PriceWrapper>
  )

  return (
    <ContainerCard exitOption title='Confirm Swap' backContent={backContent} >
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
