#pragma strict
var Player : Transform; //variacion de transform para en este caso la rotacion 
var damp = 2;
var velocidadePerseguidor = 4; //velocidad que tiene el enemigo al rotar
public var proyectil    : GameObject;
public var posicionbala: Transform;

var fireRate = 0.5;
private var nextFire = 0.0;

function Start () {

}

function Update () {
	if(Player!=null){ //si el player es diferente a null 
   	 	if(Vector3.Distance(Player.position,transform.position) < 20){ //si la distancia del jugador es menor que 20 
  		//transform.LookAt(Player);
   		var rotate = Quaternion.LookRotation(Player.position - transform.position); //rotar con el movimiento del personaje
   		transform.rotation = Quaternion.Slerp(transform.rotation, rotate,damp * Time.deltaTime);
   		transform.Rotate(0,0, velocidadePerseguidor * Time.deltaTime); //Velocidad con la que va a rotar 
 	 }
 	 /*
 	 if (renderer.isVisible == true){ 
 		 Debug.Log ("Enemigo dispara");
				
		var instanciaProyectil : GameObject;
		
		instanciaProyectil = Instantiate (proyectil, posicionbala.position, transform.localRotation);
	
		instanciaProyectil.rigidbody.velocity = transform.TransformDirection (Vector3(0,0,20));
		
		Physics.IgnoreCollision(instanciaProyectil.collider, transform.root.collider);
  	}*/
  	
			if (renderer.isVisible == true && Time.time > nextFire) {
			
			nextFire = Time.time + fireRate;
			
			var clone = Instantiate (proyectil, posicionbala.position, transform.localRotation);
			
			clone.rigidbody.velocity = transform.TransformDirection (Vector3(0,0,20));
		
			Physics.IgnoreCollision(clone.collider, transform.root.collider);
			
		}
  	}
}

//Ponerle al lanzamisil un rigidbody (bloqueando todo menos la rotacion en Y, collision continuos, 
//ponerle un box collider o esfere collider (mejor, en el script ponerle el player de primera persona 