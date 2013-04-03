//爆炸类
function Bomb(x,y) {

	this.x         = x;
	this.y         = y;
	this.isLive    = true;
	this.blood     = 9;
	this.bloodDown = function(){
		if(this.blood > 0){
			this.blood--;
		}else{
			this.isLive = false;
		}
	}
}