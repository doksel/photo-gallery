import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../common/Loader";
import { getImageRandom, clearImage } from "../../../store/createSlices/images";
import { Slider } from "./styles";

const Banner = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.images.image);
  const loading = useSelector((state) => state.images.loading);

  useEffect(() => {
    // вылетает ошибка "Rate Limit Exceeded"
    // setInterval(() => {
    //   dispatch(getImageRandom());
    // }, 10000);
    dispatch(getImageRandom());

    return () => dispatch(clearImage());
  }, []);

  return loading ? (
    <Loader />
  ) : image ? (
    <Slider image={image} />
  ) : (
    <Slider>
      <div>Banner wasn't downloaded</div>
    </Slider>
  );
};

export default Banner;
