import axios from "axios";

import images from "./images";
import users from "./users";

export const CancelToken = axios.CancelToken;
export const API_URL = process.env.REACT_APP_API_URL;
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

export const setHeader = () => {
  return {
    Accept: "application/json",
    Authorization: `Client-ID ${CLIENT_ID}`,
  };
};

export default {
  images,
  users,
};
