import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";
import { ReviewType } from "../../types/dto";
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
}

const ReviewButton = (props: ReviewButtonProps): JSX.Element => {
  const { review } = props;
  const navigate = useNavigate();

  const move = (): void => {
    navigate("/detail");
  };

  return (
    <ButtonWrapper onClick={move}>
      <ReviewButtonWrapper>
        <Receipt />
        <p>
          <Span fontWeight="bold">
            받은 진료 : {review.treatment_prices[0].name}
          </Span>
        </p>
        <p>
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
        </p>
        {`의사: ${review.doctor_name}`}
      </ReviewButtonWrapper>
    </ButtonWrapper>
  );
};

export default ReviewButton;
