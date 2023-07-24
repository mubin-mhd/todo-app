export default function getColor(type) {
  let color;
  let bgColor;
  let borderColor;
  switch (type) {
    case "primary":
      color = "text-[#4DB5BC]";
      bgColor = "bg-[#F7FEFF]";
      borderColor = "border-[#4DB5BC]";
      break;
    case "warning":
      color = "text-[#FEEABC]";
      bgColor = "bg-[#FFFCF5]";
      borderColor = "border-[#FEEABC]";
      break;
    case "danger":
      color = "text-[#F5B1B7]";
      bgColor = "bg-[#FFFAFA]";
      borderColor = "border-[#F5B1B7]";
      break;
    case "success":
      color = "text-[#B8DBCA]";
      bgColor = "bg-[#F8FBF9]";
      borderColor = "border-[#B8DBCA]";
      break;
    default:
      color = "text-[#4DB5BC]";
      bgColor = "bg-[#F7FEFF]";
      borderColor = "border-[#4DB5BC]";
      break;
  }
  return { color, bgColor, borderColor };
}
