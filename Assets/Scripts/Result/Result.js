#pragma strict

import UnityEngine.UI;

var clips : AudioClip[];

function Start () {
	audio.clip = clips[PlayerPrefs.GetInt("Result")];
	audio.Play();
	GetComponent(Text).text = PlayerPrefs.GetString("ResultMessage");
}

function BackToStage () {
	Application.LoadLevel(0);
}