#pragma strict

private var spawnPoint : Transform;
var prefab : GameObject[];
var cost : int[];

function Start () {
	spawnPoint = GameObject.Find ("MySpawnPoint").transform;
}

function Summon (id : int) {
	if(GameObject.Find("EnergyBar").GetComponent(Energy).AddEnergy(cost[id-1])) {
		var obj : GameObject = Instantiate(prefab[id-1], spawnPoint.position, Quaternion.identity);
		GameObject.Find("MyMon"+id).transform.Find ("CDTimer").SendMessage("Run");
	}
}