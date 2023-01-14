import React from "react";

// button intended for use across multiple components.

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} ripple-bg-secondary`}>
    Get Started
  </button>
);

export default Button;