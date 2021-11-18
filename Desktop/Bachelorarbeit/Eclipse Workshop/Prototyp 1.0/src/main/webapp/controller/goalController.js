function loadparameter(){
	 if(sessionStorage.getItem("researchgoal")){
			document.getElementById("researchgoal").innerHTML = sessionStorage.getItem("researchgoal");
	}
 }

function loadControllPara(){
	 if(sessionStorage.getItem("researchgoal")){
			document.getElementById("controllpage").innerHTML = sessionStorage.getItem("researchgoal");
	}
}


function saveInSession() {
	var data = document.getElementById("researchgoal").value
	sessionStorage.setItem("researchgoal", data);
}

	function save(){
		var data = document.getElementById("controllpage").value
		sessionStorage.setItem("researchgoal", data);
		sessionStorage.setItem("isGoalSet", true);
	}
	