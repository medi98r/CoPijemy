const searchInput = document.querySelector("input");
const li = [...document.querySelectorAll("ul li")];
const ul = document.querySelector("ul");



const searchInput_1 = document.getElementById("alkohol");

const serachWord = e =>{
	const currentWord = e.target.value.toUpperCase();
	let result = li;
	result = result.filter(li => li.textContent.toUpperCase().includes(currentWord));
	ul.textContent = '';
	result.forEach(name => ul.appendChild(name));
}

var alko = e=>{
	
	if(e.target.value=="Gin")
	{
		let result = li;
		result = result.filter(li => li.className=="Gin"||li.className=="More");
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	if(e.target.value=="Wódka")
	{
		let result = li;
		result = result.filter(li => li.className=="Wódka"||li.className=="More");
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	if(e.target.value=="Whisky")
	{
		let result = li;
		result = result.filter(li => li.className=="Whisky"||li.className=="More");
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	if(e.target.value=="Rum")
	{
		let result = li;
		result = result.filter(li => li.className=="Rum"||li.className=="More");
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	if(e.target.value=="-----")
	{
		let result = li;
		result = result.filter(li => li.className=="Whisky"||li.className=="Gin"||li.className=="Wódka"||li.className=="Rum"||li.className=="More");
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
}

	

searchInput.addEventListener('input', serachWord);

searchInput_1.addEventListener('input', alko)
