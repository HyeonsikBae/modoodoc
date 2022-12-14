import React from "react";
import { HospitalType, ReviewType } from "../../../types/dto";
import HorizontalBar from "../../commons/HorizontalBar";
import Section from "../../commons/Section";
import ReviewButton from "./ReviewButton";
import Reviewer from "./Reviewer";
import ReviewText from "./ReviewText";
import ReviewTreat from "./ReviewTreat";

interface ReviewProps {
  review: ReviewType;
  hospital: HospitalType;
}

const Review = (props: ReviewProps): JSX.Element => {
  const { review, hospital } = props;

  return (
    <Section padding="1rem">
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
    </Section>
  );
};

export default Review;
