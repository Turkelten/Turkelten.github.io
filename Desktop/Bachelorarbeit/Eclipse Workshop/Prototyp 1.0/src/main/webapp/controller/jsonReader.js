
	window.addEventListener('load', function() {
	  var upload = document.getElementById('fileInput');
	  
	  // Make sure the DOM element exists
	  if (upload) 
	  {
	    upload.addEventListener('change', function() {
	      // Make sure a file was selected
	      if (upload.files.length > 0) 
	      {
	        var reader = new FileReader(); // File reader to read the file 
	        
	        // This event listener will happen when the reader has read the file
	        reader.addEventListener('load', function() {
	          var result = JSON.parse(reader.result); // Parse the result into an object 
	          console.log("JSON String erfolgreich gelesen:");
	          console.log(result);
				if(sessionStorage){
					sessionStorage.clear();
				}
	
			//Save Objects in the session
			if(result.isPersonSet == "true"){
				sessionStorage.setItem("isPersonSet", result.isPersonSet);
				sessionStorage.setItem("pers", result.personal);
				sessionStorage.setItem("etc", result.etc);
				sessionStorage.setItem("expect", result.expectations);
				sessionStorage.setItem("exp", result.experience);
				sessionStorage.setItem("interests", result.interests);
				sessionStorage.setItem("skills", result.skills);
			}
			if(result.isTopicSet == "true"){
				sessionStorage.setItem("topic", result.topic);
				sessionStorage.setItem("isTopicSet", result.isTopicSet);
			}
			if(result.isGoalSet == "true"){
				sessionStorage.setItem("researchgoal", result.researchgoal);
				sessionStorage.setItem("isGoalSet", result.isGoalSet);
			}
			if(result.isQuestionSet == "true"){
				sessionStorage.setItem("questions", result.questions);
				sessionStorage.setItem("isQuestionSet", result.isQuestionSet);
			}
			if(result.isProblemSet == "true"){
				sessionStorage.setItem("problem", result.problem);
				sessionStorage.setItem("isProblemSet", result.isProblemSet);
			}
			if(result.isResultSet == "true"){
				sessionStorage.setItem("result", result.result);
				sessionStorage.setItem("isResultSet", result.isResultSet);
			}
			if(result.isStrategieSet == "true"){
				sessionStorage.setItem("strategie", result.strategie);
				sessionStorage.setItem("isStrategieSet", result.isStrategieSet);
			}
			if( result.isStrengthSet == "true"){
				sessionStorage.setItem("strength", result.strength);
				sessionStorage.setItem("isStrengthSet", result.isStrengthSet);
			}
			if(result.isSupervisorSet == "true"){
				sessionStorage.setItem("supervisor", result.supervisor);
				sessionStorage.setItem("isSupervisorSet", result.isSupervisorSet);
			}
			if(result.isWeaknessSet == "true"){
				sessionStorage.setItem("weaknesses", result.weaknesses);
				sessionStorage.setItem("isWeaknessSet", result.isWeaknessSet);
			}
			if(result.isMethodSet == "true"){
				sessionStorage.setItem("methods", result.methods);
				sessionStorage.setItem("isMethodSet", result.isMethodSet);
			}
			if(result.isDesignSet == "true"){
				sessionStorage.setItem("design", result.design);
				sessionStorage.setItem("isDesignSet", result.isDesignSet);
			}
				
	        });
			alert("Der Upload war erfolgreich");
	        reader.readAsText(upload.files[0]); // Read the uploaded file
		
	      }
	    });
		
	  }
	});
