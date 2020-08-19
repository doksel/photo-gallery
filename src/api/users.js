import axios from "axios";
import { setHeader, API_URL } from "./index";

export default {
  getUserByUsername: async (username) => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}/users/${username}`,
      headers: setHeader(),
    };

    const data = await axios(config);

    return data;
  },
};
