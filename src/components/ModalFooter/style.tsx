import styled from "styled-components";
import React from "react";

export const ModalFooterStyle = styled.div`
    font-size: 12px;
    color: #8E8E8E;
    font-weight: 400;
    width: 420px;
    ul {
      display: flex;
      flex-direction: column;
      height: 80px;
      justify-content: space-between;
      li{
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        .font{
          display: flex;
          align-items: center;
          img{
            margin-left: 5px;
          }
        }
      }
    }
`