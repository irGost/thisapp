function HReq() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
			document.getElementById("time").innerHTML += 'ready state:'+this.readyState+'<br>';
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("time").innerHTML += 'status: '+this.status;
		}
	};
	xmlhttp.open("GET", "https://gost.ir/time.php", true);
	xmlhttp.send();
}