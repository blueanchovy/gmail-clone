import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.js";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SendIcon from "@mui/icons-material/Send";
import DescriptionIcon from "@mui/icons-material/Description";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        variant="text"
        startIcon={<AddIcon fontSize="large" />}
        style={{ color: "black" }}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <div className="sidebar__options">
        <SidebarOption
          Icon={InboxIcon}
          title="Inbox"
          number="543"
          selected={true}
        />
        <SidebarOption Icon={StarIcon} title="Starred" number="24" />
        <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number="24" />
        <SidebarOption Icon={SendIcon} title="Sent" number="63" />
        <SidebarOption Icon={DescriptionIcon} title="Drafts" number="74" />
        <SidebarOption Icon={ExpandMoreIcon} title="More" number="" />
      </div>

      <div className="sidebar__meet">
        <h3>Meet</h3>
        <div className="sidebar__meetIcons">
          <SidebarOption Icon={VideocamIcon} title="New Meeting" />
          <SidebarOption Icon={KeyboardIcon} title="Join Meeting" />
        </div>
      </div>

      <div className="sidebar__hangouts">
        <h3>Hangouts</h3>
        <div className="sidebar__hangoutsItems">
          <Avatar />
          <h3>Me</h3>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
