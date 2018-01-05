function toCirlipa() {
	document.getElementById("main").classList.remove("latin");
	document.getElementById("main").classList.add("cirlipa");
}

function toLatin() {
	document.getElementById("main").classList.remove("cirlipa");
	document.getElementById("main").classList.add("latin");
}

function toggleFont() {
	document.getElementById("main").classList.toggle("cirlipa");
	document.getElementById("main").classList.toggle("latin");
}
