import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button
      onClicknclick={props.Onclick}
      className={`card-btn ${props["data-vale"]}`}
      data-value={props["data-value"]}
    />
  );
}
export default CardBtn;
