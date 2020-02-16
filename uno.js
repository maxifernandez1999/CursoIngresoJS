
function mostrar()
{
	var ancho=prompt("Ingrese el ancho");
	var largo=prompt("Ingrese el largo");
	var perimetro;

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=(ancho+largo)*2;

	alert("El perimetro del rectangulo es"+ perimetro);
}
