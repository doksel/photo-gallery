import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../common/Loader";
import { getImages } from "../../../store/createSlices/images";

import { GalleryContainer, PhotoItem, Image } from "./styles";

const GalleryList = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);
  const loading = useSelector((state) => state.images.loading);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <GalleryContainer>
      {images.map((image, index) => {
        return (
          <PhotoItem key={index}>
            <Link to={`/photo-card/${image.id}`}>
              <Image>
                <img src={image.urls.regular} alt={image.alt_description} />
              </Image>
            </Link>
          </PhotoItem>
        );
      })}
    </GalleryContainer>
  );
};

export default GalleryList;
