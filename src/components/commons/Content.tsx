/* eslint-disable import/order */
import React from "react";
import theme from "../../styles/theme";
import styled from "styled-components";

interface ContentProps {
  children: JSX.Element[] | JSX.Element;
}

const ContentStyle = styled.div`
  background-color: ${theme.colors.lightGray};
`;

const Content = (props: ContentProps): JSX.Element => {
  const { children } = props;
  return <ContentStyle>{children}</ContentStyle>;
};

export default Content;
