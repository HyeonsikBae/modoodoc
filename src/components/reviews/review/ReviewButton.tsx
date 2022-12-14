/* eslint-disable import/order */
import React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../../styles/theme";
import styled from "styled-components";
import { HospitalType, ReviewType } from "../../../types/dto";
import { Rating } from "@mui/material";
import VerticalBar from "../../utils/VerticalBar";
import Span from "../../utils/Span";
import Receipt from "./Receipt";
import SuggestText from "./SuggestText";

interface ReviewButtonProps {
  review: ReviewType;
  hospital: HospitalType;
}

const ButtonWrapper = styled.button`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.white};
  padding: 0;
  margin-bottom: 1rem;
  display: flex;
  text-align: left;
`;

const ReviewButtonWrapper = styled.div`
  position: relative;
`;

const ReviewButton = (props: ReviewButtonProps): JSX.Element => {
  const { review, hospital } = props;
  const navigate = useNavigate();

  const clickHandler = (
    hospitalId: number,
    reviewId: number,
    hospital: HospitalType
  ): void => {
    navigate("/detail", {
      state: {
        hospitalId,
        reviewId,
        hospital,
      },
    });
  };

  return (
    <ButtonWrapper
      onClick={(): void =>
        clickHandler(review.hospital_id, review.id, hospital)
      }
    >
      <ReviewButtonWrapper>
        <Receipt />
        <p>
          <Span fontSize="0.8rem" fontWeight="bold">
            받은 진료 : {review.treatment_prices[0].name}
          </Span>
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Rating
            name="rating"
            defaultValue={review.total_score / 2}
            precision={0.5}
            size="small"
          />
          <Span fontSize="0.8rem" fontWeight="bold">
            {review.total_score}
          </Span>
          <VerticalBar />
          <SuggestText suggest={review.suggest} />
          {review.visited_at ? (
            <>
              <VerticalBar />
              <Span fontSize="0.8rem" color={`${theme.colors.gray}`}>
                {`${review.visited_at}년 전 방문`}
              </Span>
            </>
          ) : (
            ""
          )}
        </div>
        <Span
          fontSize="0.8rem"
          color={theme.colors.gray}
        >{`의사: ${review.doctor_name}`}</Span>
      </ReviewButtonWrapper>
    </ButtonWrapper>
  );
};

export default ReviewButton;
