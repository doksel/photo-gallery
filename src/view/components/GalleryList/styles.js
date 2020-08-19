import styled from "styled-components";

export const GalleryContainer = styled.div`
  box-sizing: content-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 80%;
  margin: 100px auto 30px;
`;

export const PhotoItem = styled.div`
  width: 100%;
  max-height: 300px;

  a {
    width: 100%;
    overflow: hidden;
    height: 100%;
    justify-content: center;
    box-sizing: border-box;
    align-self: center;
    position: relative;
  }
`;

export const Image = styled.div`
  width: 100%;
  filter: grayscale(0.75);
  cursor: pointer;
  transition: 0.35s all ease;

  &:hover {
    filter: grayscale(0);
  }

  img {
    width: 100%;
    max-height: 300px;
    border-radius: 5%;
    transition: 0.35s all ease;

    &:hover {
      transform: scale(1.06);
    }
  }
`;

export const WrapButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
