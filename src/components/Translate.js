import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af"
  },
  {
    label: "Arabic",
    Value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown
        label="Choose language"
        onSelectedChange={setLanguage}
        selected={language}
        options={options}
      />
    </div>
  );
};

export default Translate;
