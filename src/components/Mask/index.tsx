import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const MaskWrapper = styled.div`
  &.mqsk {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: #000;
    opacity: 0.4;
    color: #f00;
    z-index: 0;
  }
`;

function Mask(props: {
  children:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
}) {
  const modalRoot = document.getElementById("modal-root");
  const eleRef = useRef(document.createElement("div"));

  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(eleRef.current);
      return () => {
        if (modalRoot) {
          modalRoot.removeChild(eleRef.current);
        }
      };
    }
  }, [modalRoot]);
  return ReactDOM.createPortal(
    <div style={{ width: "530px", height: "500px" }}>
      <MaskWrapper className="mqsk" />
      {props.children}
    </div>,
    eleRef.current
  );
}

export default Mask;
