#pragma strict

var nowHP : float;
var maxHP : float;
var scaleX : float;

function Start () {
	maxHP = GetComponentInParent(Tower).hp;
	nowHP = maxHP;
	scaleX = transform.localScale.x;
}

function Update () {
	nowHP = GetComponentInParent(Tower).hp;
	var rate : float = nowHP / maxHP;
	if(rate <= 0)rate = 0;
	
	if(rate < 0.3) {
		GetComponent(SpriteRenderer).color = Color.red;
	}
	else if(rate < 0.5) {
		GetComponent(SpriteRenderer).color = Color.yellow;
	}
	else {
		GetComponent(SpriteRenderer).color = Color.green;
	}
	transform.localScale.x = scaleX * rate;
}