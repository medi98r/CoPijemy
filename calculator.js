const sex = document.getElementById("Płeć");
const wage = document.getElementById("Waga");
const age = document.getElementById("Wiek");
const obj = document.getElementById("objetosc");
var result = document.getElementById("wynik");
const submit = document.getElementById("przycisk");

let wagaF = waga();

console.log(waga.w);

submit.addEventListener("click", heloo);

wage.addEventListener('input', waga);
age.addEventListener('input', waga);
obj.addEventListener('input', waga);

function heloo(){
	let wagaF = parseFloat(wage.value);
	let ageF = parseFloat(age.value);
	let objF = parseFloat(obj.value);	
	
	if(sex.value=="Mężczyzna") 
	{
		result.value = objF/(0,7*wagaF);
	}
	if(sex.value =="Kobieta")
	{
		result.value = objF/(0,6*wagaF);
	}
}

function waga(){
}
function wiek(){
}
function obje(){
}
