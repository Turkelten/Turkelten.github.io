	
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
		//Forschungsstrategie
		if(sessionStorage.getItem("isStrategieSet") == "true"){
			document.getElementById("strategieInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("strategieInputCheck").style.visibility = "hidden";
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
		//Design
		if(sessionStorage.getItem("isDesignSet") == "true"){
			document.getElementById("designInputCheck").style.visibility = "visible";
		}else{
			document.getElementById("designInputCheck").style.visibility = "hidden";
		}
	}
	
	//Auslesen der gespeicherten Daten mit Export und localem Download
	function onExportClick(){
		
		var pers = sessionStorage.getItem("pers");
		var interests = sessionStorage.getItem("interests");
		var expectation = sessionStorage.getItem("expect");
		var experience= sessionStorage.getItem("exp");
		var skills = sessionStorage.getItem("skills");
		var etc = sessionStorage.getItem("etc");
		var isPersonSet = sessionStorage.getItem("isPersonSet");
		var topic = sessionStorage.getItem("topic");
		var isTopicSet = sessionStorage.getItem("isTopicSet");
		var researchgoal = sessionStorage.getItem("researchgoal");
		var isGoalSet = sessionStorage.getItem("isGoalSet");
		var questions = sessionStorage.getItem("questions");
		var isQuestionSet = sessionStorage.getItem("isQuestionSet");
		var problem = sessionStorage.getItem("problem");
		var isProblemSet = sessionStorage.getItem("isProblemSet");
		var result = sessionStorage.getItem("result");
		var isResultSet = sessionStorage.getItem("isResultSet");
		var strategie = sessionStorage.getItem("strategie");
		var isStrategieSet = sessionStorage.getItem("isStrategieSet");
		var strength = sessionStorage.getItem("strength");
		var isStrengthSet = sessionStorage.getItem("isStrengthSet");
		var supervisor = sessionStorage.getItem("supervisor");
		var isSupervisorSet = sessionStorage.getItem("isSupervisorSet");
		var weaknesses = sessionStorage.getItem("weaknesses");	
		var isWeaknessSet = sessionStorage.getItem("isWeaknessSet");	
		var methods = sessionStorage.getItem("methods");	
		var isMethodSet = sessionStorage.getItem("isMethodSet");
		var design = sessionStorage.getItem("design");	
		var isDesignSet = sessionStorage.getItem("isDesignSet");
		
		var data = {
				personal: pers,
				interests: interests,
				expectations: expectation,
				experience: experience,
			 	skills: skills,
				etc: etc,
				isPersonSet: isPersonSet,
				topic: topic,
				isTopicSet: isTopicSet,
				researchgoal: researchgoal,
				isGoalSet: isGoalSet,
				questions: questions,
				isQuestionSet: isQuestionSet,
				problem: problem,
				isProblemSet: isProblemSet,
				result: result,
				isResultSet: isResultSet,
				strategie: strategie,
				isStrategieSet: isStrategieSet,
				strength: strength,
				isStrengthSet: isStrengthSet,
				supervisor: supervisor,
				isSupervisorSet: isSupervisorSet,
				weaknesses: weaknesses,
				isWeaknessSet: isWeaknessSet,
				design: design,
				isDesignSet: isDesignSet,
				methods: methods,
				isMethodSet: isMethodSet,
		    }
		//String in JSON umwandeln
		var jsonData = JSON.stringify(data);
		sessionStorage.setItem("data", jsonData);
		//Daten über download Funktion exportieren
		download(jsonData, 'canvasSave.txt', 'text/plain');
	}
	
	
	
	function download(content, fileName, contentType) {
	    var a = document.createElement("a");
	    var file = new Blob([content], {type: contentType});
	    a.href = URL.createObjectURL(file);
	    a.download = fileName;
	    a.click();
	}
	
	function onPrintClick(){
		/*var printContents = document.getElementById("").innerHTML;
     	var originalContents = document.body.innerHTML;
	
     	document.body.innerHTML = printContents; 
	
     	window.print();
	
     	document.body.innerHTML = originalContents;*/

		window.print();
	}

	