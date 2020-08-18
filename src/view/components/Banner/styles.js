import styled from "styled-components";

export const Slider = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image && props.image.urls.regular});
  filter: grayscale(0.5);
  position: relative;

  &:before {
    position: absolute;
    top: 50%;
    z-index: 10;
    left: 50%;
    font-size: 80px;
    line-height: 1;
    opacity: 0.7;
    color: #fff;
    transform: translate(-50%, -50%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
`;
