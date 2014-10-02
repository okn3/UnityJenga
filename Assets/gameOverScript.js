#pragma strict

function Start () {
  Invoke("restart", 3);
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