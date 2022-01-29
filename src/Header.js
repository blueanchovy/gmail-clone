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
import { useSelector } from "react-redux";
import { selectUser, logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
        <div></div>
        <IconButton className="header__avatar" onClick={signout}>
          <Avatar src={user?.photoUrl} />
          <p>Logout</p>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
