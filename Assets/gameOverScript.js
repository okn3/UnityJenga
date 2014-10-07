#pragma strict

function Start () {

	// Invoke("marioSE", 2);
	// marioSE();
  Invoke("restart",2.5);
}
// GUI描画
var style : GUIStyle;
function OnGUI() {
	GUI.contentColor = Color.black;
    GUI.Label(Rect(200,300,300,100),"Game Over", style);
}
function restart() {
  Application.LoadLevel("Jenga");
}

//終了音
var mario : AudioClip;
function marioSE(){
	audio.clip = mario;
    audio.Play();
}
