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

  handleCollision(this, player);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


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