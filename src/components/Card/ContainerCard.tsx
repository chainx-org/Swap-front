import React, { useState } from "react";
import closeBtn from "../../assets/close-pop.svg";
import styled from "styled-components";

const CardContainer = styled.div`
  height: fit-content;
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #efefef;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  border-radius: 24px 24px 16px 16px;
  
  .cardHeader {
    z-index: 3;
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
  .cardContent{
    z-index: 2;
  }
  .backContent {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    background: #f4f4f5;
    border: 1px solid #efefef;
    height: fit-content;
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
  DialogControl?: any;
}

function ContainerCard({
  children,
  title,
  exitOption,
  DialogControl,
  backContent,
  className = "",
}: CardItemProps): React.ReactElement<CardItemProps> {
  return (
    <CardContainer>
      <div className="containerBox">
        {title && (
          <div className="cardHeader">
            <div className="title">{title}</div>
            {exitOption && (
              <img
                className="closeBtn"
                src={closeBtn}
                alt="close"
                onClick={() => {
                  DialogControl(false);
                }}
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
    </CardContainer>
  );
}

export default ContainerCard;
