function loadControllPara(){
	 if(sessionStorage.getItem("design")){
			document.getElementById("controllpage").innerHTML = sessionStorage.getItem("design");
	}
}
	
	
	function saveInSession() {
		var data = document.getElementById("design").value
		sessionStorage.setItem("design", data);
	}


	function loadparameter(){
			if(sessionStorage.getItem("problem")){
				document.getElementById("lblproblem").innerHTML = sessionStorage.getItem("problem")
			}
			if(sessionStorage.getItem("problem") == "" || sessionStorage.getItem("problem") == "undefined" || sessionStorage.getItem("problem") == null){
				document.getElementById("lblproblem").innerHTML = "Das Problem ist noch nicht definiert.";
			}
			if(sessionStorage.getItem("questions")){
				document.getElementById("lblquestion").innerHTML = sessionStorage.getItem("questions")
			}
			if(sessionStorage.getItem("questions") == "" || sessionStorage.getItem("questions") == "undefined" || sessionStorage.getItem("questions") == null){
				document.getElementById("lblquestion").innerHTML = "Die Forschungsfrage ist noch nicht definiert.";
			}
			if(sessionStorage.getItem("design")){
				document.getElementById("design").innerHTML = sessionStorage.getItem("design")
			}
	 }

	function save(){
		var data = document.getElementById("controllpage").value
		sessionStorage.setItem("design", data);
		sessionStorage.setItem("isDesignSet", true);
	}
	
