#pragma strict

function PlaySoundThenNextScene (sceneId : int) {
	audio.Play();
	LoadLevel (sceneId);
}

function LoadLevel (id : int) {
	yield WaitForSeconds(1);
	Application.LoadLevel(id);
}