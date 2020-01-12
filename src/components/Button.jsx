import React from "react";

const Button = props => {
  return (
    <button
      style={{ backgroundColor: props.buttonColor }}
      onClick={props.clickHandler}
    >
      {props.buttonName}
    </button>
  );
};

export default Button;
