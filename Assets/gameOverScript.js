﻿#pragma strict

function Start () {
  EndSE();
  Invoke("restart",5);
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
var end : AudioClip;
function EndSE(){
	audio.clip = end;
    audio.Play();
}
