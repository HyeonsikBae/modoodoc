import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { axiosGetReviewList } from "../../../network/axios.custom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { HospitalType, ReviewType } from "../../../types/dto";
import { addList } from "../../../store/slices/filterSlice";
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
  const [reload, setReload] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const filterStore = useAppSelector((store) => store.filter);
  const fetchReviewList = useCallback(
    (search: string): void => {
      console.log(filterStore.filter);
      if (!isEnd) {
        axiosGetReviewList(hospital.id, filterStore.filter, page, 5)
          .then((response) => {
            setReviews(reviews.concat(response.data.reviews));
            if (response.data.reviews.length < 5) {
              setIsEnd(true);
            }
          })
          .catch((error) => console.error(error));
      }
    },
    [page, reload]
  );

  useEffect(() => {
    setReviews([]);
    setPage(1);
    setReload((reload) => !reload);
  }, [filterStore.filter]);

  useEffect(() => {
    const newList = new Set<string>();
    reviews.map((review) => {
      return review.treatment_prices.map((list) => newList.add(list.name));
    });
    const newData: any = {
      hospital: hospital.id,
      treat: newList,
    };
    dispatch(addList(newData));
  }, [reviews]);

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
