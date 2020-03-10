/*Realizar el algoritmo permita ingresar los datos de una compra de ingredientes para 
	preparar comida al por mayor, HASTA QUE EL CLIENTE QUIERA.<br>
        PESO: (entre 10 y 1000 kilos)<br>
        PRECIO POR KILO: (mayor a 0[cero]).<br>
        TIPO VALIDAD: ("v", "a", "m");(vegetal, animal, mezcla).<br><br>
        Si compro mas de 100 kilos en total tenes 15% de descuento sobre el precio bruto.<br>
        Si compro mas de 300 kilos en total, tenes 25% de descuento sobre el precio bruto.<br>
        A) El importe total a pagar, BRUTO sin descuento.<br>
        B) El importe total a pagar con descuento (Solo si corresponde).<br>
        C) Informar el tipo de alimento mas caro.<br>
        D) El promedio de precio por kilo en total.*/
function mostrar()
{
	var ingrediente
	var ingredientePeso
	var ingredientePrecioPorKilo
	var ingredienteTipoValidad
	var respuesta
	var contadorIngrediente
	var precioBruto
	var cantidadKilos
	var tipoAlimentoMasCaroPrecio
	var descuento

	respuesta = "s";
	contadorIngrediente = 0;
	precioBruto = 0;
	cantidadKilos = 0;
	tipoAlimentoMasCaro = 0;
	descuento = 1;

	while(respuesta=="s")
	{
		do
		{
			ingrediente = ingrediente = prompt("ingrese el ingrediente");
		}while(!isNaN(ingrediente));

		do
		{
			ingredientePeso = prompt("ingrese el peso");
			ingredientePeso = parseInt(ingredientePeso);
		}while(isNaN(ingredientePeso) || ingredientePeso < 10 || ingredientePeso > 1000);

		do
		{
			ingredientePrecioPorKilo = prompt("ingrese el precio por kilo");
			ingredientePrecioPorKilo = parseInt(ingredientePrecioPorKilo);
		}while(isNaN(ingredientePrecioPorKilo) || ingredientePrecioPorKilo < 1 );

		do
		{
			ingredienteTipoValidad = prompt("ingrese el tipo (v/a/m)");
		}while(!isNaN(ingredienteTipoValidad) || ingredienteTipoValidad!="v" && ingredienteTipoValidad!="a" && ingredienteTipoValidad!="m");

		precioBruto = precioBruto + (ingredientePeso*ingredientePrecioPorKilo);

		respuesta = prompt("s para continuar");

		cantidadKilos = cantidadKilos + ingredientePeso;

		if(contadorIngrediente==1 || tipoAlimentoMasCaroPrecio < ingredientePrecioPorKilo)
		{
			tipoAlimentoMasCaroPrecio = ingredientePrecioPorKilo;
			tipoAlimentoMasCaro = ingredienteTipoValidad;
			switch(tipoAlimentoMasCaro)
			{
				case "v":
					tipoAlimentoMasCaroValidad = "vegetal";
					break;
				case "a":
					tipoAlimentoMasCaroValidad = "animal";
					break;
				default:
					tipoAlimentoMasCaroValidad = "mezcla"
					break;
			}
		}
		if(cantidadKilos > 100 && cantidadKilos < 300)
		{
			descuento1 = precioBruto * 0.15;
			precioFinal = precioBruto - descuento1;
		}else
		{
			descuento2 = precioBruto * 0.25;
			precioFinal = precioBruto - descuento2;
		}

		
			

		
		contadorIngrediente++;
	}

	document.write("el precio bruto sin descuento es "+ precioBruto);
	document.write("el total a pagar con descuento "+ descuento);
}
