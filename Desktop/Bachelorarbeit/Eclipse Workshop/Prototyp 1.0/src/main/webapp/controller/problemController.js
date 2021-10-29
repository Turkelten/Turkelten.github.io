function loadControllPara(){
	 if(sessionStorage.getItem("problem")){
			document.getElementById("controllpage").innerHTML = sessionStorage.getItem("problem");
	}
}
		
	
	function saveInSession() {
		var data = document.getElementById("problem").value
		sessionStorage.setItem("problem", data);
	}


	function loadparameter(){
			if(sessionStorage.getItem("problem")){
			document.getElementById("problem").innerHTML = sessionStorage.getItem("problem")
		}
	
	 }

	function save(){
		var data = document.getElementById("controllpage").value
		sessionStorage.setItem("problem", data);
		sessionStorage.setItem("isProblemSet", true);
	}



