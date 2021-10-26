	function loadparameter(){
		 if(sessionStorage.getItem("questions")){
				document.getElementById("questions").innerHTML = sessionStorage.getItem("questions");
			}
			if(sessionStorage.getItem("problem")){
				document.getElementById("lblallProblems").innerHTML = sessionStorage.getItem("problem");
			}
			if(sessionStorage.getItem("problem") == "" || sessionStorage.getItem("problem") == "undefined" || sessionStorage.getItem("problem") == null){
				document.getElementById("lblallProblems").innerHTML = "Das Problem ist noch nicht definiert. Bitte unter Problemstellung anlegen.";
			}
		 
	 }
	

	function saveInSession() {
		var data = document.getElementById("questions").value
		sessionStorage.setItem("questions", data);
	}