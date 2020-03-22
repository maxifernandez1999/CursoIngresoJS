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
 	var cantidadLamparas
 	var precioLamparas;
 	var descuento;
 	var precioFinal;
 	var marca;
 	var aumentoIIBB;
 	var totalPrecioLamparas;
 	

 	precioLamparas = 35

 	cantidadLamparas = document.getElementById("Cantidad").value;
 	marca = document.getElementById("Marca").value;

 	if(cantidadLamparas >= 6)
 	{
 		totalPrecioLamparas = precioLamparas * cantidadLamparas;
 		descuento = totalPrecioLamparas * 50 / 100;
 		precioFinal = totalPrecioLamparas - descuento;
 	}else
 		if(cantidadLamparas == 5)
 		{
 			if(marca == "ArgentinaLuz")
 			{
 				totalPrecioLamparas = precioLamparas * cantidadLamparas;
 				descuento = totalPrecioLamparas * 40 / 100;
 				precioFinal = totalPrecioLamparas - descuento;
 			}else
 			{
 				totalPrecioLamparas = precioLamparas * cantidadLamparas;
 				descuento = totalPrecioLamparas * 30 / 100;
 				precioFinal = totalPrecioLamparas - descuento;
 			}
 		}else
 			if(cantidadLamparas == 4)
 			{
 				if(marca == "ArgentinaLuz" || "FelipeLamparas")
 				{
 					totalPrecioLamparas = precioLamparas * cantidadLamparas;
 					descuento = totalPrecioLamparas * 25 / 100;
 					precioFinal = totalPrecioLamparas - descuento;
 				}else
 				{
 					totalPrecioLamparas = precioLamparas * cantidadLamparas;
 					descuento = totalPrecioLamparas * 20 / 100;
 					precioFinal = totalPrecioLamparas - descuento;
 				}
 			}else
 			{
 				if(marca == "ArgentinaLuz")
 				{
 					totalPrecioLamparas = precioLamparas * cantidadLamparas;
 					descuento = totalPrecioLamparas * 15 / 100;
 					precioFinal = totalPrecioLamparas - descuento;
 				}else
 					if(marca == "FelipeLamparas")
 					{
 						totalPrecioLamparas = precioLamparas * cantidadLamparas;
 						descuento = totalPrecioLamparas * 10 / 100;
 						precioFinal = totalPrecioLamparas - descuento;
 					}else
 					{
 						totalPrecioLamparas = precioLamparas * cantidadLamparas;
 						descuento = totalPrecioLamparas * 5 / 100;
 						precioFinal = totalPrecioLamparas - descuento;
 					}
 			}

 			if(precioFinal > 120)
 			{
 				aumentoIIBB = precioFinal * 10 / 100;
 				precioFinal = precioFinal + aumentoIIBB;
 				alert("usted pago" + aumentoIIBB + "de IIBB");
 			}

 			document.getElementById("precioDescuento").value = precioFinal;
}
