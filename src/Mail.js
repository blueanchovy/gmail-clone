import React from "react";
import "./Mail.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import PrintIcon from "@mui/icons-material/Print";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router-dom";

function Mail() {
  let navigate = useNavigate();

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsBack">
          <IconButton onClick={() => navigate(-1)}>
            {/* go back one page */}
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className="mail__toolsSections">
          <div className="mail__toolsSection">
            <IconButton>
              <MoveToInboxIcon />
            </IconButton>
            <IconButton>
              <ErrorIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
          <div className="mail__toolsSection">
            <IconButton>
              <MarkAsUnreadIcon />
            </IconButton>
            <IconButton>
              <WatchLaterIcon />
            </IconButton>
            <IconButton>
              <AddTaskIcon />
            </IconButton>
          </div>
          <div className="mail__toolsSection">
            <IconButton>
              <DriveFileMoveIcon />
            </IconButton>
            <IconButton>
              <LabelIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        <div className="mail__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Subject is very important!!!</h2>
          <div className="mail__bodyHeaderOptions">
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <OpenInNewIcon />
            </IconButton>
          </div>
        </div>

        <div className="mail__sender">
          <div className="mail__senderLeftMenu">
            <Avatar />
            <h4>id@email.com</h4>
          </div>

          <div className="mail__senderRightMenu">
            <p>10 PM</p>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail__message">This is a message!</div>
      </div>
    </div>
  );
}

export default Mail;
