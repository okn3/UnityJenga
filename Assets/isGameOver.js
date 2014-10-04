#pragma strict


// 終了判定
function OnCollisionEnter(obj:Collision){
	if (obj.gameObject.name == "Table") {
	    Debug.Log("gameover");
	    SendMessage('Explode'); //落下で爆発
	    BombSE();
	    Invoke("restart",2);
	  // transform.position.y -= 10;
	}
}

function restart() {
   Application.LoadLevel("GameOver");
}

var bomb : AudioClip;
function BombSE(){
	audio.clip = bomb;
    audio.Play();
}
