#pragma strict
static var point : int;

function Start () {

}

function Update () {
  this.guiText.text = "Score : " + point;
}