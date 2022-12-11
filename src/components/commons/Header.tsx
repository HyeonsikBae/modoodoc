import React from "react";
import styled from "styled-components";
import Center from "../utils/Center";
import theme from "../../styles/theme";

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

interface HeaderProps {
  text: string;
  children?: JSX.Element;
}

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
