import React from "react";

const Select = ({ id, className, children, onClick }) => {
  return (
    <select id={id} className={className} onClick={onClick}>
      {children}
    </select>
  );
};

export default Select;
