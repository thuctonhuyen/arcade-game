function handleCollision(enemy, player) {
  const enemyXRange = [enemy.x - 50, enemy.x + 100];
  const enemyYRange = [enemy.y, enemy.y - 100];
  if (
   player.x > enemyXRange[0] && player.x < enemyXRange[1]
   &&
   player.y < enemyYRange[0] && player.y > enemyYRange[1]
  ) {
    console.log('enemyXRange', enemyXRange);
    console.log('enemyYRange', enemyYRange);
    console.log('player', player.x, player.y)
    console.log('enemy', enemy.x, enemy.y);
    // console.log('lose!!');

    handleLose();
  }
}

function handleWin(thisPlayer) {
  reset(thisPlayer);

  dataLayer.score += 1;
  dataLayer.level += 1;

  document.querySelector('.' + scorePanelClassName).innerText = 'Score: ' + dataLayer.score;

  if(currentEnemies < maxEnemies) {

    const yCoordinate = 'y_row' + currentRow;
    allEnemies.push(new Enemy(enemyStartingPoint.x, enemyStartingPoint[yCoordinate]));

    currentRow = Math.floor(Math.random() * 3) + 1;
    currentEnemies += 1;
  }
}

function handleLose() {
  dataLayer.score = 0;
  dataLayer.level = 0;

  document.querySelector('.' + scorePanelClassName).innerText = 'Score: ' + dataLayer.score;

  currentRow = 1;
  currentEnemies = 3;

  player = new Player(playerStartingPoint.x, playerStartingPoint.y);
  allEnemies = [new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row1), new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row2), new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row3)];
}

function reset(thisPlayer) {
  thisPlayer.x = playerStartingPoint.x;
  thisPlayer.y = playerStartingPoint.y;
}