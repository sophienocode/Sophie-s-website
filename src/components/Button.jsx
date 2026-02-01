import React from 'react'

const Button = ({ text, className }) => {
  return (
    <>
    <a href='#' className={`${className ?? ''} cta-wrapper `}>
        <div className="cta-button group">
            <p className='text'> {text} </p>
        </div>
    </a>
    </>
  )
}

export default Button;
