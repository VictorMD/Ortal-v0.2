/*
private var choqueRaycast	: boolean;
	

function Start() {

	choqueRaycast = false;

}
	
	
function Update () {

	// Pintar Línea y emitir Raycast.
	PintarLinea();
	//choqueRaycast = EmitirRayo();
	// Mover Personaje en función del Input de teclado.
//	MoverPersonaje(choqueRaycast);
	
}


function PintarLinea() {


	
	
	//Debug.DrawLine (transform.position, end, Color.red);
	
	var end: Vector3;
	
	end = transform.position;
	
	//end.x = transform.position.x;
	
	end.x = end.x + 1;
	
	var fwd = transform.TransformDirection (Vector3.forward);
	Debug.DrawRay (transform.position, fwd*1, Color.blue);
	
	
	end = transform.position;
	end.y = end.y + 10;
	
	Debug.DrawLine (transform.position, end, Color.green);
	
	
	
	Debug.DrawLine (transform.position, Vector3 (trnasform.position.x+10, transform.position.y, transform.position.z), Color.red);
	
	

}


function EmitirRayo() {
	
	
	var fwd = transform.TransformDirection (Vector3.forward);
	return Physics.Raycast (transform.position, fwd, 1);
	

}
*/