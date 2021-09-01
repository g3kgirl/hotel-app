import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Data from "./Components/Data";

const App = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Header />

      <div className="container">
        <div className="left-panel">
          <Navbar handleChange={handleChange} checkedItems={checkedItems} />
        </div>
        <div className="right-panel">
          <Data checkedItems={checkedItems} />
        </div>
      </div>
    </>
  );
};

export default App;
