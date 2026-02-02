import React from 'react'

const Button = ({ text, className }) => {
  return (
    <a href="#" className={`${className ?? ''} cta-wrapper group`}>
      <div className="cta-button text ">
        <p className="text">{text}</p>
      </div>
    </a>
  );
};

export default Button;
