
//public var jugador: GameObject;
/*var flames : GameObject;
function find


private var radio = 5.0;
private var  fuerza = 2000.0;

*/
function OnCollisionEnter (other:Collision) { 


/*	Instantiate (flames, transform.position, transform.rotation);
		var	colliders : Collider [];
		colliders = Physics.OverlapSphere (transform.position, radio);
		for (var hit in colliders) {
			if (hit.rigidbody) hit.rigidbody.AddExplosionForce (fuerza, transform.position, radio);
			}
*/	
	var jugador = GameObject.Find ("First Person Controller");
		
		Debug.Log (jugador.transform.position);
		
		jugador.transform.position = other.gameObject.transform.position;
		jugador.transform.position.y+=6;
		
		
		Destroy (gameObject);
	
	
	
}