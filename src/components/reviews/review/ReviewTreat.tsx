/* eslint-disable import/order */
import React from "react";
import theme from "../../../styles/theme";
import styled from "styled-components";
import GrayBox from "../../utils/GrayBox";
import Span from "../../utils/Span";

interface ReviewTreatProps {
  treat_name: string;
  treat_price: string;
}

const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ReviewTreat = (props: ReviewTreatProps): JSX.Element => {
  const { treat_name, treat_price } = props;
  const price = parseInt(treat_price, 10).toLocaleString("ko-KR");

  return (
    <GrayBox margin="1rem 0 0 0" backgroundColor={theme.colors.lightGray}>
      <Box>
        <Span fontSize="0.8rem" padding="0.5rem">
          {treat_name}
        </Span>
        <Span fontSize="0.8rem" padding="0.5rem">{`${price} 원`}</Span>
      </Box>
    </GrayBox>
  );
};

export default ReviewTreat;
