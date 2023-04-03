# React: Commit Activity Chart

## Environment

- React Version: 18.2.0
- Node Version: ^12.18.3
- Default Port: 3000

X company wants to build a **commit activity chart** similar to GitHub, to visually display commit activity.

Img
![alt text](https://github.com/[maria-an11]/[commit-activity-diagram]/blob/[main]/commit-activity-chart.png?raw=true)

The goal is create a horizontal grid of squares(any size), and color the square depending on the number of commits a specific day has.
For example, if the date `2019-01-01` has `4 commits`, the color would be Blue.

The coloring rules for each square are as follows:

### `Grey (#EBEDF0): 0 commits`

### `Green (#7BC96F): 1-3 commits`

### `Blue (#6F97C9): 4-6 commits`

### `Grey (#FF203C): 7 or more commits`

Use the following API Endpoint to get the commit activity data:
[https://tinyurl.com/37wzwx5v](https://tinyurl.com/37wzwx5v)

In order ro speed up the process, you can use the methods below to grab the specific days we want. There is no need to have the dates be dynamic.

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
# commit-activity-diagram
