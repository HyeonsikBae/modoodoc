import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { ReviewType } from "../../types/dto";
import visit from "../../utils/visit";
import Receipt from "./Receipt";
import SuggestText from "./SuggestText";

const ButtonWrapper = styled.button`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.white};
  padding: 1rem 0;
  display: flex;
  text-align: left;
`;

const ReviewButtonWrapper = styled.div`
  position: relative;
`;

const Span = styled.span`
  font-weight: bold;
`;

interface ReviewButtonProps {
  review: ReviewType;
}

const ReviewButton = (props: ReviewButtonProps): JSX.Element => {
  const { review } = props;

  return (
    <ButtonWrapper>
      <ReviewButtonWrapper>
        <Receipt />
        <p>
          <Span>받은 진료 : {review.treatment_prices[0].name}</Span>
        </p>
        <p>
          <Span>{review.total_score}</Span>
          <SuggestText suggest={review.suggest} />
          {review.visited_at ? `${review.visited_at}년 전 방문` : ""}
        </p>
        {`의사 : ${review.doctor_name}`}
      </ReviewButtonWrapper>
    </ButtonWrapper>
  );
};

export default ReviewButton;
