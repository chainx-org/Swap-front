import styled from "styled-components";
import React from "react";

export const CardFooterStyle = styled.div`
    font-size: 12px;
    color: #8E8E8E;
    font-weight: 400;
    margin-top: 24.5px;
    ul {
      display: flex;
      flex-direction: column;
      height: 80px;
      justify-content: space-between;
      li{
        display: flex;
        justify-content: space-between;
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