#pragma strict

var prefab : GameObject [];

function Start () {
	SpawnMon(0, 3, 5, 1.5f);
	
	yield WaitForSeconds(2f);
	
	InvokeRepeating("RegularSpawn", 0, 10f);
}

function SpawnMon (start : int, end : int, amount : int, wait : float) {
	for(var i=0;i<amount;i++) {
		Instantiate(
			prefab[Random.Range(start, end)],
			GameObject.Find ("EnemySpawnPoint").transform.position,
			Quaternion.identity
		);
		yield WaitForSeconds(wait);
	}
}

function RegularSpawn () {
	SpawnMon (0, 1, 10, 1f);
}