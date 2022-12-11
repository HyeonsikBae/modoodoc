import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { axiosGetReviewList } from "../../network/axios.custom";
import { HospitalType, ReviewType } from "../../types/dto";
import Content from "../commons/Content";
import Header from "../commons/Header";
import Review from "../reviews/Review";

const BackButton = styled.button`
  position: absolute;
  width: 3rem;
  height: 3rem;
  background-color: white;
  margin: 0.5rem;
`;

interface ILocation {
  state: {
    hospital: HospitalType;
  };
}

const ReviewList = (): JSX.Element => {
  const { state } = useLocation() as ILocation;
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  const fetchReviewList = useCallback(
    (search: string): void => {
      console.log("callbac");
      axiosGetReviewList(state.hospital.id, search, page, 5)
        .then((response) => {
          setReviews(reviews.concat(response.data.reviews));
        })
        .catch((error) => console.error(error));
    },
    [page]
  );

  useEffect(() => {
    fetchReviewList("");
  }, [fetchReviewList]);

  useEffect(() => {
    if (inView) {
      setPage((page) => page + 1);
    }
  }, [inView]);

  const renderReviews = (): JSX.Element[] => {
    return reviews.map((review, index) => {
      return (
        <div key={review.id} ref={reviews.length - 1 === index ? ref : null}>
          <Review review={review} />
        </div>
      );
    });
  };

  const clickHandler = (): void => {
    navigate("/");
  };

  return (
    <>
      <Header text={state.hospital.name}>
        <BackButton onClick={clickHandler} />
      </Header>

      <Content>
        <section>filter</section>
        <section>review info</section>
        <section>clean system</section>
        <section>{renderReviews()}</section>
      </Content>
    </>
  );
};

export default ReviewList;
