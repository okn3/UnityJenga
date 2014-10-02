#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(obj:Collision){
if (obj.gameObject.name == "Cube13-1" || obj.gameObject.name == "Cube13-2" || obj.gameObject.name == "Cube13-3"){
transform.position.y = 2;
// transform.position.y = 0;

}
}