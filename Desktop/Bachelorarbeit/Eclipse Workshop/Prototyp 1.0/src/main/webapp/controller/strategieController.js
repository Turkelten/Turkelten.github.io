
function loadparameter(){
	if(sessionStorage.getItem("strategie")){
		document.getElementById("strategie").innerHTML = sessionStorage.getItem("strategie")
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
}
	