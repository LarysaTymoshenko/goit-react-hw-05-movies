import React from 'react';
import s from './Button.module.css';

const Button = ({ onBackClick }) => {
  return (
    <div className={s.box_button}>
      <button className={s.button} onClick={onBackClick}>
        Back
      </button>
    </div>
  );
};
export default Button;
