#pragma strict

function SelfDestroy () {
	var parentObject : GameObject = transform.parent.parent.gameObject;
	
	if(parentObject.tag == "EnemyMon") {
		parentObject.SendMessage("GiveAward");
	}
	else if(parentObject.tag == "MyTower") { // enemy win
		PlayerPrefs.SetInt("Result", 0);
		PlayerPrefs.SetString("ResultMessage", "Oh, no... you lose!");
		Application.LoadLevel(3);
	}
	else if(parentObject.tag == "EnemyTower") { // I win
		PlayerPrefs.SetInt("Result", 1);
		PlayerPrefs.SetString("ResultMessage", "Congratulations! You Win!");
		Application.LoadLevel(3);
	}
	
	Destroy(parentObject);
}