import React from "react";
import s from "./Button.module.css";

const Button = ({ nextPage }) => {
  return (
    <div className={s.box_button}>
      <button className={s.button} onClick={nextPage}>
        BACK
      </button>
    </div>
  );
};
export default Button;
