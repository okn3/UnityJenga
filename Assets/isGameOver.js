#pragma strict


// 終了判定
function OnCollisionEnter(obj:Collision){
	if (obj.gameObject.name == "Table") {
	    Debug.Log("gameover");
	    this.SendMessage('Explode');
	    Invoke("restart",2);
	  // transform.position.y -= 10;
	}
}

function restart() {
   Application.LoadLevel("GameOver");
}

