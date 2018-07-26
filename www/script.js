function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    navigator.app.exitApp()
}


if(breadcrumb==='') document.querySelector(".breadcrumb").style.backgroundColor='white';
else document.querySelector(".breadcrumb").innerHTML=breadcrumb;
if(navbar==='') document.querySelector(".navbar-toggler").style.display='none';
else{
	document.querySelector(".breadcrumb").innerHTML=breadcrumb;
	document.querySelector("#navbarSupportedContent").innerHTML=navbar;
}
document.querySelector("#footercontent").innerHTML=footer;