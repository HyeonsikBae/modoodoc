import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../styles/theme";
import { HospitalType, ReviewType } from "../../../types/dto";
import HorizontalBar from "../../commons/HorizontalBar";
import ReviewButton from "./ReviewButton";
import Reviewer from "./Reviewer";
import ReviewText from "./ReviewText";
import ReviewTreat from "./ReviewTreat";

const ReviewWrapper = styled.div`
  background-color: ${theme.colors.white};
  padding: 1rem;
`;

interface ReviewProps {
  review: ReviewType;
  hospital: HospitalType;
}

const Review = (props: ReviewProps): JSX.Element => {
  const { review, hospital } = props;

  return (
    <ReviewWrapper>
      <ReviewButton review={review} hospital={hospital} />
      <ReviewText text={review.contents} />
      <ReviewTreat
        treat_name={review.treatment_prices[0].name}
        treat_price={review.treatment_prices[0].price}
      />
      <HorizontalBar />
      <Reviewer
        customer={review.customer}
        registered_at={review.registered_at}
      />
    </ReviewWrapper>
  );
};

export default Review;