/* eslint-disable import/order */
import axios from "axios";

const instance = axios.create({
  baseURL: "https://recruit.modoodoc.com/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer DSF23uirewfgsd768eASYDT2`,
  },
});

export default instance;
