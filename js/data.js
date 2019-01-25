let dataLayer = {
  score: 0,
  level: 1,
}

const speed = 8;

const playerStartingPoint = {
  x: 200,
  y: 400
};

const horizontalMoveUnit = 100;
const verticalMoveUnit = 90;

const enemyStartingPoint = {
  x: 0,
  y_row1: 60,
  y_row2: 150,
  y_row3: 230,
}

const enemySize = {
  width: 101,
  height: 171
};

const playerSize = {
  width: 101,
  height: 171
};

const maxEnemies = 12;
let currentEnemies = 3;
let currentRow = Math.floor(Math.random() * 3) + 1;

const canvas = {
  height: 606,
  width: 505
}

const scorePanelClassName = 'score-panel';