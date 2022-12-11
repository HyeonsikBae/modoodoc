import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const Span = styled.span`
  color: ${theme.colors.gray};
  padding: 0 0.2rem;
`;

const VerticalBar = (): JSX.Element => {
  return <Span>|</Span>;
};

export default VerticalBar;
