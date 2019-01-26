function handleCollision(enemy, player) {

  const enemyXRange = [enemy.x - 15, enemy.x + 50];
  const playerXRange = [player.x - 15, player.x + 50];

  const enemyYRange = [enemy.y - 5, enemy.y + 50];
  const playerYRange = [player.y - 5, player.y + 50];

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

function handleWin(thisPlayer) {
  thisPlayer.reset();

  dataLayer.score += 1;
  dataLayer.level += 1;

  renderScore();

  if(dataLayer.currentEnemiesNumber < maxEnemies) {

    const yCoordinate = 'y_row' + currentRow;
    allEnemies.push(new Enemy(enemyStartingPoint.x, enemyStartingPoint[yCoordinate]));

    currentRow = Math.floor(Math.random() * 3) + 1;
    dataLayer.currentEnemiesNumber += 1;
  }
}

function handleLose() {
  dataLayer = { ...initialDataLayer };

  renderScore();

  currentRow = Math.floor(Math.random() * 3) + 1;
  dataLayer.currentEnemiesNumber = 3;

  player.reset();
  allEnemies = [new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row1), new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row2), new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row3)];
}

function renderScore() {
  document.querySelector('.' + scorePanelClassName).innerText = 'Score: ' + dataLayer.score;
}
