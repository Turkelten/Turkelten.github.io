	function loadparameter(){
		 if(sessionStorage.getItem("result")){
			document.getElementById("result").innerHTML = sessionStorage.getItem("result")
		} 
		if(sessionStorage.getItem("questions")){
			document.getElementById("lblquestion").innerHTML = sessionStorage.getItem("questions");
		}
		if(sessionStorage.getItem("questions") == "" || sessionStorage.getItem("questions") == "undefined" || sessionStorage.getItem("questions") == null){
			document.getElementById("lblquestion").innerHTML = "Die Forschungsfrage ist noch nicht definiert.";
		}
		if(sessionStorage.getItem("design")){
			document.getElementById("lbldesign").innerHTML = sessionStorage.getItem("design");
		}
		if(sessionStorage.getItem("design") == "" || sessionStorage.getItem("design") == "undefined" || sessionStorage.getItem("design") == null){
			document.getElementById("lbldesign").innerHTML = "Das Forschungsdesign ist noch nicht definiert.";
		}
		if(sessionStorage.getItem("researchgoal")){
			document.getElementById("lblgoal").innerHTML = sessionStorage.getItem("researchgoal");
		}
		if(sessionStorage.getItem("researchgoal") == "" || sessionStorage.getItem("researchgoal") == "undefined" || sessionStorage.getItem("researchgoal") == null){
			document.getElementById("lblgoal").innerHTML = "Die Forschungsfrage ist noch nicht definiert.";
		}
	 }

	function loadControllPara(){
		 if(sessionStorage.getItem("result")){
				document.getElementById("controllpage").innerHTML = sessionStorage.getItem("result");
		}
	}
		

	function saveInSession() {
		var data = document.getElementById("result").value
		sessionStorage.setItem("result", data);
	}
	
	function save(){
		var data = document.getElementById("controllpage").value
		sessionStorage.setItem("result", data);
		sessionStorage.setItem("isResultSet", true);
		alert("Das Speichern war erfolgreich");
	}
	