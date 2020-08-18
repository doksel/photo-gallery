import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  images: [],
  image: null,
  loading: false,
  error: "",
};

const calculatorSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    getImagesList(state, { payload }) {
      return {
        ...state,
        images: [...payload],
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
    getImage(state, { payload }) {
      return {
        ...state,
        image: { ...payload },
      };
    },
    clearImage(state) {
      return {
        ...state,
        image: null,
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
  getImagesList,
  getImage,
  setError,
  clearImage,
  clearErrore,
  setLoading,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

export const getImages = (params) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.images.getImages(params);

    dispatch(getImagesList(data));
    dispatch(setLoading(false));
  } catch (errors) {
    dispatch(setError(errors.toString()));
    dispatch(setLoading(false));
  }
};

export const getImageById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.images.getImageById(id);

    dispatch(getImage(data));
    dispatch(setLoading(false));
  } catch (errors) {
    dispatch(setError(errors.toString()));
    dispatch(setLoading(false));
  }
};

export const getImageRandom = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await api.images.getImageRandom();

    dispatch(getImage(data));
    dispatch(setLoading(false));
  } catch (errors) {
    dispatch(setError(errors.toString()));
    dispatch(setLoading(false));
  }
};
