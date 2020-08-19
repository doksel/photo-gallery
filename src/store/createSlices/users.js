import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  users: [],
  user: null,
  loading: false,
  error: "",
};

const calculatorSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser(state, { payload }) {
      return {
        ...state,
        user: { ...payload },
      };
    },
    setError(state, { payload }) {
      return {
        ...state,
        error: payload,
      };
    },
    setLoading(state, { payload }) {
      return {
        ...state,
        loading: payload,
      };
    },
    clearUser(state) {
      return {
        ...state,
        user: null,
      };
    },
    clearErrore(state) {
      return {
        ...state,
        error: "",
      };
    },
  },
});

export const {
  getUser,
  setError,
  clearUser,
  clearErrore,
  setLoading,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

export const getUserByUsername = (name) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.users.getUserByUsername(name);

    dispatch(getUser(data));
    dispatch(setLoading(false));
  } catch (errors) {
    dispatch(setError(errors.toString()));
    dispatch(setLoading(false));
  }
};
