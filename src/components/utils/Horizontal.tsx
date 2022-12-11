import React from "react";
import styled from "styled-components";

const HorizontalStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

interface HorizontalProps {
  children: JSX.Element[] | string[];
}

const Horizontal = (props: HorizontalProps): JSX.Element => {
  const { children } = props;
  return <HorizontalStyle>{children}</HorizontalStyle>;
};

export default Horizontal;
