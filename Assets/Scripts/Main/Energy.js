#pragma strict

import UnityEngine.UI;

var nowEnergy : float;
var maxEnergy : float;
var scaleX : float;
var energyText : Transform;

function Start () {
	nowEnergy = maxEnergy;
	scaleX = transform.localScale.x;
}

function Update () {
	energyText.GetComponent(Text).text = nowEnergy.ToString() + "/" + maxEnergy.ToString();
	
	var rate : float = nowEnergy / maxEnergy;
	if(rate <= 0)rate = 0;
	transform.localScale.x = scaleX * rate;
}

function AddEnergy (amount : int) {
	if(nowEnergy + amount > maxEnergy) {
		nowEnergy = maxEnergy;
		return true;
	}
	else if(nowEnergy + amount < 0) {
		return false;
	}
	else {
		nowEnergy += amount;
		return true;
	}
}