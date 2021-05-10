import styled from "styled-components";
import React from "react";

export const IssueRequestCardStyle = styled.div`
  width: 500px;
  background: #F4F4F5;
  box-shadow: 10px 10px 16px 0 rgba(0, 0, 0, 0.06), -10px -10px 16px 0 #FFFFFF;
  border-radius: 16px;
  padding: 30px 40px 16px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .line{
    background: #F4F4F5;
    box-shadow: -1px -1px 2px 0 rgba(0,0,0,0.04), 1px 1px 2px 0 #FFFFFF;
    border-radius: 1px;
    width: 500px;
    height: 2px;
    margin-left: -40px;
    margin-top: 32px;
  }
  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 23px;
    img {
      height: 32px;
    }

    .time {
      display: flex;
      margin-top: 8.5px;
      align-items: center;

      .time-title {
        font-size: 14px;
        color: #AEAEAE;
        letter-spacing: 0.12px;
        line-height: 20px;
        font-weight: 400;
      }

      .time-content {
        font-size: 14px;
        color: #282828;
        letter-spacing: 0.12px;
        line-height: 20px;
        font-weight: 500;
        margin-left: 6px;
        margin-right: 5px;
      }

      img {
        width: 12px;
        height: 12px;
      }
    }

    .assets-text {
      display: flex;
      margin-top: 20.5px;
      font-size: 32px;
      color: #282828;
      line-height: 44px;
      font-weight: 600;

      .assets-number {
        margin-right: 20px;
      }
    }
  }
`
