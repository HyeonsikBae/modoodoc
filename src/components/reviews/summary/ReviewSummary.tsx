import { Rating } from "@mui/material";
import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import { HospitalType } from "../../../types/dto";
import VerticalBar from "../../commons/VerticalBar";

const SummaryWrapper = styled.div`
  background-color: ${theme.colors.white};
  padding: 1rem;
`;

const Span = styled.span`
  font-size: 0.8rem;
  width: 30%;
  margin: 0 0.1rem;
`;
interface FlexProps {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props): string =>
    props.direction ? `${props.direction}` : ""};
  border: 1px solid black;
  justify-content: ${(props): string =>
    props.justifyContent ? `${props.justifyContent}` : ""};
  align-items: ${(props): string =>
    props.alignItems ? `${props.alignItems}` : ""};
`;

interface ReviewSummaryProps {
  hospital: HospitalType;
}
interface IRenderList {
  [index: string]: string;
  score_service_clarity: string;
  score_service_kindness: string;
  score_treatment_explain: string;
  score_treatment_outcome: string;
}
const renderList: IRenderList = {
  score_service_clarity: "청결함",
  score_service_kindness: "직원의 친절",
  score_treatment_explain: "자세한 설명",
  score_treatment_outcome: "적절한 금액",
};

const ReviewSummary = (props: ReviewSummaryProps): JSX.Element => {
  const { hospital } = props;

  const renderRatings = (): JSX.Element[] => {
    return Object.keys(hospital)
      .filter((key) => {
        return Object.keys(renderList).includes(key);
      })
      .map((key) => {
        return (
          <Flex key={key} justifyContent="center">
            <Span>{renderList[key]}</Span>
            <VerticalBar />
            <Rating
              defaultValue={hospital[key] / 2}
              precision={0.5}
              size="small"
            />
          </Flex>
        );
      });
  };

  return (
    <SummaryWrapper>
      <p style={{ fontWeight: "bold" }}>리뷰 정보</p>
      <Flex direction="row">
        <Flex direction="column" style={{ width: "60%" }}>
          {renderRatings()}
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          style={{ width: "40%", height: "60%" }}
        >
          <Flex
            direction="column"
            alignItems="center"
            style={{ width: "100%", height: "60%" }}
          >
            <p>별점 평균</p>
            {hospital.total_score.toFixed(1)} / 10
          </Flex>
          <Flex direction="row">
            <Flex>GOOD</Flex>
            <Flex>BAD</Flex>
          </Flex>
        </Flex>
      </Flex>
    </SummaryWrapper>
  );
};

export default ReviewSummary;
