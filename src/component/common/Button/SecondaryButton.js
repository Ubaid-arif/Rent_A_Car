import React from 'react'

const SecondaryButton = ({
    handleClick,
    className,
    disabled,
    title,
}) => {
  return (
    <button 
    className={`SecondaryButton ${className}`}
    disabled={disabled}
    onClick={handleClick}
    > {title} </button>
  )
}

export default SecondaryButton

