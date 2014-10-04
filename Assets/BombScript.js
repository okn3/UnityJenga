#pragma strict

function Start () {
	        Debug.Log(this);
	// this.SendMessage('Explode');
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Space)){
        this.SendMessage('Explode');


    }
}