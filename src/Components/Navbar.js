import React, { useState } from "react";
import "../App.css";
const checkboxes = [
  {
    name: "five",
    key: "checkBox1",
    label: "checkBox1",
  },
  {
    name: "four",
    key: "checkBox2",
    label: "checkBox2",
  },
  {
    name: "three",
    key: "checkBox2",
    label: "checkBox1",
  },
];
const checkboxes2 = [
  {
    name: "apartment",
    key: "checkBox4",
    label: "checkBox4",
  },
  {
    name: "Holiday",
    key: "checkBox5",
    label: "checkBox5",
  },
  {
    name: "Guest",
    key: "checkBox6",
    label: "checkBox6",
  },
];

const checkboxes3 = [
  {
    name: "spa",
    key: "checkBox7",
    label: "checkBox7",
  },
  {
    name: "Caffae",
    key: "checkBox8",
    label: "checkBox8",
  },
  {
    name: "Wi-fi",
    key: "checkBox9",
    label: "checkBox9",
  },
];

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

const Checkbox2 = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};
const Checkbox3 = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

const Navbar = ({ handleChange, checkedItems }) => {
  return (
    <>
      <div className="checkbox-nav">
        <h1>Set Filters</h1>
        <h4>Pricing</h4>
        <div class="range">
          <input type="range" min="1" max="100" class="slider" id="myRange" />
        </div>
        <div>
          {checkboxes.map((item) => (
            <div key={item.key}>
              <Checkbox
                name={item.name}
                checked={checkedItems[item.name]}
                onChange={handleChange}
              />
              {item.name}
            </div>
          ))}
        </div>

        <h2>Property Type</h2>
        <div>
          {checkboxes2.map((item) => (
            <div key={item.key}>
              <Checkbox2
                name={item.name}
                checked={checkedItems[item.name]}
                onChange={handleChange}
              />
              {item.name}
            </div>
          ))}
        </div>
        <h2>Facility</h2>
        <div>
          {checkboxes3.map((item) => (
            <div key={item.key}>
              <Checkbox3
                name={item.name}
                checked={checkedItems[item.name]}
                onChange={handleChange}
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
