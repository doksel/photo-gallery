import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Input from "../../common/Input";
import Button from "../../common/Button";

import { searchImages } from "../../../store/createSlices/images";
import { MenuLinks } from "../../../helpers/values";

import { Menu } from "./styles";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const search = (query) => {
    dispatch(searchImages({ query, per_page: 15 }));
    setSearchValue("");
  };

  return (
    <Menu>
      {MenuLinks.map((link, index) => (
        <Link to="#" key={index} onClick={() => search(link.name)}>
          {link.name}
        </Link>
      ))}

      <Input onChange={setSearchValue} value={searchValue} />

      <Button type="primary" onClick={() => search(searchValue)}>
        Search
      </Button>
    </Menu>
  );
};

export default NavBar;
