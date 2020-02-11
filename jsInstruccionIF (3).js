function mostrar()
{
	var edad
	//tomo la edad

	edad=document.getElementById('edad').value;

	if(edad>18) 
		{
			alert("es mayor");
		}
	else
		if(edad<17)
			{
				alert("es menor");
			}   

}//FIN DE LA FUNCIÓN