function showNavbar(toggleId, navId, bodyId, headerId, logo){
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId),
	bodypd = document.getElementById(bodyId),
	headerpd = document.getElementById(headerId),
	lg = document.getElementById(logo)
	exp_lg = document.getElementById('expanded_logo')

	// Validate that all variables exist
	if (toggle && nav && bodypd && headerpd && logo){
		toggle.addEventListener('click', ()=>{
			// show navbar
			nav.classList.toggle('show')
			// change icon
			toggle.classList.toggle('bx-x')
			// add padding to body
			bodypd.classList.toggle('body-pd')
			// add padding to header
			headerpd.classList.toggle('body-pd')
			// change logo
			if (lg.style.display != "none"){
				lg.style.display = "none"
				exp_lg.style.display = "block"
			} else{
				lg.style.display = "block"
				exp_lg.style.display = "none"
			}
		})
	}
}

showNavbar('header-toggle','nav-bar','body-pd','header', 'logo')

/*===== LINK ACTIVE =====*/
const linkColor = document.querySelectorAll('.nav_link')

function colorLink(){
	if(linkColor){
		linkColor.forEach(l => l.classList.remove('active'))
		this.classList.add('active')
	}
}
linkColor.forEach(l => l.addEventListener('click', colorLink))
