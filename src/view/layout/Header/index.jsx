import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import LogoImg from "../../../images/logo.png";

import { WrapHeader, Logo, Menu } from "./styles";

const Header = () => (
  <WrapHeader>
    <Logo>
      <Link to="/">
        <img src={LogoImg} alt="logo" />
      </Link>
    </Logo>

    <NavBar />

    <Menu>
      <Link to="/login">Login</Link>
    </Menu>
  </WrapHeader>
);

export default Header;
