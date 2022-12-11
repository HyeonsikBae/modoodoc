import React from "react";
import { ReviewType } from "../../types/dto";
import ReviewButton from "./ReviewButton";
import Reviewer from "./Reviewer";
import ReviewText from "./ReviewText";
import ReviewTreat from "./ReviewTreat";

interface ReviewProps {
  review: ReviewType;
}

const Review = (props: ReviewProps): JSX.Element => {
  const { review } = props;
  return (
    <div>
      <ReviewButton review={review} />
      <ReviewText text={review.contents} />
      <ReviewTreat
        treat_name={review.treatment_prices[0].name}
        treat_price={review.treatment_prices[0].price}
      />
      <Reviewer
        customer={review.customer}
        registered_at={review.registered_at}
      />
    </div>
  );
};

export default Review;
