import React, { useState, useEffect } from "react";
import { Card } from "antd";
import closeBtn from "../../assets/close-pop.svg";
import styled from "styled-components";
const CardContainer = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #efefef;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  border-radius: 24px 24px 16px 16px;
  .cardHeader {
    z-index: 999;
    display: flex;
    justify-content: space-between;
    height: 47px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    border-bottom: 1px solid #efefef;
    .title {
      font-weight: 500;
      height: 28px;
      line-height: 28px;
      color: #282828;
      font-size: 16px;
      font-family: PingFangSC-Medium;
    }
    .closeBtn {
      height: 28px;
      width: 28px;
      color: #282828;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .backContent {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #f4f4f5;
    border: 1px solid #efefef;
    border-radius: 24px 24px 16px 16px;
    .empty {
      height: 245px;
    }
  }
`;
interface CardItemProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  backContent?: React.ReactNode;
  exitOption: boolean;
}

function ContainerCard({
  children,
  title,
  exitOption,
  backContent,
  className = "",
}: CardItemProps): React.ReactElement<CardItemProps> {
  const [isAccountListOpen, setIsAccountListOpen] = useState(true);
  const closeCard = (e: {
    nativeEvent: { stopImmediatePropagation: () => void };
  }) => {
    e.nativeEvent.stopImmediatePropagation();
    setIsAccountListOpen(!isAccountListOpen);
  };
  //   function closeCard() {
  //     setIsAccountListOpen(!isAccountListOpen);
  //   }
  return (
    <CardContainer>
      {isAccountListOpen && (
        <div className="containerBox">
          {title && (
            <div className="cardHeader">
              <div className="title">{title}</div>
              {exitOption && (
                <img
                  className="closeBtn"
                  src={closeBtn}
                  alt="close"
                  onClick={closeCard}
                />
              )}
            </div>
          )}
          <div className="cardContent">{children}</div>
          {backContent && (
            <div className="backContent">
              <div className="empty" />
              {backContent}
            </div>
          )}
        </div>
      )}
    </CardContainer>
  );
}

export default ContainerCard;
