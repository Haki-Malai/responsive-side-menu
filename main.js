function showNavbar(toggleId, navId, bodyId, headerId, logo){
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId),
	bodypd = document.getElementById(bodyId),
	headerpd = document.getElementById(headerId),
	lg = document.getElementById(logo)
	exp_lg = document.getElementById('expanded_logo')
	adm_lg = document.getElementById('adm_logo')

//	$('#submenu2').css('top', $('#dropdown2').offset().top + $('#submenu2').height())
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
				//adm_lg.style.display = "none"
				$('.title').css('display','block')
				$('#adm_logo_2').css('display','none')
				$('.code_input').css('display','block')
			} else{
				lg.style.display = "block"
				exp_lg.style.display = "none"
				//adm_lg.style.display = "block"
				$('.title').css('display','none')
				$('#adm_logo_2').css('display','block')
				$('.code_input').css('display','none')
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


	//$('#submenu2').css('top', $('#dropdown2').offset().top + $('#submenu2').height()*2)
	//$('#submenu3').css('top', $('#dropdown3').offset().top + $('#submenu3').height()*2)