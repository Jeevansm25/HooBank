import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-2 px-6  font-poppins font-medium text-[15px] text-black bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
