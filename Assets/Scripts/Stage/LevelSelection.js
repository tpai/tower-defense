#pragma strict

function SetLevel (lv : int) {
	PlayerPrefs.SetInt("NowLevel", lv);
}

function PlaySoundThenNextScene (sceneId : int) {
	audio.Play();
	LoadLevel (sceneId);
}

function LoadLevel (id : int) {
	yield WaitForSeconds(1);
	Application.LoadLevel(id);
}