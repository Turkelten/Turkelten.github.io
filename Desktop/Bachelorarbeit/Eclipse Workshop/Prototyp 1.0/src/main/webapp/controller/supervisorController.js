function loadControllPara(){
	if(sessionStorage.getItem("supervisor")){
		document.getElementById("controllpage").innerHTML = sessionStorage.getItem("supervisor")
	}
}
	
	
function saveInSession() {
	var data = document.getElementById("supervisor").value
	sessionStorage.setItem("supervisor", data);
}


function loadparameter(){
	if(sessionStorage.getItem("supervisor")){
		document.getElementById("supervisor").innerHTML = sessionStorage.getItem("supervisor")
	}
 }

function save(){
	var data = document.getElementById("controllpage").value
	sessionStorage.setItem("supervisor", data);
	sessionStorage.setItem("isSupervisorSet", true);
	alert("Das Speichern war erfolgreich");
}
	
