function isCollided(enemy, player) {
  return (enemy.x === player.x


  )
  && (enemy.y === player.y);
}

function handleWin(player) {
  alert('win!!!');
  reset(player, allEnemies);
}

function reset(player, allEnemies) {


  // TODO: based on datalayer level --> create new list of enemy with increasing of speedD
}