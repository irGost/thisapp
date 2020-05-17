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
var storage = window.localStorage;
function vars() {
	document.getElementById("vars").innerHTML = '<input type="button" value="Refresh" onclick="vars()" />';
	for (var i = 0; i < localStorage.length; i++) {
		document.getElementById("vars").innerHTML += '<br />'+i+': '+storage.key(i)+' : '+storage.getItem(storage.key(i));
	}
}
function addvar() {
	storage.setItem(document.getElementById("key").value, document.getElementById("val").value);
}
function delvar() {
	storage.removeItem(storage.key(document.getElementById("idtobedeleted").value));
}
function check() {
	var vall=storage.getItem(storage.key(document.getElementById("keytobechecked").value));
	if(vall==null){
		document.getElementById("isset").innerHTML = 'var not set';
	} else {
		document.getElementById("isset").innerHTML = vall;
	}
}