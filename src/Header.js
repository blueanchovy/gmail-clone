import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Avatar from "@mui/material/Avatar";

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

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input
          className="header__searchText"
          type="text"
          placeholder="Search Mail"
        ></input>
        <IconButton>
          <TuneIcon />
        </IconButton>
      </div>

      <div className="header__right">
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsRoundedIcon />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
