#pragma strict

function Start () {
}

function Update () {
	transform.position.x += 0.1;
}

function OnCollisionEnter(obj:Collision){
	if (obj.gameObject.name == "Table")
		Debug.Log("Success! Next!");
	// }else{
	// 	Debug.Log("Hit Left");
	// }
	// Debug.Log("Hit");
}