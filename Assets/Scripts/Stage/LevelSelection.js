#pragma strict

function SetLevel (lv : int) {
	PlayerPrefs.SetInt("NowLevel", lv);
	Application.LoadLevel(1);
}