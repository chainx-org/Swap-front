import { Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import Question from './icons/question.svg'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #8E8E8E;
    font-weight: 400;
    margin-bottom: 24px;
    .leftTitle {
        display: flex;
        align-items: center;
        p {
            white-space: nowrap;
            margin-right: 5px;
        }
    }
    .rightContent {
        max-width: 280px;
        word-break: break-all;
        text-align: right;
        line-height: 16px;
    }
    .bold {
        color: #282828;
    }
`

interface ExplainTagProps {
  className?: string;
  title: string;
  children: React.ReactNode;
  tooltip?: string
}

export default function ExplainTag({className = '' , title, children, tooltip }:ExplainTagProps): React.ReactElement<ExplainTagProps>{
    
    return (
       <Wrapper className={` ${className}`}>
           <div className='leftTitle'>
               <p>{title}</p>
               <Tooltip title={tooltip}>
                    <img src={Question} alt=""/>
               </Tooltip>       
           </div>
           <div className='rightContent'>{children}</div>
       </Wrapper>
    )
}
