/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadlamparas;
 	var marca;
 	var preciobruto;
 	var descuento;
 	var preciofinal;

 	cantidadlamparas = document.getElementById('Cantidad').value;
 	cantidadlamparas = parseInt(cantidadlamparas);
 	marca = document.getElementById('Marca').value;

 	preciobruto = cantidadlamparas*35

 	console.info("preciobruto" , preciobruto);

 	descuento = 0;
 	if(cantidadlamparas > 5)
 	{
 		descuento = 50;
 	}else
 	{
 		if(cantidadlamparas==5)
 		{
 			if(marca == "ArgentinaLuz")
 			{
 				descuento = 40;
 			}else
 			{
 				descuento = 30;
 			}
 		}else
 		{
 			if(cantidadlamparas==4)
 			{
 				if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 				{
 					descuento = 25;
 				}else
 				{
 					descuento = 20;
 				}
 			}else
 			{
 				if(cantidadlamparas==3)
 				{
 					if(marca == "ArgentinaLuz")
 					{
 						descuento = 15;
 					}else
 					{
 						if(marca == "FelipeLamparas")
 						{
 							descuento = 10;
 						}else
 						{
 							descuento = 5;
 						}
 					}
 				}
 			}
 		}
 	}
 	preciofinal = preciobruto - preciobruto* descuento/100;
 	console.info("preciofinal" , preciofinal);
}