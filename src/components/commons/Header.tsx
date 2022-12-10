import React from "react";
import styled from "styled-components";
import Center from "../utils/Center";
import theme from "../../styles/theme";

const HeaderStyle = styled.header`
  height: 4rem;
  color: ${theme.colors.white};
  font-weight: bold;
  position: sticky;
  top: 0;
  background-color: ${theme.colors.purple};
`;

interface HeaderProps {
  text: string;
}

const Header = (props: HeaderProps): JSX.Element => {
  const { text } = props;
  return (
    <HeaderStyle>
      <Center>{text}</Center>
    </HeaderStyle>
  );
};

export default Header;
