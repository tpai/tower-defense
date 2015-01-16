#pragma strict

private var spawnPoint : Transform;
var prefab : GameObject[];

function Start () {
	spawnPoint = GameObject.Find ("MySpawnPoint").transform;
}

function Summon (id : int) {
	var obj : GameObject = Instantiate(prefab[id-1], spawnPoint.position, Quaternion.identity);
	GameObject.Find("MyMon"+id).transform.Find ("CDTimer").SendMessage("Run");
}