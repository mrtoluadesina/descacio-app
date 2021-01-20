import React from "react";
import { InputBox } from "./styles";

const Input = React.forwardRef(({ handleChange }, ref) => {
  return (
    <InputBox ref={ref}>
      <div className="icon">
        <img src="assets/icons/search.png" alt="search" />
      </div>
      <input
        type="text"
        placeholder="Find a Ministry"
        onChange={handleChange}
      />
    </InputBox>
  );
});

export default Input;
