import React from "react";
import styled from "styled-components";

const ContentStyle = styled.div`
  padding: 1rem;
`;

interface ContentProps {
  children: JSX.Element[] | JSX.Element;
}

const Content = (props: ContentProps): JSX.Element => {
  const { children } = props;
  return <ContentStyle>{children}</ContentStyle>;
};

export default Content;
