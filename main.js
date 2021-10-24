const toggle = $('#header-toggle'),
nav = $('#nav-bar'),
bodypd = $('#body-pd'),
headerpd = $('#header'),
lg = $('#logo')
exp_lg = $('#expanded_logo')
adm_lg = $('#adm_logo')
title = $('.title')
adm_lg_2 = $('#adm_logo_2')
code_input = $('.code_input')
containers = document.querySelectorAll('.container')
links = document.querySelectorAll('.nav_name')

toggle.click( ()=>{
	// Show navbar
	nav.toggleClass('show')
	// Add padding to body
	bodypd.toggleClass('body-pd')
	// Add padding to header
	headerpd.toggleClass('body-pd')
	// Enlarge
	containers.forEach((element) => { element.classList.remove('short')})
	// Show letters
	links.forEach((element) => {element.classList.remove('invisible_text')})

	// Change logo
	if (lg.css('display') != "none"){
		lg.css('display','none')
		exp_lg.css('display','block')
		title.css('display','block')
		adm_lg_2.css('display','none')
		code_input.css('display','block')
	} else{
		lg.css('display','block')
		exp_lg.css('display','none')
		title.css('display','none')
		adm_lg_2.css('display','block')
		code_input.css('display','none')
		$('#submenu2').css('display','none')
		$('#submenu3').css('display','none')
		// Shorten
		containers.forEach((element) => { element.classList.add('short')})
		// Hide Letters
		links.forEach((element) => {element.classList.add('invisible_text')})
	}
})

// To add more submenus, increase the loop, small error will be expected
for (let i = 2; i <= 3; i++) {
	$("#dropdown"+i).click(() => {
		if ($('#submenu'+i).css('display') === 'none'){
			$('#submenu'+i).css('display','inline')
		} else{
			$('#submenu'+i).css('display','none')
		}
	})
}