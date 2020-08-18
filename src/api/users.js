import axios from "axios";
import { setHeader, API_URL } from "./index";

export default {
  getUsers: async () => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}/photos`,
      headers: setHeader(),
    };

    const data = await axios(config);

    return data;
  },

  getUserByUsername: async (username) => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}/users/${username}`,
      headers: setHeader(),
    };

    const data = await axios(config);

    return data;
  },

  getUserRandom: async (id) => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}/users/:username`,
      headers: setHeader(),
    };

    const data = await axios(config);

    return data;
  },
};
