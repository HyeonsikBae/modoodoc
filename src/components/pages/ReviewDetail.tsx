import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HospitalType } from "../../types/dto";
import Header from "../commons/Header";

const BackButton = styled.button`
  position: absolute;
  width: 3rem;
  height: 3rem;
  background-color: white;
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

  console.log(state.hospital);

  return (
    <>
      <Header text="!">
        <BackButton onClick={() => move(state.hospital)} />
      </Header>
      <div>REVIEW DETAIL</div>
    </>
  );
};

export default ReviewDetail;
