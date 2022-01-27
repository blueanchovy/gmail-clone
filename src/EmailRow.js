import React from "react";
import "./EmailRow.css";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function EmailRow({ id, title, subject, description, time }) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/Mail");
      }}
      className="emailRow"
    >
      <div className="emailRow__options">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarBorderIcon />
        </IconButton>
      </div>

      <div className="emailRow__title">
        <h3>{title}</h3>
      </div>

      <div className="emailRow__message">
        <h4>
          {subject}
          {"  "}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
