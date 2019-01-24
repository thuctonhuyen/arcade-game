function isCollided(enemy, player) {
  return (enemy.x === player.x


  )
  && (enemy.y === player.y);
}

function handleWin(thisPlayer) {
  thisPlayer.x = playerStartingPoint.x;
  thisPlayer.y = playerStartingPoint.y;
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

function reset(player, allEnemies) {


  // TODO: based on datalayer level --> create more enemies
}