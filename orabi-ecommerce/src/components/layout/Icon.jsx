import React from "react";

const Icon = ({ iconname, iconClass, onClick }) => {
  return (
    <span className={iconClass} onClick={onClick}>
      {iconname}
    </span>
  );
};

export default Icon;
