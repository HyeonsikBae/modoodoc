/* eslint-disable import/order */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosGetHospitalList } from "../../network/axios.custom";
import { HospitalType } from "../../types/dto";
import Content from "../commons/Content";
import Header from "../commons/Header";

const HospitalPage = (): JSX.Element => {
  const [hospitalList, setHospitalList] = useState<HospitalType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosGetHospitalList()
      .then((response) => setHospitalList(response.data.hospitals))
      .catch((error) => console.error(error));
  }, []);

  const move = (hospital: HospitalType): void => {
    navigate("/review", {
      state: {
        hospital,
      },
    });
  };

  const renderHospitalList = (): JSX.Element[] => {
    return hospitalList.map((hospital) => {
      return (
        <div key={hospital.id}>
          <button onClick={(): void => move(hospital)}>{hospital.name}</button>
        </div>
      );
    });
  };

  return (
    <>
      <Header text="모두닥" />
      <Content>{renderHospitalList()}</Content>
    </>
  );
};

export default HospitalPage;
