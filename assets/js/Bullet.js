//子弹类
function Bullet(x,y,direct,speed,type,tank) {

	this.x      = x;
	this.y      = y;
	this.direct = direct;
	this.speed  = speed;
	this.timer  = null;
	this.isLive = true;
	this.type   = type;
	this.tank   = tank;
	this.run    = function run(){
		if(this.x <= 0 || this.x >= 500 || this.y <= 0 
			|| this.y >= 400 || this.isLive == false){
			window.clearInterval(this.timer);
			this.isLive = false;

			if(this.type == "enemy"){
					this.tank.bulletIsLive=false;
			}
		}else{
			switch(this.direct){
				case 0:
					this.y -= this.speed;
					break;
				case 1:
					this.x += this.speed;
					break;
				case 2:
					this.y += this.speed;
					break;
				case 3:
					this.x -= this.speed;
					break;
			}
		}
		//document.getElementById("aa").innerText = "子弹x=" + this.x + " 子弹y=" + this.y;
	}
}