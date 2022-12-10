import React, { useEffect, useState } from "react";
import { axiosGetHospitalList } from "../../network/axios.custom";
import { HospitalType } from "../../types/dto";
import Header from "../commons/Header";

const HospitalList = (): JSX.Element => {
  const [hospitalList, setHospitalList] = useState<HospitalType[]>([]);
  useEffect(() => {
    axiosGetHospitalList()
      .then((response) => setHospitalList(response.data.hospitals))
      .catch((error) => console.error(error));
  }, []);

  const renderHospitalList = (): JSX.Element[] => {
    return hospitalList.map((hospital) => {
      return <div key={hospital.id}>{hospital.name}</div>;
    });
  };

  return (
    <>
      <Header text="모두닥" />
      {renderHospitalList()}
    </>
  );
};

export default HospitalList;
