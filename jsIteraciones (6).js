function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroingresado;

	while(contador<5)
	{
		numeroingresado=prompt("ingrese numero");
		numeroingresado=parseInt(numeroingresado);
		contador = contador + 1;
		acumulador = acumulador + numeroingresado;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN