#pragma strict

var oldHP : int;
var hp : int = 500;
var anim : Animator;

function Start () {
	oldHP = hp;
	anim = GetComponentInChildren(Animator);
}

function Update () {
	if(hp <= 0) {
		anim.SetTrigger("collapse");
	}
	
	if(oldHP == hp) {
		anim.SetBool("underattack", false);
	}
	else {
		anim.SetBool("underattack", true);
	}
}

function Damage (atk : int) {
	hp -= atk;
}
