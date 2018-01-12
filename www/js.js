function HReq() {
	var xmlhttp = new XMLHttpRequest();
	document.getElementById("time").innerHTML = '';
	xmlhttp.onreadystatechange = function() {
			document.getElementById("time").innerHTML += 'ready state:'+this.readyState+'<br>';
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("time").innerHTML += 'status: '+this.status+'<br />';
			document.getElementById("time").innerHTML += 'content: '+this.responseText+'<br />';
		}
	};
	xmlhttp.open("GET", document.getElementById("add").value, true);
	xmlhttp.send();
}