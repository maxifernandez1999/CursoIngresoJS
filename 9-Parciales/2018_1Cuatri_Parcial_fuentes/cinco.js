function mostrar()
{
	var planeta = prompt("Ingresar planeta");

	switch(planeta)
	{
		case "tierra":
			alert("Aca vivimos");
			break;
		case "mercurio":
		case "venus":
			alert("Aca hace mas calor");
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			alert("Aca hace mas frio");
			break;
		default:
			alert("El planeta no existe");
	}
}
