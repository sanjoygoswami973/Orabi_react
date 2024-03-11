import React, { Children } from "react";
import Icon from "./Icon";

const Paragraph = ({
  iconleft,
  iconright,
  iconalignment,
  text,
  className,
  iconcls,
  Children,
}) => {
  return iconalignment ? (
    <p className={`flex items-center ${className}`}>
      {iconalignment == "left" ? (
        <Icon iconname={iconleft} iconClass={iconcls} />
      ) : (
        iconalignment == "both" && (
          <Icon iconname={iconleft} iconClass={iconcls} />
        )
      )}
      {text}
      {Children}
      {iconalignment == "right" ? (
        <Icon iconname={iconright} iconClass={iconcls} />
      ) : (
        iconalignment == "both" && (
          <Icon iconname={iconright} iconClass={iconcls} />
        )
      )}
    </p>
  ) : (
    <p className={`flex items-center ${className}`}>
      <Icon iconname={iconleft} iconClass={iconcls} />
      {text}
      {Children}
    </p>
  );
};

export default Paragraph;

// <p className={`flex items-center ${className}`}>
//   {iconalignment == "left" ? (
//     <span>{iconleft}</span>
//   ) : (
//     iconalignment == "both" && <span>{iconleft}</span>
//   )}
//   {text}
//   {iconalignment == "right" ? (
//     <span>{iconright}</span>
//   ) : (
//     iconalignment == "both" && <span>{iconright}</span>
//   )}
// </p>
