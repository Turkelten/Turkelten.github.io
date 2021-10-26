	if(sessionStorage.getItem("problem")){
			document.getElementById("lblproblem").innerHTML = sessionStorage.getItem("problem")
		}
	if(sessionStorage.getItem("questions")){
			document.getElementById("lblquestion").innerHTML = sessionStorage.getItem("questions")
		}
	
	
		function saveInSession() {
			var data = document.getElementById("design").value
			sessionStorage.setItem("design", data);
		}
		

	
	function save() {
		
		var pers = document.getElementById("controlldesign").value;			
		sessionStorage.setItem("design", pers);
		sessionStorage.setItem("isDesignSet", true);
		JSONconvert();
	}
