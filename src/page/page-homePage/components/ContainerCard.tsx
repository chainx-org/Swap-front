import React from "react";
import { Card } from "antd";
import styled from "styled-components";
const CardContainer = styled(Card)`
  .cardBox{
    padding:16px;
  } 
  .ant-card {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #efefef;
    borderRadius: 24px 24px 16px 16px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  }
  .ant-card-body {
    padding: 0px;
  }
 .topBanner{
    display:flex;
    justify-content:space-between;
    .title {
      margin: 0px 0px 7px 0px;
      height:47.5px
      font-weight: 500;
      color: #282828;
      font-size: 16px;
      font-family: PingFangSC-Medium;
    }
    .cancelBtn{
      margin: 0px 0px 7px 0px;
      height:47.5px
      color: #282828;
      font-size: 16px;
      font-family: PingFangSC-Medium;
    } 
 }
 .line {
  position: absolute;
  top: 47.5px;
  border: 1px solid #efefef;
  width: 424px;
  margin-left: -16px;
}
`;
const container = {
  border: "1px solid rgba(255, 255, 255, .5)",
  borderRadius: "24px 24px 16px 16px",
  margin: "auto auto",
};
interface CardItemProps {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  value?: string;
}
function ContainerCard({
  children,
  className = "",
  label,
  value,
}: CardItemProps): React.ReactElement<CardItemProps> {
  return (
    <CardContainer bordered={false} style={container}>
      <div className="cardBox">
        <div className="topBanner">
          <div className="title">{label}</div>
          {value === "true" && <div className="cancelBtn">X</div>}
        </div>
        <div className="line"></div>
        <div>{children}</div>
      </div>
    </CardContainer>
  );
}

export default ContainerCard;
