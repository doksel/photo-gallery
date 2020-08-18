import React from "react";
import { Link } from "react-router-dom";

import Input from "../../common/Input";

import { MenuLinks } from "../../../helpers/values";

import { Menu } from "./styles";

const NavBar = () => (
  <Menu>
    {MenuLinks.map((link, index) => (
      <Link to={link.to} key={index}>
        {link.name}
      </Link>
    ))}
    <Input />
  </Menu>
);

export default NavBar;
