import instance from "./axios.instance";

const getHospitalListURL = `/hospitals/`;

export const axiosGetHospitalList = async (): Promise<any> => {
  try {
    const response = await instance.get(getHospitalListURL);
    return response;
  } catch (error) {
    throw error;
  }
};
