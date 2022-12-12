import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const ReceiptStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

const Image = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.2rem;
`;

const Receipt = (): JSX.Element => {
  return (
    <ReceiptStyle>
      <Image src="/images/check.png" alt="receipt" />
      <Span>영수증 인증</Span>
    </ReceiptStyle>
  );
};

export default Receipt;
