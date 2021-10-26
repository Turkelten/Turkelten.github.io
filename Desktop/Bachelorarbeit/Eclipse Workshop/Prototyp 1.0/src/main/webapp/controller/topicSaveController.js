if(sessionStorage.getItem("topic")){
		document.getElementById("controlltopic").innerHTML = sessionStorage.getItem("topic")
	}
	
	
		function saveInSession() {
			var data = document.getElementById("topic").value
			sessionStorage.setItem("topic", data);
		}
		

	
	function save() {
		
		var pers = document.getElementById("controlltopic").value;			
		sessionStorage.setItem("topic", pers);
		sessionStorage.setItem("isTopicSet", true);
		JSONconvert();
	}
