/*1. promedio de edad
2. nombre del mas joven
3. cantidad de hombres
4. cantidad de mujeres
5. sexo del importe mas alto
6. operacion mas utilizada
7. importe del mas viejo*/
function mostrar()
{
	var nombreDelCliente
	var edad
	var sexo
	var tipoDeTransaccion
	var importe
	var promedio
	var contador
	var nombreDelMasJoven
	var edadDelMasJoven
	var respuesta
	var hombresCantidad
	var mujeresCantidad
	var importeMayor
	var sexoDeImporteMayor
	var contadorExtraccion
	var contadorDeposito

	contadorExtraccion = 0;
	contadorDeposito = 0;
	respuesta = "s";
	contador = 0;

	while(respuesta=="s")
	{
		do
		{
			nombreDelCliente = prompt("ingrese el nombre del cliente");
		}while(!isNaN(nombreDelCliente));

		do
		{
			edad = prompt("ingrese edad");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad < 18 || edad > 112);

		do
		{
			sexo = prompt("ingrese su sexo")
		}while(!isNaN(sexo) || sexo !="f" && sexo!="m");

		do
		{
			tipoDeTransaccion = prompt("ingrese el tipo de transaccion")
		}while(!isNaN(tipoDeTransaccion) || tipoDeTransaccion!="extraccion" && tipoDeTransaccion != "deposito");

		do
		{
			importe = prompt("ingrese su importe");
			importe = parseInt(importe);
		}while(isNaN(importe) || importe < 0 || importe > 5000);
		respuesta = prompt("ingrese s para continuar")
		contador++;

		EdadSuma = EdadSuma + edad;
		
	}
	promedioEdad = EdadSuma / contador;

	if(contador==0 || edad > edadDelMasJoven)
	{
		edadDelMasJoven = edad;
		nombreDelMasJoven = nombre;
	}

	if(sexo == "m")
	{
		hombresCantidad++;
	}else
	{
		mujeresCantidad++;
	}

	if(contador==0 || importe > importeMayor)
	{
		importeMayor = importe;
		sexoDeImporteMayor = sexo;
	}


	

	
	document.write("el promedio de edad es"+ promedioEdad + "<br>");
	document.write("el nombre de la persona mas joven es"+nombreDelMasJoven+ "<br>");
	document.write("el numero de hombres es"+ hombresCantidad + "<br>");
	document.write("el numero de mujeres es"+ mujeresCantidad);
	document.write("el sexo con importe mas alto es"+ sexoDeImporteMayor + "<br>")






}
