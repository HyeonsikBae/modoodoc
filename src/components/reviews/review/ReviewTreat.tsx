import React from "react";
import styled from "styled-components";
import { callbackify } from "util";
import GrayBox from "../../utils/GrayBox";
import theme from "../../../styles/theme";
import Span from "../../utils/Span";

const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

interface ReviewTreatProps {
  treat_name: string;
  treat_price: string;
}

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
