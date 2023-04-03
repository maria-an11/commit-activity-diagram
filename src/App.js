import { useEffect } from "react";
import { useState } from "react";
import Square from "./components/Square";

const URL = "https://tinyurl.com/37wzwx5v";

function App() {
  const [cleanChart, setCleanChart] = useState([]);
  const array = getDays();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const draftArray = await res.json();
        const groupByDate = groupBy(draftArray, "date");

        setCleanChart(groupByDate);
      } catch (e) {
        alert("Data not loading, error is " + e);
      }
    };
    fetchData();
  }, []);

  const groupBy = (array, key) =>
    array.reduce((group, item) => {
      group[item[key]] = group[item[key]] + 1 || 1;
      return group;
    }, {});

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
          margin: 50,
        }}
      >
        {array.map((day) => (
          <Square date={day} count={cleanChart[day]} key={day} />
        ))}
      </div>
    </div>
  );
}

// Function "pad" and "getDays" were Provided
// prefixes single-digit numbers (n) with leading 0 (ie: from 1 to 01)

const pad = (n) => {
  n = n + "";
  return n.length >= 2 ? n : `0${n}`;
};

// gets the days for the task
// returns an array of 31 strings like:
// ['2019-01-01', '2019-01-02', ..., '2019-01-31']

const getDays = () => {
  const numDays = 31;

  return Array.from(Array(numDays)).map((o, i) => {
    return `2019-01-${pad(i + 1)}`;
  });
};

export default App;
