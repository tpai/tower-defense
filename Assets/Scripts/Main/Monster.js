#pragma strict

var hp : int = 100;
var atk : int = 1;
var opponent : GameObject;
var award : int;
var speed : float = 8f;
var isAttacking : boolean = false;
var anim : Animator;

function Start () {
	anim = GetComponentInChildren(Animator);
}

function Update () {
	
	if(hp <= 0) {
		anim.SetTrigger("dead");
	}
	else {
		if(opponent == null) {
			isAttacking = false;
		}
		else {
			isAttacking = true;
			opponent.SendMessage("Damage", atk);
		}

		if(isAttacking == true) {
			anim.SetBool("attack", true);
			rigidbody2D.velocity = Vector2.zero; //new Vector2(0, 0);
		}
		else {
			anim.SetBool("attack", false);
			rigidbody2D.velocity = new Vector2(speed, 0);
		}
	}
}

function OnTriggerStay2D (other : Collider2D) {
	if(
		(other.tag == "EnemyMon" && transform.tag == "MyMon") ||
		(other.tag == "MyMon" && transform.tag == "EnemyMon") ||
		
		(other.tag == "EnemyTower" && transform.tag == "MyMon") ||
		(other.tag == "MyTower" && transform.tag == "EnemyMon")
	) {
		opponent = other.gameObject;
	}
}

function Damage (atk : int) {
	hp -= atk;
}

function GiveAward () {
	GameObject.Find("EnergyBar").GetComponent(Energy).AddEnergy(award);
}