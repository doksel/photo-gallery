import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import PhotoCard from "../../components/PhotoCard";
import Loader from "../../common/Loader";

import { getImageById, clearImage } from "../../../store/createSlices/images";

const PhotoPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();

  const image = useSelector((state) => state.images.image);
  const loading = useSelector((state) => state.images.loading);

  useEffect(() => {
    dispatch(getImageById(id));

    return () => dispatch(clearImage());
  }, []);

  return (
    <>
      <Header />

      <Content>
        {loading ? (
          <Loader />
        ) : (
          <PhotoCard goBack={history.goBack} image={image} />
        )}
      </Content>
    </>
  );
};

export default PhotoPage;
