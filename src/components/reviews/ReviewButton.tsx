import { Rating } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";
import { HospitalType, ReviewType } from "../../types/dto";
import VerticalBar from "../commons/VerticalBar";
import Receipt from "./Receipt";
import SuggestText from "./SuggestText";

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

type SpanProps = {
  fontWeight?: string;
  fontColor?: string;
};

const Span = styled.span<SpanProps>`
  font-weight: ${(props): string => (props.fontWeight ? props.fontWeight : "")};
  color: ${(props): string => (props.fontColor ? props.fontColor : "black")};
`;

interface ReviewButtonProps {
  review: ReviewType;
  hospital: HospitalType;
}

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
          <Span fontWeight="bold">
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
          <Span fontWeight="bold">{review.total_score}</Span>
          <VerticalBar />
          <SuggestText suggest={review.suggest} />
          {review.visited_at ? (
            <>
              <VerticalBar />
              <Span fontColor={`${theme.colors.gray}`}>
                {`${review.visited_at}년 전 방문`}
              </Span>
            </>
          ) : (
            ""
          )}
        </div>
        <span style={{ color: `${theme.colors.gray}` }}>
          {`의사: ${review.doctor_name}`}
        </span>
      </ReviewButtonWrapper>
    </ButtonWrapper>
  );
};

export default ReviewButton;
