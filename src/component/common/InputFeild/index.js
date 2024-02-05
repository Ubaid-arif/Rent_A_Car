import React from "react";

const InputFeild = ({
  placeholder,
  label,
  type,
  onlyNumbers = false,
  onChange,
  error,
}) => {
  const handleChange = (event, key) => {
    let value = key || event.target.value;
    onChange(label, value);
  };

  return (
    <>
      <input
        placeholder={placeholder || "enter your details"}
        label={label || "enter your details"}
        onChange={handleChange}
      />
      <p className="Error">{error ? error : null}</p>
    </>
  );
};

export default InputFeild;
