import { InputBox } from "./styles";

const Input = ({ handleChange }) => {
  return (
    <InputBox>
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
};

export default Input;
