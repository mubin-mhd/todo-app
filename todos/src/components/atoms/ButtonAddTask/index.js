import React from "react";
import { ReactComponent as AddTask } from "../../../assets/icons/plus-circle.svg";

const ButtonAddTask = ({ label }) => {
  return (
    <button className="bg-transparent text-[12px] font-[400] text-[#1D1F20] flex items-center gap-1">
      <AddTask />
      {label}
    </button>
  );
};

ButtonAddTask.defaultProps = {
  label: "Button",
};
export default ButtonAddTask;
