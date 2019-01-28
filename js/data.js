// constant data:
const totalEnemiesRowKeyPrefix = 'totalEnemiesRow';
const totalRows = 3;
const initialDataLayer = {
  score: 0,
  level: 1,
  currentEnemiesNumber: 3,
  [totalEnemiesRowKeyPrefix + '1']: 0,
  [totalEnemiesRowKeyPrefix + '2']: 0,
  [totalEnemiesRowKeyPrefix + '3']: 0
};
const speed = 8;
const playerStartingPoint = {
  x: 200,
  y: 400
};
const horizontalMoveUnit = 100;
const verticalMoveUnit = 90;
const yRowKeyPrefix = 'y_row';
const enemyStartingPoint = {
  x: 0,
  [yRowKeyPrefix + '1']: 60,
  [yRowKeyPrefix + '2']: 150,
  [yRowKeyPrefix + '3']: 230,
}
const maxEnemies = 15;
const maxEnemiesPerRow = maxEnemies/totalRows;
const canvas = {
  height: 606,
  width: 505
}
const scorePanelClassName = 'score-panel';
const scoreText = 'Score: [total-score]';
const scoreTextValue = '[total-score]';

// initial data:
let dataLayer;
let allEnemies;
let player;


