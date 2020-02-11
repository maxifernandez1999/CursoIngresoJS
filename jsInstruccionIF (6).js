function mostrar()
{
	var edad;
	//tomo la edad

	edad=document.getElementById('edad').value;

	if(edad>18)
	{
		alert("soy mayor");
	}else
		if(edad<13)
		{
			alert("soy niño");
		}else
			alert("soy adolescente");






}//FIN DE LA FUNCIÓN