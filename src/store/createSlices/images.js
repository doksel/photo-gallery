import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";
import { message } from "../../helpers/notifications";

const initialState = {
  images: [],
  image: null,
  loading: false,
  defaultParams: { per_page: 15 },
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
    setParams(state, { payload }) {
      return {
        ...state,
        defaultParams: { ...initialState.defaultParams, ...payload },
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
  setParams,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

export const getImages = (params) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setParams(params));

    const { data } = await api.images.getImages({
      ...initialState.defaultParams,
      ...params,
    });

    dispatch(getImagesList(data));
    dispatch(setLoading(false));
  } catch (errors) {
    message.error("Images wasn't download");
    dispatch(setError(errors.toString()));
    dispatch(setLoading(false));
  }
};

export const searchImages = (params) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setParams(params));

    const { data } = await api.images.searchImages({
      ...initialState.defaultParams,
      ...params,
    });

    dispatch(getImagesList(data.results));
    dispatch(setLoading(false));
  } catch (errors) {
    message.error("Images wasn't downloaded");
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
    message.error("Image wasn't downloaded");
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
    message.error("Banner wasn't downloaded");
    dispatch(setError(errors.toString()));
    dispatch(setLoading(false));
  }
};
