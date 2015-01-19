#pragma strict

import UnityEngine.UI;

private var rt : RectTransform;
private var btn : Button;
private var width : float;
private var height : float;
var timeLeft : float = 0;
var timeAmount : float = 0;

function Start () {
	rt = GetComponent(RectTransform);
	btn = GetComponentInParent(Button);
	width = rt.sizeDelta.x;
	height = rt.sizeDelta.y;
}

function Update () {
	if (timeLeft > 0) {
		timeLeft -= Time.deltaTime;
		rt.sizeDelta = new Vector2(width * (timeLeft/timeAmount), height * (timeLeft/timeAmount));
		if(btn.IsInteractable())btn.interactable = false;
	}
	else {
		if(!btn.IsInteractable())btn.interactable = true;
		rt.sizeDelta = Vector2.zero;
	}
}

function Run () {
	timeLeft = timeAmount;
}