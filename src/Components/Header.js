import React from "react";
import "../App.css";
import { FaSearch, FaBars, FaEnvelope, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header">
        <FaBars style={{ marginRight: "30px", color: "white" }} />
        <div className="search">
          <FaSearch
            style={{
              position: "absolute",
              paddingLeft: "150px",
              paddingTop: "4px",
            }}
          />
          <input
            placeholder="Serarch here..."
            type="text"
            aria-label="search"
          ></input>
        </div>
        <div className="icons">
          <FaEnvelope />
          <div className="fuser">
            <FaUser />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
