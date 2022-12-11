import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const ReceiptStyle = styled.div`
  position: relative;
  width: 81px;
  height: 20px;
  margin: 1rem 0;
  background: #4c1192;
  border-radius: 11.5px;
  line-height: 1.2rem;
`;

const Span = styled.span`
  position: relative;
  color: ${theme.colors.white};
  font-size: 0.7rem;
  left: 1.4rem;
`;

const Receipt = (): JSX.Element => {
  return (
    <ReceiptStyle>
      <Span>영수증 인증</Span>
    </ReceiptStyle>
  );
};

export default Receipt;
