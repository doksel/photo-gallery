import styled from "styled-components";

export const BoxLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const WrapLoader = styled.span`
  font-size: 30px;
  cursor: pointer;
  animation: ${(props) =>
    props.active ? "rotate 1s infinite linear" : "none"};
  animation: rotate 1s infinite linear;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
