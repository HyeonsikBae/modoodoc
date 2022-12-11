import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const ContentStyle = styled.div`
  background-color: ${theme.colors.lightGray};
`;

interface ContentProps {
  children: JSX.Element[] | JSX.Element;
}

const Content = (props: ContentProps): JSX.Element => {
  const { children } = props;
  return <ContentStyle>{children}</ContentStyle>;
};

export default Content;
