function loadparameter(){
	 if(sessionStorage.getItem("methods")){
			document.getElementById("methods").innerHTML = sessionStorage.getItem("methods");
	}
 }

function loadControllPara(){
	 if(sessionStorage.getItem("methods")){
			document.getElementById("controllpage").innerHTML = sessionStorage.getItem("methods");
	}
}


function saveInSession() {
	var data = document.getElementById("methods").value
	sessionStorage.setItem("methods", data);
}

	function save(){
		var data = document.getElementById("controllpage").value
		sessionStorage.setItem("methods", data);
		sessionStorage.setItem("isMethodSet", true);
	}