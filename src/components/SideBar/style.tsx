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
  border-radius: 20px;
`

export const Line = styled.hr`
  width: 20px;
  border: 1px solid #E5E5E5;
  box-shadow: 0 2px 1px 0 #FFFFFF;
`
