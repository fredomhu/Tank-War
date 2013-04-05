//英雄坦克类
function Hero(x,y,direct,color){
	
	this.tank=Tank;
	this.tank(x,y,direct,color);

	this.shotEnemy=function() {
		switch(this.direct){
			case 0:
				heroBullet = new Bullet(this.x + 9, this.y, this.direct, 3, "hero", this);
				break;
			case 1:
				heroBullet = new Bullet(this.x + 30, this.y + 9, this.direct, 3, "hero", this);
				break;
			case 2:
				heroBullet = new Bullet(this.x + 9, this.y + 30, this.direct, 3, "hero", this);
				break;
			case 3:
				heroBullet = new Bullet(this.x, this.y + 9, this.direct, 3, "hero", this);
				break;
		}
		heroBullets.push(heroBullet);

		var timer = window.setInterval("heroBullets[" + (heroBullets.length - 1) + "].run()", 50);

		heroBullets[heroBullets.length - 1].timer = timer;
	}

}