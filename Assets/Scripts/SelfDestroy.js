#pragma strict

function SelfDestroy () {
	Destroy(transform.parent.gameObject);
}