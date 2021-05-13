import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from '../../../page/page-homePage/index';

const LinkDiv = styled.div`
  .linkBox {
    display: flex;
    justify-content: space-between;
    width: 120px;
    height: 32px;
    margin: 0 7px;
    .linkName {
      display: inline-block;
      width: 40px;
      font-family: PingFangSC-Medium;
      line-height: 30px;
      font-size: 15px;
      color: #adadad;
      font-weight: 500;
      text-align: center;
      &.active {
        color: black;
        border-bottom: 2px solid black;
      }
    }
    .linkName:hover {
      color: black;
      border-bottom: 2px solid black;
    }
  }
`;

interface MyState {
  currentActive?: string;
}

class TabList extends React.Component<MyState, any> {
  constructor(props: MyState) {
    super(props);
    this.state = {
      currentActive: 'Swap',
    };
  }

  changeFlag(val: string) {
    this.setState({currentActive: val});
  }

  render() {
    return (
      <Router>
        <LinkDiv>
          <div className="linkBox">
            <Link
              to="/"
              className={`linkName ${
                this.state.currentActive === 'Swap' ? 'active' : ''
              }`}
              onClick={this.changeFlag.bind(this, 'Swap')}
            >
              Swap
            </Link>
            <Link
              to="/"
              className={`linkName ${
                this.state.currentActive === 'Pool' ? 'active' : ''
              }`}
              onClick={this.changeFlag.bind(this, 'Pool')}
            >
              Pool
            </Link>
          </div>
        </LinkDiv>
      </Router>
    );
  }
}

export default TabList;
