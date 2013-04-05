//function脚本

var heroColor  = new Array("#BA9658","#FEF26E");
var enmeyColor = new Array("#00A2B5","#00FEFE");


function drawHeroBullet() {
	//画出英雄坦克子弹
	for( var i = 0; i < heroBullets.length; i++){
		var heroBullet = heroBullets[i];
		if(heroBullet != null && heroBullet.isLive){
			cxt.fillStyle = "#FEF26E";
			cxt.fillRect(heroBullet.x, heroBullet.y, 2, 2);
		}
	}

}

function drawEnemyBullet() {
	//画出敌人坦克子弹
	for( var i = 0; i < enemyBullets.length; i++){
		var etBullet = enemyBullets[i];
		if(etBullet.isLive){
			cxt.fillStyle = "#00FEFE";
			cxt.fillRect(etBullet.x, etBullet.y, 2, 2);
		}
	}
}

function drawTank(tank) {
	//画出坦克
	if(tank.isLive){
		switch(tank.direct){
			case 0:
			case 2:
				cxt.fillStyle = tank.color[0];
				cxt.fillRect(tank.x, tank.y, 5, 30);
				cxt.fillRect(tank.x + 15, tank.y, 5, 30);
				cxt.fillRect(tank.x + 6, tank.y + 5, 8, 20);

				cxt.fillStyle = tank.color[1];
				cxt.arc(tank.x + 10, tank.y + 15, 4, 0, 360, true);
				cxt.fill();

				cxt.strokeStyle = tank.color[1];
				cxt.lineWidth = 1.5;
				cxt.beginPath();
				cxt.moveTo(tank.x + 10, tank.y + 15);

				if(tank.direct == 0){
					cxt.lineTo(tank.x + 10, tank.y);
				}else if(tank.direct == 2){
					cxt.lineTo(tank.x + 10, tank.y + 30);
				}
				cxt.closePath();
				cxt.stroke();
				break;
			case 1:
			case 3:
				cxt.fillStyle = tank.color[0];
				cxt.fillRect(tank.x, tank.y, 30, 5);
				cxt.fillRect(tank.x, tank.y + 15, 30, 5);
				cxt.fillRect(tank.x + 5, tank.y + 6, 20, 8);

				cxt.fillStyle = tank.color[1];
				cxt.arc(tank.x + 15,tank.y + 10, 4, 0, 360, true);
				cxt.fill();

				cxt.strokeStyle = tank.color[1];
				cxt.lineWidth = 1.5;
				cxt.beginPath();
				cxt.moveTo(tank.x + 15,tank.y + 10);

				if(tank.direct == 1){
					cxt.lineTo(tank.x + 30, tank.y + 10);
				}else if(tank.direct == 3){
					cxt.lineTo(tank.x, tank.y + 10);
				}
				cxt.closePath();
				cxt.stroke();
				break;
		}
	}
}

function isHitEnemyTank() {
	//判断是否击中敌人坦克
	for(var i = 0; i < heroBullets.length; i++){
			var heroBullet = heroBullets[i];
			if(heroBullet.isLive){
			for(var j = 0; j < enemyTanks.length; j++){
				var enemyTank = enemyTanks[j];
				if(enemyTank.isLive){
					switch(enemyTank.direct){
						case 0:
						case 2:
							if(heroBullet.x >= enemyTank.x && heroBullet.x <= enemyTank.x + 20
								&&heroBullet.y >= enemyTank.y && heroBullet.y <= enemyTank.y + 30){
								enemyTank.isLive = false;
								heroBullet.isLive = false;
								var bomb = new Bomb(enemyTank.x,enemyTank.y);
								bombs.push(bomb);
							}
							break;
						case 1:
						case 3:
							if(heroBullet.x >= enemyTank.x && heroBullet.x <= enemyTank.x + 30
								&&heroBullet.y >= enemyTank.y && heroBullet.y <= enemyTank.y + 20){
								enemyTank.isLive = false;
								heroBullet.isLive = false;
								var bomb = new Bomb(enemyTank.x,enemyTank.y);
								bombs.push(bomb);
							}
							break;
					}

				}
			}
		}
	}
}

function drawEnemyBomb() {
	//画出敌人坦克爆炸效果
	for(var i = 0; i < bombs.length; i++){
		var bomb = bombs[i];
		if(bomb.isLive){
			if(bomb.blood > 6){
				var img1    = new Image();
				img1.src    = "assets/img/bomb_1.gif";
				var x       = bomb.x;
				var y       = bomb.y;
				img1.onload = function() {
					cxt.drawImage(img1, x, y, 30, 30);
				}
			}else if(bomb.blood > 3){
				var img2    = new Image();
				img2.src    = "assets/img/bomb_2.gif";
				var x       = bomb.x;
				var y       = bomb.y;
				img2.onload = function() {
					cxt.drawImage(img2, x, y, 30, 30);
				}
			}else{
				var img3    = new Image();
				img3.src    = "assets/img/bomb_3.gif";
				var x       = bomb.x;
				var y       = bomb.y;
				img3.onload = function() {
					cxt.drawImage(img3, x, y, 30, 30);
				}
			}
			bomb.bloodDown();
			if(bomb.blood <= 0){
				bombs.splice(i, 1);
			}
		}
	}
}

function getCommand() {
	//获取玩家命令
	var code = event.keyCode;
	
	switch(code){
		case 87:
			hero.moveUp();
		   	break;
		case 68:
		  	hero.moveRight();
		   	break;
	 	case 83:
			hero.moveDown();
			break;
		case 65:
			hero.moveLeft();
			break;
		case 74:
			hero.shotEnemy();
			break;
	}
	flashBattleField();
}

function flashBattleField() {
	//刷新战斗场地
	cxt.clearRect(0,0,500,400); 

	drawTank(hero);

	drawHeroBullet();

	isHitEnemyTank();
	drawEnemyBomb();
	drawEnemyBullet();
	
	for(var i = 0; i < 3; i++){
		drawTank(enemyTanks[i]);
	}	
}