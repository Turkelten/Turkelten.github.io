	
	function init() {
		//Eigene Person check, setzen des bearbeitet Icons
		if(sessionStorage.getItem("isPersonSet") == "true"){
			document.getElementById("persInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("persInputCheck").style.visibility = "hidden";
		}
		
		//Betreuer
		if(sessionStorage.getItem("isSupervisorSet") == "true"){
			document.getElementById("supervisorInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("supervisorInputCheck").style.visibility = "hidden";
		}
		
		//Stärken
		if(sessionStorage.getItem("isStrengthSet") == "true"){
			document.getElementById("strengthInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("strengthInputCheck").style.visibility = "hidden";
		}
		
		//ForschungsThema
		if(sessionStorage.getItem("isTopicSet") == "true"){
			document.getElementById("topicInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("topicInputCheck").style.visibility = "hidden";
		}
		
		//Forschungsproblem
		if(sessionStorage.getItem("isProblemSet") == "true"){
			document.getElementById("problemInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("problemInputCheck").style.visibility = "hidden";
		}
		
		//Forschungsfrage
		if(sessionStorage.getItem("isQuestionSet") == "true"){
			document.getElementById("questionInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("questionInputCheck").style.visibility = "hidden";
		}
		
		//Forschungsziel
		if(sessionStorage.getItem("isGoalSet") == "true"){
			document.getElementById("goalInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("goalInputCheck").style.visibility = "hidden";
		}
		//Methoden und Techniken
		if(sessionStorage.getItem("isMethodSet") == "true"){
			document.getElementById("methodsInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("methodsInputCheck").style.visibility = "hidden";
		}
		//Forschungsergebnis
		if(sessionStorage.getItem("isResultSet") == "true"){
			document.getElementById("resultInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("resultInputCheck").style.visibility = "hidden";
		}
		//Schwächen
		if(sessionStorage.getItem("isWeaknessSet") == "true"){
			document.getElementById("weaknessInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("weaknessInputCheck").style.visibility = "hidden";
		}
		
	}
	
	function onPrintClick(){

		window.print();
	}