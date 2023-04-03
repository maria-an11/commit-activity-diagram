import { useState } from "react";
import Tooltip from "./Tooltip";

const Square = ({ date, count }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      style={{
        marginTop: 50,
        marginBottom: 50,
        position: "relative",
      }}
    >
      <div
        style={{
          width: 25,
          height: 25,
          backgroundColor: getColor(count),
          cursor: "pointer",
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && <Tooltip count={count} />}
      </div>
      <p
        style={{
          transform: "rotate(-45deg)",
          paddingTop: 25,
          marginLeft: -50,
          fontSize: 12,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        {date}
      </p>
    </div>
  );
};

export default Square;

const getColor = (count) => {
  if (count >= 1 && count <= 3) {
    return "#7BC96F"; //green
  } else if (count >= 4 && count <= 6) {
    return "#6F97C9"; //blue
  } else if (count >= 7) {
    return "#FF203C"; //red
  } else {
    return "#EBEDF0"; //grey
  }
};
