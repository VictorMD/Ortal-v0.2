#pragma strict
//variable publica para seleccionar un gameobject.
public var cuboPrefab : GameObject;
//variable publica int para ajustar el numero de gameobject. 
public var size       : int;
//variable publica booleana  para determinar si los gameobject aparece de forma continua o discontinua.
public var cont       : boolean;

public var salida     : GameObject;

public var entrada    : GameObject;

public var enemy      : GameObject;

private var salidaPuesta 	  : boolean;

private var entradaPuesta     : boolean;

public var jugador    : GameObject;

function Start () {
	//funcion que instsancia los gameobject.
	CrearLineaCubosx (size,cont);
	
	salidaPuesta = false;
	
	entradaPuesta = false;

	//entrada = true;
	
	//salida = false;
}

//funcion para crear una linea de cubos qe necesitan una variable entera y otra variable booleana.
function CrearLineaCubosx (tam : int, continua : boolean) {
	//clase for que ejecuta la variable i tantas veces como la variable tam indique.
	for(var i=1; i<tam; i++){
	//la variable pos es la x en el vector3 que equivale a la variable i
		for(var j=1; j<tam; j++){
			
			for(var k=1; k<tam; k++){
			
				var pos = Vector3(-50+i*5, k*5, -50+j*5);
				//variable que da propiedad de gameobject.
				var objetoInstanciado : GameObject;
				
				//funcion que realiza discontinuidad aleatoria. 
				var moneda = TirarMoneda();	
				
				var posTakaaComer = Vector3(-50+i*5, k*5, -50+j*5);
				var entradaInstanciada : GameObject;
				
				var salidaInstanciada : GameObject;
				
				var enemigoInstanciado : GameObject;
				
				var posSalida = Vector3(i*5,k*3,-50+j*5);
				
				var posEntrada = Vector3(i*5,k*5,-50+j*5);
				
				var Enemigo = MonedaEnemigo();
				
				//si moneda 0 o continua es verdadero... 
				if (moneda == 0 || continua == true){
					//...la variable objetoInstanciado equivale al Instantiate  (instsancia un gameobject en la escena)  formado por la variable gameobjet cuboPrefab, la variable de posicion pos y el parametro Quaternion.identity.
					objetoInstanciado      = Instantiate (cuboPrefab, pos, Quaternion.identity);																									//(rotacion del objecto instanciado nula)//
														  //(gameobject, posicion, rotacion)//
					objetoInstanciado.name = "Mi cubo" +i+"-"+j;
				}
				else {	// NO hemos puesto obstaculo
					
					if (Enemigo == 0){
						enemigoInstanciado      = Instantiate (enemy, posTakaaComer, Quaternion. identity);
						
						enemigoInstanciado.name = "Enemigo" +i;
					}
					
					// Si salidaPuesta es false:
					if (salidaPuesta== false){
						var monedaSalida = TirarMonedaSalida();
						// Poner la salida si aleatoriamente sale 1 en un Random.Range de (0,200);
						if (monedaSalida == 1){
							salidaPuesta = true;
							salidaInstanciada = Instantiate (salida, posSalida, Quaternion.identity);
							salidaInstanciada.name = "Salida";	
						}
					}
					if (entradaPuesta == false){
						var monedaSalida2 = TirarMonedaSalida();
						
						if (monedaSalida2 == 0){
							entradaPuesta = true;
							entradaInstanciada = Instantiate (entrada, posEntrada, Quaternion.identity);
							entradaInstanciada.name = "Entrada";
							jugador.transform.position = posEntrada;
							jugador.transform.position.y = posEntrada.y+6;
						}
					}
				}		
			}
		}	
	}
}	

//funcion para consequir 2 resultados aleatorios.
function TirarMoneda () {
	//variable entera.
	var aleatorio : int;
	//la variable aleatorio equivale al random (seleccciona entre unos valores de forma aleatoria) con un rango de respuestas de 2 (0 y 1).
	aleatorio = Random.Range(0,20);
	//devuelve el resultado de la variable aleatorio a TirarMoneda de la funcion CrearLineaCubos.
	return aleatorio;
}

function TirarMonedaSalida () {
	var aleatorio2 : int;
	
	aleatorio2 = Random.Range(0,200);
	
	return aleatorio2;
}

function MonedaEnemigo () {
	var aleatorio3 : int;
	
	aleatorio3 = Random.Range(0,1000);
	
	return aleatorio3;
}

