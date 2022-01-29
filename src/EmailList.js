import React, { useState, useEffect } from "react";
import "./EmailList.css";
import Section from "./Section.js";
import EmailRow from "./EmailRow.js";
import IconButton from "@mui/material/IconButton";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { db } from "./firebase";
import { query, orderBy, collection, onSnapshot } from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const emailsRef = collection(db, "emails");
    const q = query(emailsRef, orderBy("timestamp", "desc"));

    onSnapshot(q, (snapshot) =>
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <IconButton>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
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

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="blue" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailLIst__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

        <EmailRow
          title="Netflix"
          subject="New Plan!"
          description="Hey Manish! We're delighted to welcome you to Netflix. "
          time="10:15 PM"
        />
        <EmailRow
          title="Spotify"
          subject="Your plan is ending tomorrow."
          description="Hey Manish! Please update your spotify premiuim."
          time="10:15 AM"
        />
        <EmailRow
          title="Netflix"
          subject="New Plan!"
          description="Hey Manish! We're delighted to welcome you to Netflix. "
          time="10:15 PM"
        />
        <EmailRow
          title="Spotify"
          subject="Your plan is ending tomorrow."
          description="Hey Manish! Please update your spotify premiuim."
          time="10:15 AM"
        />
        <EmailRow
          title="Netflix"
          subject="New Plan!"
          description="Hey Manish! We're delighted to welcome you to Netflix. "
          time="10:15 PM"
        />
        <EmailRow
          title="Spotify"
          subject="Your plan is ending tomorrow."
          description="Hey Manish! Please update your spotify premiuim."
          time="10:15 AM"
        />
        <EmailRow
          title="Netflix"
          subject="New Plan!"
          description="Hey Manish! We're delighted to welcome you to Netflix. "
          time="10:15 PM"
        />
        <EmailRow
          title="Spotify"
          subject="Your plan is ending tomorrow."
          description="Hey Manish! Please update your spotify premiuim."
          time="10:15 AM"
        />
        <EmailRow
          title="Netflix"
          subject="New Plan!"
          description="Hey Manish! We're delighted to welcome you to Netflix. "
          time="10:15 PM"
        />
        <EmailRow
          title="Spotify"
          subject="Your plan is ending tomorrow."
          description="Hey Manish! Please update your spotify premiuim."
          time="10:15 AM"
        />
        <EmailRow
          title="Netflix"
          subject="New Plan!"
          description="Hey Manish! We're delighted to welcome you to Netflix. "
          time="10:15 PM"
        />
        <EmailRow
          title="Spotify"
          subject="Your plan is ending tomorrow."
          description="Hey Manish! Please update your spotify premiuim."
          time="10:15 AM"
        />
        <EmailRow
          title="Netflix"
          subject="New Plan!"
          description="Hey Manish! We're delighted to welcome you to Netflix. "
          time="10:15 PM"
        />
        <EmailRow
          title="Spotify"
          subject="Your plan is ending tomorrow."
          description="Hey Manish! Please update your spotify premiuim."
          time="10:15 AM"
        />
        <EmailRow
          title="Netflix"
          subject="New Plan!"
          description="Hey Manish! We're delighted to welcome you to Netflix. "
          time="10:15 PM"
        />
        <EmailRow
          title="Spotify"
          subject="Your plan is ending tomorrow."
          description="Hey Manish! Please update your spotify premiuim."
          time="10:15 AM"
        />
        <EmailRow
          title="Netflix"
          subject="New Plan!"
          description="Hey Manish! We're delighted to welcome you to Netflix. "
          time="10:15 PM"
        />
        <EmailRow
          title="Spotify"
          subject="Your plan is ending tomorrow."
          description="Hey Manish! Please update your spotify premiuim."
          time="10:15 AM"
        />
      </div>
    </div>
  );
}

export default EmailList;
