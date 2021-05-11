import React from "react";
import { Card } from "antd";
import styled from "styled-components";
const CardContainer = styled(Card)`
  .cardBox{
    width: 424px !important;
    height: 340px !important;
    border-radius: 24px 24px 16px 16px !important;
  } 
  .ant-card {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #efefef;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
    border-radius: 24px 24px 16px 16px;
  }
  .ant-card-body {
    padding: 0px;
    border-radius: 24px 24px 16px 16px;
  }
 .topBanner{
    display:flex;
    justify-content:space-between;
    .title {
      margin: 18px 0px 7px 16px;
      height:47.5px
      font-weight: 500;
      color: #282828;
      font-size: 16px;
      font-family: PingFangSC-Medium;
    }
    .cancelBtn{
      margin: 18px 16px 7px 16px;
      height:47.5px
      color: #282828;
      font-size: 16px;
      font-family: PingFangSC-Medium;
    } 
 }
 .line {
  border: 1px solid #efefef;
  width: 100%;
  margin-top: 0px;
}
  
`;
const container = {
  border: "1px solid rgba(255, 255, 255, .5);",
  "border-radius": "24px 24px 16px 16px",
  margin: "auto auto",
};
interface CardItemProps {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  value?: string;
}
const Title = styled.div``;
// const CardItem = (props): React.ReactElement => {
function MyCard({
  children,
  className = "",
  label,
  value,
}: CardItemProps): React.ReactElement<CardItemProps> {
  return (
    <CardContainer bordered={false} style={container}>
      <div className="cardBox my-10">
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

export default MyCard;
