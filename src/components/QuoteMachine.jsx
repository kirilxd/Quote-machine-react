import Button from "./Button";
import React from "react";
const QuoteMachine = props => {
  return (
    <div id="quote-box">
      <h1 id="text" style={{ color: props.colour }}>
        {props.currentQuote.quote}
      </h1>
      <h3 id="author" style={{ color: props.colour }}>
        {props.currentQuote.author}
      </h3>
      <Button
        buttonName="New quote"
        clickHandler={props.buttonHandler}
        buttonColor={props.colour}
      />
    </div>
  );
};

export default QuoteMachine;
