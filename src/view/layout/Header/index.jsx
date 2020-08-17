import React from "react";

import NavBar from "./NavBar";

const Header = () => (
    <div class="header">
        <a aria-current="page" class="logo active" href="/">
            <img src="./static/media/logo.a277d5f5.png"/>
        </a>
        <NavBar/>
        <a class="item" href="/login/">Login</a>
    </div>
);

export default Header;