import fs from "fs";
// reading input from file
const input = fs.readFileSync("input.txt", "utf-8");

// breaking the input into two seperate array
const breakArrayBasedOnLines = input.trim().split("\n");
const brokenSide1 = breakArrayBasedOnLines.map((el) => el.split(" ")[0]);
const brokenSide2 = breakArrayBasedOnLines.map((el) => el.split(" ")[3]);

const sortedSide1 = brokenSide1.sort((a, b) => a - b);
const sortedSide2 = brokenSide2.sort((a, b) => a - b);

// find the difference bwetween each element
let diff = 0;
let i = 0;
// const max = 5;
const max = sortedSide1.length;
while (i < max) {
  let diffrence = Math.abs(sortedSide1[i] - sortedSide2[i]);
  diff += diffrence;
  console.log(diffrence, "1", sortedSide1[i], "2", sortedSide2[i]);
  i++;
}

console.log(diff);

console.log("----------");
