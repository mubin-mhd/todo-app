import React from "react";
import { ReactComponent as Add } from "../../../assets/icons/plus.svg";

const ButtonAddGroup = ({ label }) => {
  return (
    <button className="px-[16px] py-[4px] rounded-md bg-[#01959F] text-[12px] font-[700] text-[#FFFFFF] flex items-center gap-1">
      <Add />
      {label}
    </button>
  );
};

ButtonAddGroup.defaultProps = {
  label: "Button",
};
export default ButtonAddGroup;
