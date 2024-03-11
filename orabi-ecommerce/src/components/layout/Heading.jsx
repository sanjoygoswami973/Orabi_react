import React from "react";
import Icon from "./Icon";

const Heading = (props) => {
  return props.as ? (
    props.iconalignment ? (
      <props.as className={`flex items-center ${props.className}`}>
        {props.iconalignment == "left" ? (
          <Icon iconname={props.iconleft} iconClass={props.iconcls} />
        ) : (
          props.iconalignment == "both" && (
            <Icon iconname={props.iconleft} iconClass={props.iconcls} />
          )
        )}
        {props.color && (
          <span
            className={props.spanColorClass}
            style={props.styleProps}
          ></span>
        )}
        {props.text} {props.children}
        {props.iconalignment == "right" ? (
          <Icon iconname={props.iconright} iconClass={props.iconcls} />
        ) : (
          props.iconalignment == "both" && (
            <Icon iconname={props.iconright} iconClass={props.iconcls} />
          )
        )}
      </props.as>
    ) : (
      <props.as className={`flex items-center ${props.className}`}>
        <Icon iconname={props.iconleft} iconClass={props.iconcls} />
        {props.color && (
          <span
            className={props.spanColorClass}
            style={props.styleProps}
          ></span>
        )}
        {props.text}
        {props.children}
      </props.as>
    )
  ) : props.iconalignment ? (
    <h2 className={`flex items-center ${props.className}`}>
      {props.iconalignment == "left" ? (
        <Icon iconname={props.iconleft} iconClass={props.iconcls} />
      ) : (
        props.iconalignment == "both" && (
          <Icon iconname={props.iconleft} iconClass={props.iconcls} />
        )
      )}
      {props.color && (
        <span className={props.spanColorClass} style={props.styleProps}></span>
      )}
      {props.text}
      {props.children}
      {props.iconalignment == "right" ? (
        <Icon iconname={props.iconright} iconClass={props.iconcls} />
      ) : (
        props.iconalignment == "both" && (
          <Icon iconname={props.iconright} iconClass={props.iconcls} />
        )
      )}
    </h2>
  ) : (
    <h2 className={`flex items-center ${props.className}`}>
      <Icon iconname={props.iconleft} iconClass={props.iconcls} />
      {props.color && (
        <span className={props.spanColorClass} style={props.styleProps}></span>
      )}
      {props.text}
      {props.children}
    </h2>
  );
};

export default Heading;
