#pragma strict

function Start () {
	StartSE();
}

function Update () {

}

function OnCollisionEnter(obj:Collision){
if (obj.gameObject.name == "Cube13-1" || obj.gameObject.name == "Cube13-2" || obj.gameObject.name == "Cube13-3"){
	// EndSE();
	transform.position.y = 1;
	// Invoke("Sleep",5);
	}else{
		DropSE();
		Invoke("PironSE",2);
	}
}

//開始音
var start : AudioClip;
function StartSE(){
	audio.clip = start;
    audio.Play();
}

//終了音
var end : AudioClip;
function EndSE(){
	audio.clip = end;
    audio.Play();
}

//終了音2
var pyun : AudioClip;
function PyunSE(){
	audio.clip = pyun;
    audio.Play();
}

//落下音
var drop : AudioClip;
function DropSE(){
	audio.clip = drop;
    audio.Play();
}

//次のターゲット音
var piron : AudioClip;
function PironSE(){
	audio.clip = piron;
    audio.Play();
}

function Sleep(){
	Debug.Log("Sleep now");
}