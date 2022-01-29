import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mail from "./Mail.js";
import EmailList from "./EmailList.js";
import SendMail from "./SendMail.js";
import Login from "./Login.js";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, logout } from "./features/userSlice";
import { selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Routes>
              <Route index element={<EmailList />} />
              <Route path="Mail" element={<Mail />} />
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
