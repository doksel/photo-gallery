import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
`;

export const Image = styled.div`
  width: 100%;
  height: 85vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image && props.image.urls.regular});
`;

export const Fullname = styled.div`
  position: absolute;
  bottom: 35px;
  left: 35px;
  font-weight: bold;
  background-color: #fff;
  padding: 15px;
  color: #000;
`;

export const BackTo = styled.div`
  position: fixed;
  left: 50px;
  top: 120px;
  z-index: 10;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
