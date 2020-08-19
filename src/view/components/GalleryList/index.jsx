import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../common/Loader";
import Button from "../../common/Button";

import { getImages } from "../../../store/createSlices/images";

import { GalleryContainer, PhotoItem, Image, WrapButton } from "./styles";

const GalleryList = () => {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.images.images);
  const loading = useSelector((state) => state.images.loading);
  const defaultParams = useSelector((state) => state.images.defaultParams);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  const handleClick = () => {
    dispatch(
      getImages({ ...defaultParams, per_page: defaultParams.per_page + 15 })
    );
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      {images.length ? (
        <>
          <GalleryContainer>
            {images.map((image, index) => {
              return (
                <PhotoItem key={index}>
                  <Link to={`/photo-card/${image.id}`}>
                    <Image>
                      <img
                        src={image.urls.regular}
                        alt={image.alt_description}
                      />
                    </Image>
                  </Link>
                </PhotoItem>
              );
            })}
          </GalleryContainer>

          {images.length >= 15 && (
            <WrapButton>
              <Button type="primary" onClick={handleClick}>
                Loading more images
              </Button>
            </WrapButton>
          )}
        </>
      ) : (
        <GalleryContainer>Images not found</GalleryContainer>
      )}
    </>
  );
};

export default GalleryList;
