import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const SideBarStyle = styled.div`
  margin-right: 30px;
`
export const SideBarTab =styled.header`
  width: 40px;
  height: 80px;
  box-shadow: 3px 3px 8px 0 rgba(0,0,0,0.11), -3px -3px 8px 0 #FFFFFF;
  padding: 10px;
  margin: 63px 0 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`
export const SideBarLogo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  .project-name{
    margin-left: 8px;
    display: flex;
    justify-content: center;
    .x-name{
      font-size: 30px;
      font-weight: bold;
    }
    .bridge-name{
      font-size: 30px;
      margin-left: 8px;
    }
  }
`
export const Line = styled.hr`
  width: 20px;
  border: 1px solid #E5E5E5;
  box-shadow: 0 2px 1px 0 #FFFFFF;
`
