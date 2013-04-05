//主函数

var cxt = document.getElementById("battleField").getContext("2d");

var hero        = new Hero(240, 240, 0, heroColor);
var heroBullets = new Array();

var enemyTanks   = new Array();
var enemyBullets = new Array();

var bombs = new Array();

for(var i = 0; i < 3; i++){
	var enemyTank = new EnemyTank((i + 1) * 100, 0, 2, enmeyColor);
	enemyTanks[i] = enemyTank;

	window.setInterval("enemyTanks[" + i + "].run()", 50);

	var eb = new Bullet(enemyTanks[i].x + 9, enemyTanks[i].y + 30, 2, 1.2, "enemy", enemyTanks[i]);

	enemyBullets[i] = eb;
	var ettimer = window.setInterval("enemyBullets["+i+"].run()",50);
	enemyBullets[i].timer = ettimer;
	
}

flashBattleField();

window.setInterval("flashBattleField()",100);