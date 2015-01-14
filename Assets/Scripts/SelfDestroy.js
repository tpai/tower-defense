#pragma strict

function SelfDestroy () {
	Destroy(transform.parent.parent.gameObject);
}