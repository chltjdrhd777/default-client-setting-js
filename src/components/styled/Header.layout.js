import React from 'react';
import styled from 'styled-components';
import { B } from './index';

const HomeHeader = styled.header``;

function Header({ children }) {
  return (
    <HomeHeader>
      <B.Container></B.Container>
    </HomeHeader>
  );
}

export default Header;
