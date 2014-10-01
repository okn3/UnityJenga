#pragma strict

function Start () {

}

function Update () {
 this.transform.Rotate ( 0, ( Input.GetAxis ( "Horizontal" ) * 1 ), 0 );

}