import styled from "styled-components";

export const WrapHeader = styled.div`
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;

export const Logo = styled.a`
  a {
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    opacity: 0.9;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  img {
    width: 90%;
    border-radius: 100%;
    max-height: 90%;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    padding: 5px;
    margin: 0px 30px;
    text-transform: uppercase;
    opacity: 0.7;
    cursor: pointer;
    color: white;

    :hover {
      opacity: 1;
      text-decoration: underline;
    }

    &.active {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;
