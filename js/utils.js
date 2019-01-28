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
  if(!player) {
    player = new Player(playerStartingPoint.x, playerStartingPoint.y);
  } else {
    player.reset();
  }

  // Place the player object in a variable called player
  allEnemies = [new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row1), new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row2), new Enemy(enemyStartingPoint.x, enemyStartingPoint.y_row3)];

  renderScore();
}