//坦克类
function Tank(x,y,direct,color){
	
	this.x      = x;
	this.y      = y;
	this.speed  = 3;
	this.isLive = true;
	this.direct = direct;
	this.color  = color;

	this.moveUp = function() {
		this.y -= this.speed;
		this.direct = 0;
	}

	this.moveRight = function() {
		this.x += this.speed;
		this.direct = 1;
	}

	this.moveDown = function() {
		this.y += this.speed;
		this.direct = 2;
	}

	this.moveLeft = function() {
		this.x -= this.speed;
		this.direct = 3;
	}
}