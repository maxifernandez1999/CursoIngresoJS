function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert("Falta para el invierno");
		break;
	case "Julio":
	case "Agosto":
		alert("abrigate que hace frio");
		break;
	default:
		alert("ya paso invierno, ahora calor!!!");
}




}//FIN DE LA FUNCIÓN