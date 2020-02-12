function mostrar()
{
	var numero;
	//Genero el número RANDOM entre 1 y 10 
	
	numero=Math.floor(Math.random()*10)+1;

	alert(numero);

	if(numero==9 || numero==10)
		{
			alert("EXCELENTE");
		}else
			if(numero>3 && numero<9)
				{
					alert("APROBÓ");
				}else
					{
						alert("VAMOS, LA PROXIMA SE PUEDE");
					}

	
}//FIN DE LA FUNCIÓN