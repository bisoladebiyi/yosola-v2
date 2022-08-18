import React from "react";
import { IInput } from "../../utils/interfaces";

const Input: React.FC<IInput> = ({ message, changeValue, showPopUp }) => {
  return (
    <input
      type="text"
      placeholder="Send message..."
      autoFocus={showPopUp ? false : true}
      value={message}
      onChange={changeValue}
      style={{ fontSize: "16px" }}
      className="w-full bg-white sm:bg-opacity-30 outline-none pr-10 placeholder:sm:text-white placeholder:text-small px-4 rounded-2xl py-1"
    />
  );
};

export default Input;
