var breadcrumb = '';
var footer = '<i class="fas fa-user-md"></i> VetMate';
var navbar = '<ul class="navbar-nav mr-auto"><li class="nav-item"><a class="nav-link" href="index.html">Home</a></li><li class="nav-item"><a class="nav-link" href="about.html">About me</a></li><li class="nav-item"><a class="nav-link" href="feedback.html">Pricing</a></li><li class="nav-item"><a class="nav-link" href="register.html">Registeration</a></li></ul>'
if (typeof page !== 'undefined') {
    if(page === 'index'){
		breadcrumb='';
	}
    if(page === 'about'){
		breadcrumb='About me';
	}
    if(page === 'register'){
		breadcrumb='Registeration';
	}
}