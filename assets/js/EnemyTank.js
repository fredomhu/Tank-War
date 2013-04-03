//敌人坦克类
function EnemyTank (x,y,direct,color){
		
	this.tank         = Tank;
	this.count        = 0;
	this.bulletIsLive = true;
	
	this.tank(x,y,direct,color);

	this.run = function run() {
		switch(this.direct){	
			case 0:
				if(this.y > 0){
					this.y -= this.speed;
				}	
				break;
			case 1:
				if(this.x + 30 < 400){
					this.x += this.speed;
				}
				break;
			case 2:
				if(this.y + 30 < 300){
					this.y += this.speed;
				}
				break;
			case 3:
				if(this.x > 0){
					this.x -= this.speed;
				}
				break;
		}
		if(this.count > 25){
			this.direct = Math.round(Math.random()*3);
			this.count  = 0;
		}
		this.count++;

		if(this.bulletIsLive == false){
				switch(this.direct){
					case 0:
						etBullet = new Bullet(this.x + 9, this.y, this.direct, 1, "enemy", this);
						break;
					case 1:
						etBullet = new Bullet(this.x + 30, this.y + 9, this.direct, 1, "enemy", this);
						break;
					case 2:
						etBullet = new Bullet(this.x + 9, this.y + 30, this.direct, 1, "enemy", this);
						break;
					case 3:
						etBullet = new Bullet(this.x, this.y + 9, this.direct, 1, "enemy", this);
						break;
			}

			enemyBullets.push(etBullet);

			var mytimer = window.setInterval("enemyBullets[" + (enemyBullets.length - 1) + "].run()", 50);
			enemyBullets[enemyBullets.length - 1].timer = mytimer;

			this.bulletIsLive = true;
		}

	}
}