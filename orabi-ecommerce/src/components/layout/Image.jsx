import React from "react";

const Image = ({ imgsrc, alttext, className }) => {
  return <img src={imgsrc} alt={alttext} className={className} />;
};

export default Image;
