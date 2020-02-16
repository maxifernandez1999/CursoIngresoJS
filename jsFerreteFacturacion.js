/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioI;
	var precioII;
	var precioIII;
	var suma;

	precioI=document.getElementById('PrecioUno').value;
	precioII=document.getElementById('PrecioDos').value;
	precioIII=document.getElementById('PrecioTres').value;
	precioI=parseInt(precioI);
	precioII=parseInt(precioII);
	precioIII=parseInt(precioIII);

	suma=precioI+precioII+precioIII;
	alert(suma);
}
function Promedio () 
{
	var precioI;
	var precioII;
	var precioIII;
	var promedio;

	precioI=document.getElementById('PrecioUno').value;
	precioII=document.getElementById('PrecioDos').value;
	precioIII=document.getElementById('PrecioTres').value;
	precioI=parseInt(precioI);
	precioII=parseInt(precioII);
	precioIII=parseInt(precioIII);

	promedio=(precioI+precioII+precioIII)/3;
	alert(promedio);
}
function PrecioFinal () 
{
	var precioI;
	var precioII;
	var precioIII;
	var preciofinal;
	var suma;

	precioI=document.getElementById('PrecioUno').value;
	precioII=document.getElementById('PrecioDos').value;
	precioIII=document.getElementById('PrecioTres').value;
	precioI=parseInt(precioI);
	precioII=parseInt(precioII);
	precioIII=parseInt(precioIII);

	suma=precioI+precioII+precioIII;

	iva=suma*21/100;

	preciofinal=suma+iva;

	alert(preciofinal);
}