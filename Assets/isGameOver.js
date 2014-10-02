#pragma strict

// 終了判定
function OnCollisionEnter(obj:Collision){
	if (obj.gameObject.name == "Table") {
	    Debug.Log("gameover");
	    Application.LoadLevel("GameOver");
	// }else{
	// 	Debug.Log("Hit Left");
	// }
	}
}

function restart() {
  Application.LoadLevel("Jenga");
}