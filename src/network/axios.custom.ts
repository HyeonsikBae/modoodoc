import instance from "./axios.instance";

const getHospitalListURL = `/hospitals`;

export const axiosGetHospitalList = async (): Promise<any> => {
  try {
    const response = await instance.get(getHospitalListURL);
    return response;
  } catch (error) {
    throw error;
  }
};

const getReviewListURL = `/hospitals`;

export const axiosGetReviewList = async (
  hospitalId: number,
  search_query: string,
  page: number,
  size: number
): Promise<any> => {
  try {
    const response = await instance.get(
      `${getReviewListURL}/${hospitalId}/reviews/?search_query=${search_query}&page=${page}&size=${size}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
