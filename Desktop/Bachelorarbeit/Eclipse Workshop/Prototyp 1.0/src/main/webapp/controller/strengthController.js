
function loadparameter(){
	if(sessionStorage.getItem("strength")){
		document.getElementById("strength").innerHTML = sessionStorage.getItem("strength")
	}
}
	
function saveInSession() {
	var data = document.getElementById("strength").value
	sessionStorage.setItem("strength", data);
}
function loadControllPara(){
	 if(sessionStorage.getItem("strength")){
			document.getElementById("controllpage").innerHTML = sessionStorage.getItem("strength");
	}
}
	
function save(){
	var data = document.getElementById("controllpage").value
	sessionStorage.setItem("strength", data);
	sessionStorage.setItem("isStrengthSet", true);
	alert("Das Speichern war erfolgreich");
}
	
