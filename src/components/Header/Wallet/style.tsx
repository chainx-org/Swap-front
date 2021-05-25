import styled from "styled-components";
export const WalletStyle = styled.div`
  position: relative;
  padding-right: 24px;
  display: flex;
  height: 32px;
  align-items: center;
  border-radius: 16px;
  width: 100%;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  img {
    margin-right: 8.56px;
  }
  .dropList {
    display: none;
  }
  &:hover .dropList {
    display: block;
    position: absolute;
    top: 37px;
    left: 0;
    z-index: 999;
    margin-top: 7px;
    width: 257px;
    // height: 200px;
    background: #ffffff;
    box-shadow: 6px 6px 8px 0 rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 12px 0px;
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        .assets-item {
          margin: 12px 16px;
          // overflow: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .item-left {
            display: flex;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
              margin-right: 8px;
            }
            .item-text {
              font-size: 16px;
              color: #282828;
              font-weight: bold;
            }
          }
          .item-balance {
            font-size: 14px;
            font-weight: 500;
            color: #908e8e;
          }
        }
      }
    }
  }
`;
export const WalletWrapperStyle = styled.div`
  // margin-right: 24px;
`;
export const DropListStyle = styled.div``;
