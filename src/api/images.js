import axios from "axios";
import qs from "qs";
import { setHeader, API_URL } from "./index";

export default {
  getImages: async (params) => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}/photos?${qs.stringify(params)}`,
      headers: setHeader(),
    };

    const data = await axios(config);

    return data;
  },

  getImageById: async (id) => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}/photos/${id}`,
      headers: setHeader(),
    };

    const data = await axios(config);

    return data;
  },

  getImageRandom: async (id) => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}/photos/random`,
      headers: setHeader(),
    };

    const data = await axios(config);

    return data;
  },

  searchImages: async (params) => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}/search/photos?${qs.stringify(params)}`,
      headers: setHeader(),
    };

    const data = await axios(config);

    return data;
  },
};
