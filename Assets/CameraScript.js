#pragma strict

function Start () {

}

function Update () {
	var y :float = Input.GetAxis("Vertical");
	transform.Translate(0, y*0.2, 0);
}