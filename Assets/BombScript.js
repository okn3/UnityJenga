﻿#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Space)){
        this.SendMessage('Explode');
    }
}