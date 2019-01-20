function isCollided(enemy, player) {
  return enemy.x === player.x && enemy.y === player.y;
}