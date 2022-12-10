import React from "react";
import { useLocation } from "react-router-dom";
import { HospitalType } from "../../types/dto";

interface ILocation {
  state: {
    hospital: HospitalType;
  };
}

const ReviewList = (): JSX.Element => {
  const { state } = useLocation() as ILocation;
  console.log(state);
  return <div>REVIEW LIST</div>;
};

export default ReviewList;
