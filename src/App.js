import React from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mail from "./Mail.js";
import EmailList from "./EmailList.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/" element={<Mail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
