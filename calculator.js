const sex = document.getElementById("Płeć");
const wage = document.getElementById("Waga");
const age = document.getElementById("Wiek");
const obj = document.getElementById("objetosc");
var result = document.getElementById("wynik");
const submit = document.getElementById("przycisk");
const time = document.getElementById("Time");

const typ = document.getElementById("alko");
const ilosc = document.getElementById("ilosc");
const submit_2 = document.getElementById("przycisk_2");

const ourValue = document.getElementById("ourValue");
const selDrink = document.getElementById("Drink");
const button_3 = document.getElementById("Button_3")

var drinks = ['Black Russian','White Russian','Jagger Bomb','John Collins','Blue Gin','Pink Lady','Long Island Iced Tea','Paradise Bay','Old Fashioned','Bloody Whisky','Whisky Sour','Cuba Libre','Jagger Bullet','Wściekły Pies','Jack Sparrow','Niebieskie Kamikadze','Limonka i Malibu','Flaga Polski','Lagoon'];


submit.addEventListener("click", calc);
wage.addEventListener("click",reset);
age.addEventListener("click",reset);
ilosc.addEventListener("click",reset);
time.addEventListener("click",reset);
ourValue.addEventListener("click", reset);

button_3.addEventListener("click", setValue)

console.log(drinks[14]);

function setValue(){
	
	if(selDrink.value == drinks[0])
	{
		obj.value =((12*4*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[1])
	{
		obj.value =((12*4*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[2])
	{
		obj.value =((9*2.5*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[3])
	{
		obj.value =((8*3*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[4])
	{
		obj.value =((12*2*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[5])
	{
		obj.value =((8*1.5*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[6])
	{
		obj.value =((21*3*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[7])
	{
		obj.value =((12*4*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[8])
	{
		obj.value =((36*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[9])
	{
		obj.value =((15*2*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[10])
	{
		obj.value =((20*2*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[11])
	{
		obj.value =((11*2*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[12])
	{
		obj.value =((25*0.25*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[13])
	{
		obj.value =((30*0.25*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[14])
	{
		obj.value =((29*0.4*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[15])
	{
		obj.value =((20*0.4*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[16])
	{
		obj.value =((18*0.4*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[17])
	{
		obj.value =((16*0.25*0.8)*ourValue.value).toFixed(0);
	}
	if(selDrink.value == drinks[18])
	{
		obj.value =((16*0.4*0.8)*ourValue.value).toFixed(0);
	}
}



function reset(){
	if(this.value == "Waga" || this.value == "Wiek " || this.value == "alk. w ml" || this.value == "Czas od spoż." || this.value == "Porcje")
	this.value = '';
}

function observ(){
	if(obj.value == "NaN")
	{
		obj.value = "Błąd!";
	}
}

function calc(){
	let wagaF = parseFloat(wage.value);
	let ageF = parseFloat(age.value);
	let objF = parseFloat(obj.value);	
	
	if(sex.value=="Mężczyzna") 
	{
		result.value = objF/(0.7*wagaF)-time.value*0.15;
		if(result.value == "NaN")
		{
			result.value = "Błędne wartości!";
		}
		else if(result.value <= 0)
		{
			result.value = 0 + " " + "promili";
		}
		else if(parseFloat(result.value)>1.9)
		{
			result.value = "~" + (parseFloat(result.value)).toFixed(2) + " " + "promili";
		}
		else
			result.value = "~" + (parseFloat(result.value)).toFixed(2) + " " +"promila";
	}
	if(sex.value =="Kobieta")
	{
		result.value = objF/(0.6*wagaF)-time.value*0.15;
		if(result.value == "NaN")
		{
			result.value = "Błędne wartości!";
		}
		else if(result.value <= 0)
		{
			result.value = 0 + " " + "promili";
		}
		else if(parseFloat(result.value)>1.9)
		{
			result.value = "~" + (parseFloat(result.value)).toFixed(2) + " " + "promili";
		}
		else
			result.value = "~" + (parseFloat(result.value)).toFixed(2) + " " +"promila";
	}
}

submit_2.addEventListener("click", licz);

function licz() {
	if(typ.value == "Wódka")
	{
		let gram = parseFloat(ilosc.value)/30*10;
		obj.value = gram.toFixed(0);
	}
	if(typ.value == "Piwo")
	{
	    let gram = parseFloat(ilosc.value)/250*10;
		obj.value = gram.toFixed(0);
	}
	if(typ.value == "Wino")
	{
		let gram = parseFloat(ilosc.value)/100*10;
		obj.value = gram.toFixed(0);
	}
	observ();
}
