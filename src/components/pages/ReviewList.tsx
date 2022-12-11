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
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchReviewList = useCallback(
    (search: string): void => {
      if (!isEnd) {
        axiosGetReviewList(state.hospital.id, search, page, 5)
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
          <Review review={review} hospital={state.hospital} />
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
