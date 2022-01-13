
function loadparameter(){
	if(sessionStorage.getItem("strategie") && sessionStorage.getItem("strategie") != null){
		document.getElementById("strategie").innerHTML = sessionStorage.getItem("strategie")
	}
	if(sessionStorage.getItem("questions")){
		document.getElementById("lblquestion").innerHTML = sessionStorage.getItem("questions");
	}
	if(sessionStorage.getItem("questions") == "" || sessionStorage.getItem("questions") == "undefined" || sessionStorage.getItem("questions") == null){
		document.getElementById("lblquestion").innerHTML = "Die Forschungsfrage ist noch nicht definiert.";
	}
}
	
function saveInSession() {
	var data = document.getElementById("strategie").value
	sessionStorage.setItem("strategie", data);
}
function loadControllPara(){
	 if(sessionStorage.getItem("strategie")){
			document.getElementById("controllpage").innerHTML = sessionStorage.getItem("strategie");
	}
}
	
function save(){
	var data = document.getElementById("controllpage").value
	sessionStorage.setItem("strategie", data);
	sessionStorage.setItem("isStrategieSet", true);
	alert("Das Speichern war erfolgreich");
}
	
	