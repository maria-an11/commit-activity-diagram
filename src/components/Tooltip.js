const Tooltip = ({ count }) => {
  return (
    <div style={{ position: "relative" }}>
      <span
        style={{
          position: "absolute",
          top: -30,
          backgroundColor: "black",
          color: "white",
          fontSize: 9,
          padding: 5,
          width: "max-content",
        }}
      >
        {getCommits(count)}
      </span>
      <div
        style={{
          borderLeft: "solid transparent 5px",
          borderRight: "solid transparent 5px",
          borderTop: "solid #000 5px",
          top: -8,
          content: " ",
          display: "block",
          height: 0,
          left: "50%",
          position: "absolute",
          width: 0,
          marginLeft: -12,
        }}
      ></div>
    </div>
  );
};

export default Tooltip;

const getCommits = (number) => {
  number = number === undefined ? 0 : number;
  return `${number} ${number === 1 ? "Commit" : "Commits"}`;
};
