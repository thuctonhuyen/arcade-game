// Enemies our player must avoid
var Enemy = function(x, y, sprite) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = sprite || 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + (dataLayer.level * speed) * dt;
  if(this.x >= 500) {
    this.x = 0;
  }

  this.checkCollision();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// handle collison by checking whether current enemy and player
// are collided with each other or not. If they are collided,
// then it will call handleLose to handle the lost situation
Enemy.prototype.checkCollision = function() {
  // calculate the range of x coordinates [x_start, x_end] of enemy and player
  // where x_start is current x of enemy/player - 15 and
  // x_end is current x of enemy/player + 50
  const enemyXRange = [this.x - 15, this.x + 50];
  const playerXRange = [player.x - 15, player.x + 50];

  // calculate the range of y coordinates [y_start, y_end] of enemy and player
  // where y_start is current y of enemy/player - 5 and
  // y_end is current y of enemy/player + 50
  const enemyYRange = [this.y - 5, this.y + 50];
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


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function () {
  this.x = playerStartingPoint.x;
  this.y = playerStartingPoint.y;
}

Player.prototype.handleInput = function(key) {
  switch(key) {
    case 'left': {
      const temp = this.x - horizontalMoveUnit;
      this.x = temp < 0 ? this.x : temp;
      break;
    }
    case 'right': {
      const temp = this.x + horizontalMoveUnit;
      this.x = temp >= 500 ? this.x : temp;
      break;
    }
    case 'up': {
      if(this.y <= 40) {
        handleWin();
      } else {
        this.y = this.y - verticalMoveUnit;
      }
      break;
    }
    case 'down': {
      const temp = this.y + verticalMoveUnit;

      this.y = temp >= 450 ? this.y : temp;
      break;
    }
    default: {
      break;
    }
  }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  e.preventDefault();
  var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

// initiate needed data for the app:
initApp();