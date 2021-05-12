import React from 'react';
import { Card } from 'antd';
import closeBtn from '../../../assets/close-pop.svg';
import styled from 'styled-components';

const CardContainer = styled(Card)`
  position: relative;
  .cardBox{
    padding:16px;
    z-index: 2;
  } 
  .ant-card {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #efefef;
    border-radius: 24px 24px 16px 16px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  }
  .ant-card-body {
    padding: 0;
  }
  .cardHeader{
    z-index: 999;
    display:flex;
    justify-content:space-between;
    border-bottom: 1px solid #efefef;
    .title {
      margin: 0 0 7px 0;
      font-weight: 500;
      color: #282828;
      font-size: 16px;
      font-family: PingFangSC-Medium;
    }
    .closeBtn{
      height: 28px;
      width: 28px;
      cursor: pointer;
    } 
  }
  .backContent{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #f4f4f5;
    border: 1px solid #EFEFEF;
    border-radius: 24px 24px 16px 16px;
    .empty{
      height: 245px;
    }
  }
`;
const container = {
  border: '1px solid rgba(255, 255, 255, .5)',
  borderRadius: '24px 24px 16px 16px',
  margin: 'auto auto',
};

interface CardItemProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  backContent?: React.ReactNode;
  exitOption?: boolean;
}

function ContainerCard({children, title, exitOption, backContent, className = '',}: CardItemProps): React.ReactElement<CardItemProps> {
  return (
    <CardContainer bordered={false} style={container}>
      <div className="cardBox">
        {title &&
        <div className="cardHeader">
          <div className="title">{title}</div>
          {exitOption && <img className='closeBtn' src={closeBtn} alt='close'/>}
        </div>}
        <div className='cardContent'>{children}</div>

      </div>
      {
        backContent &&
        <div className='backContent'>
          <div className="empty"/>
          {backContent}
        </div>
      }
    </CardContainer>
  );
}

export default ContainerCard;
