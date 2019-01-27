/**
 * handle collison by checking whether current enemy and player
 * are collided with each other or not. If they are collided,
 * then it will call handleLose to handle the lost situation
 * @param {Enemy} enemy
 * @param {Player} player
 */
function handleCollision(enemy, player) {
  // calculate the range of x coordinates [x_start, x_end] of enemy and player
  // where x_start is current x of enemy/player - 15 and
  // x_end is current x of enemy/player + 50
  const enemyXRange = [enemy.x - 15, enemy.x + 50];
  const playerXRange = [player.x - 15, player.x + 50];

  // calculate the range of y coordinates [y_start, y_end] of enemy and player
  // where y_start is current y of enemy/player - 5 and
  // y_end is current y of enemy/player + 50
  const enemyYRange = [enemy.y - 5, enemy.y + 50];
  const playerYRange = [player.y - 5, player.y + 50];

  // enemy and player are collided if range of x coordiates
  // and y coordinates of enemy intersects with the range of
  // x coordinates and y coordinates of player
  if (
    (
      enemyXRange[0] >= playerXRange[0]
      && enemyXRange[0] <= playerXRange[1]
      ||
      playerXRange[0] >= enemyXRange[0]
        && playerXRange[0] <= enemyXRange[1]
    )
    &&
    (
      enemyYRange[0] >= playerYRange[0]
      && enemyYRange[0] <= playerYRange[1]
      ||
      playerYRange[0] >= enemyYRange[0]
      && playerYRange[0] <= enemyYRange[1]
    )
  ) {
    handleLose();
  }
}

function handleWin() {
  player.reset();
  dataLayer.score += 1;
  dataLayer.level += 1;
  renderScore();
  addMoreEnemies();
}

function handleLose() {
  initApp();
}

function renderScore() {
  document.querySelector('.' + scorePanelClassName).innerText = scoreText.replace(scoreTextValue, dataLayer.score);
}

function addMoreEnemies() {
  if(dataLayer.currentEnemiesNumber < maxEnemies) {
    const yCoordinate = yRowKeyPrefix + dataLayer.currentRow;
    allEnemies.push(new Enemy(enemyStartingPoint.x, enemyStartingPoint[yCoordinate]));

    dataLayer.currentRow = Math.floor(Math.random() * 3) + 1;
    dataLayer.currentEnemiesNumber += 1;
  }
}


function initApp() {
  // Initiate the data layer:
  dataLayer = Object.assign({}, initialDataLayer);

  // Place all enemy objects in an array called allEnemies
  player = new Player(playerStartingPoint.x, playerStartingPoint.y);

  // Place the player object in a variable called player
  allEnemies = [new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row1), new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row2), new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row3)];

  renderScore();
}