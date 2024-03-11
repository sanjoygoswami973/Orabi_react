import React from "react";

const Option = ({ value, defaultValue, text, className }) => {
  return (
    <option value={value} defaultValue={defaultValue} className={className}>
      {text}
    </option>
  );
};

export default Option;
