var li = [...document.querySelectorAll("ul li")];
var ul = document.querySelector("ul");

var cat_1 = document.getElementById("alkohol");
var cat_2 = document.getElementById("napoj");
var cat_3 = document.getElementById("trudnosc");
var cat_4 = document.getElementById("moc");
var submit = document.getElementById("przycisk");
var reset = document.getElementById("reset");
const searchInput = document.querySelector("input");
const find = document.getElementById("find");

submit.addEventListener("click", Filtrowanie)
reset.addEventListener("click",Reset)

const serachWord = e =>{
	const currentWord = e.target.value.toUpperCase();
	let result = li;
	result = result.filter(li => li.textContent.toUpperCase().includes(currentWord));
	ul.textContent = '';
	result.forEach(name => ul.appendChild(name));
}
searchInput.addEventListener('input', serachWord);

function Reset()
{
	cat_1.value = "Alkohol";
	cat_2.value = "Napój";
	cat_3.value = "Poziom tr.";
	cat_4.value = "Moc";
	find.disabled = false;
	find.value = "";
	var result = li;
	ul.textContent = '';
	result.forEach(name => ul.appendChild(name));
}


function Filtrowanie(){
	
	find.disabled = true;
	
	if(cat_1.value!="Alkohol" && cat_2.value!="Napój" && cat_3.value!="Poziom tr."  && cat_4.value!="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_1.value) && li.className.includes(cat_2.value) && li.className.includes(cat_3.value) && li.className.includes(cat_4.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}	

	else if(cat_1.value=="Alkohol" && cat_2.value=="Napój" && cat_3.value=="Poziom tr." && cat_4.value=="Moc"){
		var result = li;
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value=="Alkohol" && cat_2.value=="Napój" && cat_3.value=="Poziom tr." && cat_4.value!="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_4.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value=="Alkohol" && cat_2.value!="Napój" && cat_3.value=="Poziom tr." && cat_4.value=="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_2.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value=="Alkohol" && cat_2.value=="Napój" && cat_3.value!="Poziom tr." && cat_4.value=="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_3.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value!="Alkohol" && cat_2.value=="Napój" && cat_3.value=="Poziom tr." && cat_4.value=="Moc")	{
		var result = li;
		result = result.filter(li => li.className.includes(cat_1.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value=="Alkohol" && cat_2.value=="Napój" && cat_3.value!="Poziom tr." && cat_4.value!="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_3.value) && li.className.includes(cat_4.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value=="Alkohol" && cat_2.value!="Napój" && cat_3.value=="Poziom tr." && cat_4.value!="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_2.value) && li.className.includes(cat_4.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value=="Alkohol" && cat_2.value!="Napój" && cat_3.value!="Poziom tr." && cat_4.value=="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_2.value) && li.className.includes(cat_3.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value!="Alkohol" && cat_2.value=="Napój" && cat_3.value=="Poziom tr." && cat_4.value!="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_1.value) && li.className.includes(cat_4.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value!="Alkohol" && cat_2.value=="Napój" && cat_3.value!="Poziom tr." && cat_4.value=="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_1.value) && li.className.includes(cat_3.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value!="Alkohol" && cat_2.value!="Napój" && cat_3.value=="Poziom tr." && cat_4.value=="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_1.value) && li.className.includes(cat_2.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value=="Alkohol" && cat_2.value!="Napój" && cat_3.value!="Poziom tr." && cat_4.value!="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_2.value) && li.className.includes(cat_3.value) && li.className.includes(cat_4.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value!="Alkohol" && cat_2.value=="Napój" && cat_3.value!="Poziom tr."  && cat_4.value!="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_1.value) && li.className.includes(cat_3.value) && li.className.includes(cat_4.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value!="Alkohol" && cat_2.value!="Napój" && cat_3.value=="Poziom tr." && cat_4.value!="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_1.value) && li.className.includes(cat_2.value) && li.className.includes(cat_4.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
	else if(cat_1.value!="Alkohol" && cat_2.value!="Napój" && cat_3.value!="Poziom" && cat_4.value=="Moc"){
		var result = li;
		result = result.filter(li => li.className.includes(cat_1.value) && li.className.includes(cat_2.value) && li.className.includes(cat_3.value));
		ul.textContent = '';
		result.forEach(name => ul.appendChild(name));
	}
}
	