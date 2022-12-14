import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HospitalType } from "../../types/dto";
import CleanSystem from "../cleans/CleanSystem";
import Content from "../commons/Content";
import Header from "../commons/Header";
import ReviewList from "../reviews/review/ReviewList";
import ReviewSummary from "../reviews/summary/ReviewSummary";
import Flex from "../utils/Flex";

const BackButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
`;

interface ILocation {
  state: {
    hospital: HospitalType;
  };
}

const ReviewPage = (): JSX.Element => {
  const { state } = useLocation() as ILocation;
  const navigate = useNavigate();

  const clickHandler = (): void => {
    navigate("/");
  };

  return (
    <>
      <Header text={state.hospital.name}>
        <BackButton onClick={clickHandler}>
          <img src="/images/left-arrow.png" alt="back" />
        </BackButton>
      </Header>
      <Content>
        <section>filter</section>
        <ReviewSummary hospital={state.hospital} />
        <CleanSystem />
        <section>
          <Flex justifyContent="space-between">
            <div>1</div>
            <div>2</div>
          </Flex>
        </section>
        <section>
          <ReviewList hospital={state.hospital} />
        </section>
      </Content>
    </>
  );
};

export default ReviewPage;
