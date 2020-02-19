function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero);

	while(numero<0 || numero>9)
	{
		numero = prompt("error, reingrese un número entre 0 y 9.");
		numero = parseInt(numero);
	}
	alert("ha ingresado el numero correctamente");

}//FIN DE LA FUNCIÓN