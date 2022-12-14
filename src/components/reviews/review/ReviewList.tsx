import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { axiosGetReviewList } from "../../../network/axios.custom";
import { HospitalType, ReviewType } from "../../../types/dto";
import Review from "./Review";

interface ReviewListProps {
  hospital: HospitalType;
}

const ReviewList = (props: ReviewListProps): JSX.Element => {
  const { hospital } = props;
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [ref, inView] = useInView();
  const [page, setPage] = useState<number>(1);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const fetchReviewList = useCallback(
    (search: string): void => {
      if (!isEnd) {
        axiosGetReviewList(hospital.id, search, page, 5)
          .then((response) => {
            setReviews(reviews.concat(response.data.reviews));
            if (response.data.reviews.length < 5) {
              setIsEnd(true);
            }
          })
          .catch((error) => console.error(error));
      }
    },
    [page]
  );

  useEffect(() => {
    fetchReviewList("");
  }, [fetchReviewList]);

  useEffect(() => {
    if (inView && !isEnd) {
      setPage((page) => page + 1);
    }
  }, [inView]);

  const renderReviews = (): JSX.Element[] => {
    return reviews.map((review, index) => {
      return (
        <div
          style={{ paddingTop: "1rem" }}
          key={review.id}
          ref={reviews.length - 1 === index ? ref : null}
        >
          <Review review={review} hospital={hospital} />
        </div>
      );
    });
  };

  return <>{renderReviews()}</>;
};

export default ReviewList;
