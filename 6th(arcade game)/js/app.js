// Enemies our player must avoid
var hspeed = 300,
    lspeed = 80,
    score1 = 0;
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = this.getspeed();
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
Enemy.prototype.getspeed = function() {
    return Math.floor(Math.random() * (hspeed - lspeed + 1) + lspeed);
};

Enemy.prototype.update = function(dt) {
    if (this.x < 500) {
        this.x = this.x + this.speed * dt;
    } else {
        this.x = -100;
        this.speed = this.getspeed();
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};
Player.prototype.intial = function() {
    this.x = 200;
    this.y = 320;
}
Player.prototype.update = function() {
    for (var j = 0; j < 3; j++) {
        if ((this.y + 100 > allEnemies[j].y + 40) && (this.y + 40 < allEnemies[j].y + 100) && (this.x + 100 > allEnemies[j].x + 40) && (this.x + 40 < allEnemies[j].x + 100)) {
            this.intial();
            score1 = 0;
            document.getElementById("score").innerHTML = score1;
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),
        this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key == 'up') {
        if (this.y > 100) {
            this.y = this.y - 90;
        } else {
            this.intial();
            score1++;
            if (score1 == 10) {

                window.open("file:win.html", "_parent");
                score1 = "0";
            }
            document.getElementById("score").innerHTML = score1;

        }
    } else if (key == 'down') {
        if (this.y < 400) {
            this.y = this.y + 90;
        }

    } else if (key == 'right') {
        if (this.x < 400)
            this.x = this.x + 100;
    } else if (key == 'left') {
        if (this.x > 0)
            this.x = this.x - 100;
    }
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var allEnemies = [
    new Enemy(0, 60),
    new Enemy(0, 145),
    new Enemy(0, 228)
];

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(200, 320);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});