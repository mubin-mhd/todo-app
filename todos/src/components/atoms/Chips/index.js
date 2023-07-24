import React from "react";
import getColor from "../../../helpers/getColor";

const Chips = ({ label, variant }) => {
  return (
    <div
      className={`py-[2px] px-[8px] rounded-md w-min whitespace-nowrap border-solid border ${
        getColor(variant).bgColor
      } ${getColor(variant).borderColor}`}
    >
      <p className={`text-[12px] font-semibold ${getColor(variant).color}`}>
        {label}
      </p>
    </div>
  );
};

Chips.defaultProps = {
  label: "Label",
};

export default Chips;
