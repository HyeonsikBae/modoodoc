import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HospitalType } from "../../types/dto";
import Header from "../commons/Header";

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
    hospitalId: number;
    reviewId: number;
    hospital: HospitalType;
  };
}

const ReviewDetail = (): JSX.Element => {
  const { state } = useLocation() as ILocation;
  const navigate = useNavigate();

  const move = (hospital: HospitalType): void => {
    navigate("/review", {
      state: {
        hospital,
      },
    });
  };

  return (
    <>
      <Header text={state.hospital.name}>
        <BackButton onClick={() => move(state.hospital)}>
          <img src="/images/left-arrow.png" alt="back" />
        </BackButton>
      </Header>
      <div>REVIEW DETAIL</div>
    </>
  );
};

export default ReviewDetail;
