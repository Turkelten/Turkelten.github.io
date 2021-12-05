function loadControllPara(){
	if(sessionStorage.getItem("weaknesses")){
		document.getElementById("controllpage").innerHTML = sessionStorage.getItem("weaknesses")
	}
}
	
	
function saveInSession() {
	var data = document.getElementById("weaknesses").value
	sessionStorage.setItem("weaknesses", data);
}


function loadparameter(){
	if(sessionStorage.getItem("weaknesses")){
			document.getElementById("weaknesses").innerHTML = sessionStorage.getItem("weaknesses")
		}
 }

function save(){
	var data = document.getElementById("controllpage").value
	sessionStorage.setItem("weaknesses", data);
	sessionStorage.setItem("isWeaknessSet", true);
	alert("Das Speichern war erfolgreich");
}
	