import React from "react";
import { Card } from "antd";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../../assets/close-pop.svg";
import { CardContainer, container } from "./style";
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
      <div className="topBanner">
        <div className="title">{label}</div>
        {value === "true" && (
          <div className="cancelBtn">
            <CloseIcon />
          </div>
        )}
      </div>
      {/* <div className="line"></div> */}
      <div>{children}</div>
    </CardContainer>
  );
}

export default ContainerCard;
