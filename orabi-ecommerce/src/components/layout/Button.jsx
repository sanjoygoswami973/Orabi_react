import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const Button = ({
  href,
  iconalignment,
  iconleft,
  iconright,
  text,
  className,
  iconcls,
}) => {
  return iconalignment ? (
    <Link to={href} className={`flex items-center ${className}`}>
      {iconalignment == "left" ? (
        <Icon iconname={iconleft} iconClass={iconcls} />
      ) : (
        iconalignment == "both" && (
          <Icon iconname={iconleft} iconClass={iconcls} />
        )
      )}
      {text}
      {iconalignment == "right" ? (
        <Icon iconname={iconright} iconClass={iconcls} />
      ) : (
        iconalignment == "both" && (
          <Icon iconname={iconright} iconClass={iconcls} />
        )
      )}
    </Link>
  ) : (
    <Link to={href} className={`flex items-center ${className}`}>
      <Icon iconname={iconleft} iconClass={iconcls} />
      {text}
    </Link>
  );
};

export default Button;

// <Link to={href} className={`flex items-center ${className}`}>
//   {iconalignment == "left" ? (
//     <Icon iconname={iconone} />
//   ) : (
//     iconalignment == "both" && <Icon iconname={iconone} />
//   )}
//   {text}
//   {iconalignment == "right" ? (
//     <Icon iconname={icontwo} />
//   ) : (
//     iconalignment == "both" && <Icon iconname={icontwo} />
//   )}
// </Link>
