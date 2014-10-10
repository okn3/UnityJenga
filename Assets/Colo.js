#pragma strict
static var color;

function Start () {

}

function Update () {
  if (color == '') {
    this.guiText.text = "";
  } else {
    this.guiText.text = "           → " + color;
  }
}