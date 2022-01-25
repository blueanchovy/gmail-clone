import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__leftMenu">
          <div>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </div>
        </div>

        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" />
      </div>

      <div className="header__middle"></div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
