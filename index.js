// Step 1

const data = require("./data.json");


// Step 2

let teams = [];

Object.keys(data).forEach(team => {
    teams.push(team);
});

let teamIndexMap = {};
teams.forEach((team, index) => {
    teamIndexMap[team] = index;
});

// Step 3

let winLossMatrix = [];
for (let i = 0; i < teams.length + 2; i++) {
    winLossMatrix.push([]);
    for (let j = 0; j < teams.length + 1; j++) {
        winLossMatrix[i].push("--");
    }
}
winLossMatrix[0][0] = "Tm";
winLossMatrix[teams.length + 1][0] = "Tm";

// Step 4

Object.keys(data).forEach(team => {
    let row = teamIndexMap[team] + 1;
    winLossMatrix[row][0] = team;
    winLossMatrix[0][row] = team;
    winLossMatrix[teams.length + 1][row] = team;
    Object.keys(data[team]).forEach(opponent => {
        let column = teamIndexMap[opponent] + 1;
        winLossMatrix[row][column] = data[team][opponent]["W"];
    });
});

// Step 5
console.table(winLossMatrix);