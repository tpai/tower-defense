#pragma strict

function ShowBattleButton () {
	var anim : Animator = GameObject.Find("Battle").GetComponent(Animator);
	anim.SetBool("show", true);
}