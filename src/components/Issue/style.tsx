import styled from "styled-components";

export const IssueStyle = styled.div`
  margin-top: 20px;
`
export const CurrentAccountStyle = styled.div`
  background: #F6F6F6;
  border-radius: 6px;
  width: 419px;
  height: 70px;
  padding: 16px;
  font-size: 12px;
  color: #282828;

  .current-account {
    margin-top: 4px;
    font-size: 12px;
    color: #8E8E8E;
  }
`
export const IssueBtcInputStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  .ant-input-number {
    width: 200px;
    height: 44px;
    font-size: 32px;
    color: #8E8E8E;
    line-height: 44px;
  }

  .btc-title {
    font-size: 32px;
    color: #282828;
    font-weight: bold;
    margin-left: 16px;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`
export const LockingCollateralStyle = styled.div`
  color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  .locking-title {
    font-size: 14px;
  }

  .locking-num {
    margin-left: 8px;
    font-size: 14px;
  }

  .locking-tip {
    margin-left: 8px;
    padding: 0 4px;
    height: 20px;
    background: #FDF5E0;
    border-radius: 4px;
    font-size: 12px;
    color: #9B7E2E;
    line-height: 20px;
    text-align: center;
  }
`
export const IssueFooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  .issue-footer-title {
    font-size: 12px;
    color: #282828;
  }

  .issue-footer-num {
    font-size: 24px;
    color: #282828;
    margin-top: 8px;
  }

  button {
    width: 419px;
    height: 44px;
    margin-top: 20px;
  }
`
export const ConfirmationIssueModalStyle = styled.div`
  position: absolute;
  display: flex;
  .ant-modal-body{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ConfirmationIssueModalFooter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .issue-footer-title {
    font-size: 12px;
    color: #282828;
  }

  .issue-footer-num {
    font-size: 24px;
    color: #282828;
    margin-top: 8px;
  }

`
export const VaultAccountStyle = styled.div`
  margin-top: 10px;
  background: #F6F6F6;
  border-radius: 6px;
  width: 419px;
  height: 70px;
  padding: 16px;
  font-size: 12px;
  color: #282828;

  .current-account {
    margin-top: 4px;
    font-size: 12px;
    color: #8E8E8E;
  }
`
export const PCXbalanceStyle = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
font-size: 14px;
color: #282828;
font-weight: bold;

`

