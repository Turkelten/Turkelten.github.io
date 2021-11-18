	function loadparameter(){
		 if(sessionStorage.getItem("result")){
			document.getElementById("result").innerHTML = sessionStorage.getItem("result")
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
	}
	