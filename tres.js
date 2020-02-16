function mostrar()
{
 	var precio=prompt("Ingresar precio");
 	var descuento=prompt("Ingresar descuento");
 	var preciofinal;

 	descuento=precio*descuento/100;
 	preciofinal=precio-descuento;

 	document.getElementById('elPrecioFinal').value=preciofinal;


}
