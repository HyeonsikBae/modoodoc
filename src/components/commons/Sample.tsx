/* eslint-disable import/order */
import React from "react";
import styled from "styled-components";

const SampleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: calc(50vw - 25vw);
  top: calc(50vh - 25vh);
  width: 50vw;
  height: 50vh;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: white;
`;

const Sample = (): JSX.Element => {
  return (
    <SampleStyle style={{ width: "50vw", height: "50vh" }}>SAMPLE</SampleStyle>
  );
};

export default Sample;
