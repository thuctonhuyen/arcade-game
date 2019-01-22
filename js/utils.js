function isCollided(enemy, player) {
  return (enemy.x === player.x


  )
  && (enemy.y === player.y);
}

function handleWin(thisPlayer) {
  alert('win!!!');
  thisPlayer.x = playerStartingPoint.x;
  thisPlayer.y = playerStartingPoint.y;
  dataLayer.score += 1;
  dataLayer.level += 1;

  document.querySelector('.' + scorePanelClassName).innerText = 'Score:' + dataLayer.score;
}

function reset(player, allEnemies) {


  // TODO: based on datalayer level --> create more enemies
}