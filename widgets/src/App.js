import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is favorite js library among engeeners",
  },
  {
    title: "How do you use React?",
    content: "You use react using components",
  },
];

const options = [
  {
    label: "Color red",
    value: "red",
  },
  {
    label: "Color green",
    value: "green",
  },
  {
    label: "Shade of blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropDown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropDown(!showDropdown)}>
        Toggle dropdown
      </button>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {showDropdown ? (
        <Dropdown
          onSelectedChange={setSelected}
          selected={selected}
          options={options}
        />
      ) : null}
    </div>
  );
};