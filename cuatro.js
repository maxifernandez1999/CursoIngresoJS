function mostrar()
{
	var num1=prompt("numero 1");
	var num2=prompt("numero 2");
	
	if(num1==num2)
		{
			alert(num1+num2);
		}else{
			num1=parseInt(num1);
			num2=parseInt(num2);

			if(num1>num2 && (num1+num2)<10)
				{
					alert(num1-num2);
				}
				else if(num1<num2 && (num1+num2)<10)
				{
					alert(num1+num2);
				}
					if(num1+num2>10)
					{
						alert("la suma es" + (num1+num2) + "y supero el 10");
					}
}
}
