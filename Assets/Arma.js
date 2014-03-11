

public var proyectil    : GameObject;
public var posicionmisil: Transform;
public var fireRate = 1.0;

private var nextFire = 0.0;
	
function Update () {


if (Input.GetButton ("Fire1") && Time.time > nextFire) {
			nextFire = Time.time + fireRate;
			var clone = Instantiate (proyectil, posicionmisil.position, transform.localRotation);
			
			clone.rigidbody.velocity = transform.TransformDirection (Vector3(0,0,-20));
		
		
			Physics.IgnoreCollision(clone.collider, transform.root.collider);
	}
	
/*
	if (Input.GetButtonDown("Fire1")) {
	
		
		//Debug.Log ("Has disparado");
		
		
		var instanciaProyectil : GameObject;
		
		
		instanciaProyectil = Instantiate (proyectil, posicionmisil.position, transform.localRotation);
	
		
		instanciaProyectil.rigidbody.velocity = transform.TransformDirection (Vector3(0,0,-15));
		
		
		Physics.IgnoreCollision(instanciaProyectil.collider, transform.root.collider);
	}
	*/
	
	
	
	
}