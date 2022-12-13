import { Rating } from "@mui/material";
import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import { HospitalType } from "../../../types/dto";
import VerticalBar from "../../commons/VerticalBar";
import Flex from "../../utils/Flex";
import Span from "../../utils/Span";

const SummaryWrapper = styled.div`
  background-color: ${theme.colors.white};

  padding: 1rem;
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
            <div style={{ width: "30%" }}>
              <Span fontSize="0.8rem">{renderList[key]}</Span>
            </div>
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
      <div
        style={{
          padding: "0.5rem",
          border: `1px solid ${theme.colors.lightGray}`,
        }}
      >
        <Flex direction="row" justifyContent="space-between">
          <Flex direction="column" width="60%">
            {renderRatings()}
          </Flex>
          <Flex direction="column" alignItems="center" width="40%">
            <Flex
              direction="column"
              alignItems="center"
              width="100%"
              height="60%"
            >
              <p>별점 평균</p>
              {hospital.total_score.toFixed(1)} / 10
            </Flex>
            <Flex direction="row" width="100%" height="40%">
              <Flex width="100%">GOOD</Flex>
              <Flex width="100%">BAD</Flex>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </SummaryWrapper>
  );
};

export default ReviewSummary;
