import React from "react";

const Text = ({ variant, label }) => {
  function getText() {
    switch (variant) {
      case "small":
        return <p className="text-[12px] font-[400] text-[#1D1F20]">{label}</p>;
        break;
      case "small-bold":
        return <p className="text-[12px] font-[700] text-[#1D1F20]">{label}</p>;
        break;
      case "small-thin":
        return <p className="text-[12px] font-[700] text-[#757575]">{label}</p>;
        break;
      case "medium":
        return <p className="text-[14px] font-[400] text-[#1D1F20]">{label}</p>;
        break;
      case "medium-bold":
        return <p className="text-[14px] font-[700] text-[#1D1F20]">{label}</p>;
        break;
      case "medium-thin":
        return <p className="text-[14px] font-[400] text-[#757575]">{label}</p>;
        break;
      case "large":
        return <p className="text-[18px] font-[400] text-[#1D1F20]">{label}</p>;
        break;
      case "large-bold":
        return <p className="text-[18px] font-[700] text-[#1D1F20]">{label}</p>;
        break;
      case "large-thin":
        return <p className="text-[18px] font-[400] text-[#757575]">{label}</p>;
        break;
    }
  }
  return getText();
};

export default Text;
