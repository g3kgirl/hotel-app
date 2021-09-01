import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MenuData } from "../data/MenuData";
import "../App.css";
const Card = ({ checkedItems }) => {
  const [data, setData] = useState(MenuData);

  useEffect(() => {
    var value = [];
    if (!Object.keys(checkedItems).length) {
      value = MenuData;
    }
    if (checkedItems != {}) {
      const star = Object.entries(checkedItems);

      const Val = star.map((item) => {
        if (item[1] === true) {
          return item[0];
        }
      });
      MenuData.filter((item) => {
        Val.map((item1) => {
          if (item.star === item1) {
            value.push(item);
          }
        });
      });
    }

    const star = Object.entries(checkedItems);
    const Val = star.map((item) => {
      if (item[1] === true) {
        return item[0];
      }
    });
    MenuData.filter((item) => {
      Val.map((item1) => {
        if (item1) {
          if (item.category.toLowerCase() === item1.toLowerCase()) {
            value.push(item);
          }
        }
      });
    });

    const valu = star.map((item) => {
      if (item[1] === true) {
        return item[0];
      }
    });
    MenuData.filter((item) => {
      valu.map((item1) => {
        if (item1) {
          if (item.button.toLowerCase() === item1.toLowerCase()) {
            value.push(item);
          }
        }
      });
    });

    // value.filter((item) => {});

    setData(value);
  }, [checkedItems]);

  return (
    <>
      <div className="main">
        {data.map((val, id) => (
          <div className="card">
            <h3>{val.title}</h3>
            <p>{val.price}</p>
            <img src={val.img} />
            <button>{val.button}</button>
            <p>{val.paragraph}</p>
            <FaStar className="star">{val.rating}</FaStar>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
