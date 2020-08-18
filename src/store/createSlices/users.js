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
    getUsersList(state, { payload }) {
      return {
        ...state,
        users: [...payload],
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

    getUser(state, { payload }) {
      return {
        ...state,
        user: { ...payload },
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
  getUsersList,
  getUser,
  setError,
  clearUser,
  clearErrore,
  setLoading,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

export const getImages = (params) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.users.getUsers(params);

    dispatch(getUsersList(data));
    dispatch(setLoading(false));
  } catch (errors) {
    dispatch(setError(errors.toString()));
    dispatch(setLoading(false));
  }
};

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
