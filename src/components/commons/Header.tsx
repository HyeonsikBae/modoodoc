/* eslint-disable import/order */
import React from "react";
import theme from "../../styles/theme";
import styled from "styled-components";
import Center from "../utils/Center";

interface HeaderProps {
  text: string;
  children?: JSX.Element;
}

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  height: 4rem;
  z-index: 1;
  color: ${theme.colors.white};
  font-weight: bold;
  position: sticky;
  top: 0;
  background-color: ${theme.colors.purple};
`;

const Header = (props: HeaderProps): JSX.Element => {
  const { text, children } = props;
  return (
    <HeaderStyle>
      {children}
      <Center>{text}</Center>
    </HeaderStyle>
  );
};

export default Header;
