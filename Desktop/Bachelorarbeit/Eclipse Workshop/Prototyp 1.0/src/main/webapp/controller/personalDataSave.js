
	
	document.getElementById("controllpers").innerHTML = sessionStorage.getItem("pers");
	document.getElementById("controllint").innerHTML = sessionStorage.getItem("interests");
	document.getElementById("controllexpect").innerHTML = sessionStorage.getItem("expect");
	document.getElementById("controllexp").innerHTML = sessionStorage.getItem("exp");
	document.getElementById("controllskills").innerHTML = sessionStorage.getItem("skills");
	document.getElementById("controlletc").innerHTML = sessionStorage.getItem("etc");

	function save() {
		
		var pers = document.getElementById("controllpers").value;
		var inter = document.getElementById("controllint").value;
	 	var expect = document.getElementById("controllexpect").value;
		var expir = document.getElementById("controllexp").value;
	 	var skills = document.getElementById("controllskills").value;
		var etc = document.getElementById("controlletc").value;
			
		sessionStorage.setItem("pers", pers);
		sessionStorage.setItem("interests", inter);
		sessionStorage.setItem("expect", expect);
		sessionStorage.setItem("exp", expir);
		sessionStorage.setItem("skills", skills);
		sessionStorage.setItem("etc", etc);
		sessionStorage.setItem("isPersonSet", true);
	}
	

	
