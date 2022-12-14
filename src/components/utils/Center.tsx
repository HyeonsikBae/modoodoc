/* eslint-disable import/order */
import React from "react";
import styled from "styled-components";

interface CenterProps {
  children: JSX.Element | string;
}

const CenterStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = (props: CenterProps): JSX.Element => {
  const { children } = props;
  return <CenterStyle>{children}</CenterStyle>;
};

export default Center;
