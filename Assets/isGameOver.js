#pragma strict
var i :int;

// 終了判定
function OnCollisionEnter(obj:Collision){
	if (obj.gameObject.name == "Table") {
	    Debug.Log("gameover");
	    Invoke("restart",4);
	    for (var i = 0 ; i < 10; i++) {
	  transform.position.y += 1;
	}
	    // Application.LoadLevel("GameOver");
	// }else{
	// 	Debug.Log("Hit Left");
	// }
	}
}

function restart() {
   Application.LoadLevel("GameOver");
}
