/*Para la gention de un hotel ingresar los siguientes datos validados de una reserva:
Nombre del huesped
Cantidad de personas
cantidad de dias de estadia
forma de pago(efectivo,tarjeta o QR)

informar el huesped que tranjo mas personas en una sola reserva

la cantidad de personas que se quedaron mas dias

la forma de pago mas utilizada

el promedio de cantidad de dias por reserva
*/
function mostrar()
{
	var nombre;
	var CantidadDePersonas;
	var CantidadDeDias;
	var FormaDePago;

	var maximoCantidadDePersonas;
	var maximoCantidadDePersonasNombre;
	var maximoCantidadDeDias;
	var maximoCantidadDeDiasCantidadDePersonas;
	var contador;
	var contadorEfete;
	var contadorQR;
	var contadorTarjeta;
	var acumulador;
	var masUtilizada;
	var respuesta;
	

	acumulador=0;
	contadorQR=0;
	contadorTarjeta=0;
	contadorEfete=0;
	respuesta = "s";
	contador= 0;

	while(respuesta=="s")
	{
		do
		{
			nombre = prompt("ingrese nombre")
		}while(!(isNaN(nombre)));

		do
		{
			CantidadDePersonas = prompt("ingrese la cantidad de personas");
			CantidadDePersonas = parseInt(CantidadDePersonas);
		}while(isNaN(CantidadDePersonas) || CantidadDePersonas < 1 && CantidadDePersonas > 20);

		do
		{
			CantidadDeDias = prompt("ingrese la cantidad de dias");
			CantidadDeDias = parseInt(CantidadDeDias);
		}while(isNaN(CantidadDeDias) || CantidadDeDias < 1 && CantidadDeDias > 31);

		do
		{
			FormaDePago = prompt("ingrese forma de pago");
		}while(!(isNaN(FormaDePago)) && FormaDePago!="efectivo" && FormaDePago!="tarjeta" && FormaDePago!="QR");


		if(contador==0 || CantidadDePersonas > maximoCantidadDePersonas )
		{
			maximoCantidadDePersonas = CantidadDePersonas
			maximoCantidadDePersonasNombre = nombre;
		}
		if(contador==0 || CantidadDeDias > maximoCantidadDeDias)
		{
			maximoCantidadDeDias = CantidadDeDias;
			maximoCantidadDeDiasCantidadDePersonas = CantidadDePersonas;
		}
		switch(FormaDePago)
		{
			case "efectivo":
				contadorEfete++;
				break;
			case "qr":
				contadorQR++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
		}
		
	}
	promedio = acumulador / contador;

	if(contadorQR>contadorTarjeta && contadorQR>contadorEfete)
	{
		masUtilizada = "qr";
	}else
		if(contadorTarjeta>contadorEfete)
		{
			masUtilizada = "Tarjeta";
		}else
		{
			masUtilizada = "efectivo";
		}
		respuesta = prompt("s para continuar");
		contador++;
		
	document.write(maximoCantidadDePersonasNombre);
	document.write(maximoCantidadDeDiasCantidadDePersonas);
	document.white(masUtilizada);
	document.white(promedio);	
	
	
	
	
}
