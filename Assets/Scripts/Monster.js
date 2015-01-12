#pragma strict

var speed : float = 8f;

function Start () {

}

function Update () {
	rigidbody2D.velocity = new Vector2(speed, 0);
}