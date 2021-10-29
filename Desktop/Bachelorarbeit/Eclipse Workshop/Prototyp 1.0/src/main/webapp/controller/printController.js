	
	function init() {
		//Eigene Person check, setzen des bearbeitet Icons
		if(sessionStorage.getItem("isPersonSet") == "true"){
			document.getElementById("interests").innerHTML   = sessionStorage.getItem("interests");
			document.getElementById("expectation").innerHTML   = sessionStorage.getItem("expect");
			document.getElementById("experience").innerHTML  = sessionStorage.getItem("exp");
			document.getElementById("skills").innerHTML   = sessionStorage.getItem("skills");
			document.getElementById("etc").innerHTML   = sessionStorage.getItem("etc");
		}
		
		//Betreuer
		if(sessionStorage.getItem("isSupervisorSet") == "true"){
			document.getElementById("supervisor").innerHTML   = sessionStorage.getItem("supervisor");
		}
		
		//Stärken
		if(sessionStorage.getItem("isStrengthSet") == "true"){
			document.getElementById("strength").innerHTML   = sessionStorage.getItem("strength");	
		}
		
		//ForschungsThema
		if(sessionStorage.getItem("isTopicSet") == "true"){
			document.getElementById("topic").innerHTML   = sessionStorage.getItem("topic");
		}
		
		//Forschungsproblem
		if(sessionStorage.getItem("isProblemSet") == "true"){
			document.getElementById("problem").innerHTML   = sessionStorage.getItem("problem");
		}
		
		//Forschungsfrage
		if(sessionStorage.getItem("isQuestionSet") == "true"){
			document.getElementById("questions").innerHTML   = sessionStorage.getItem("questions");
		}
		
		//Forschungsziel
		if(sessionStorage.getItem("isGoalSet") == "true"){
			document.getElementById("researchgoal").innerHTML   = sessionStorage.getItem("researchgoal");
		}
		//Forschungsstrategie
		if(sessionStorage.getItem("isStrategieSet") == "true"){
			document.getElementById("strategie").innerHTML   = sessionStorage.getItem("strategie");
		}
		//Methoden und Techniken
		if(sessionStorage.getItem("isMethodSet") == "true"){
			document.getElementById("method").innerHTML   = sessionStorage.getItem("method");
		}
		//Forschungsergebnis
		if(sessionStorage.getItem("isResultSet") == "true"){
			document.getElementById("result").innerHTML   = sessionStorage.getItem("result");
		}
		//Schwächen
		if(sessionStorage.getItem("isWeaknessSet") == "true"){
			document.getElementById("weaknesses").innerHTML   = sessionStorage.getItem("weaknesses");
		}
		//Design
		if(sessionStorage.getItem("isDesignSet") == "true"){
			document.getElementById("design").innerHTML   = sessionStorage.getItem("design");
		}
		
	}
	
	function onPrintClick(){
		var printContents = document.getElementById("printContent").innerHTML;
     	var originalContents = document.body.innerHTML;
	
     	document.body.innerHTML = printContents; 
	
     	window.print();
	
     	document.body.innerHTML = originalContents;
	}