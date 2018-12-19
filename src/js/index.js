// mobile header menu toggle
const toggleMenu = document.querySelector('.toggle-menu').addEventListener("click", function() {
	document.querySelector('.main-menu').classList.toggle('active');
})

// Toggle footer menu on mobile
for (let link of document.querySelectorAll('.links-list li:first-child')) {
	link.addEventListener('click', function(){
		event.target.parentElement.classList.toggle('active');
	})
}

//Anchor links
const url = window.location.href.split('#')[1];
if (url !== undefined && document.querySelector('.' + url) ) {
	window.scrollTo({
		top: document.querySelector('.' + url).offsetTop,
		behavior: 'smooth',
	})
}

// Read more buttons
Array.from(document.querySelectorAll('.more')).map((bt)=>{
	bt.addEventListener('click', (e)=>{e.target.parentElement.classList.toggle('open')})
})

// copy buttons
Array.from(document.querySelectorAll('.copy-btn')).map((bt)=>{
	bt.addEventListener('click', (e)=>{
		e.preventDefault()
		copyText(bt.getAttribute('data-copy'))
		let el = document.createElement('span');
		el.innerHTML = 'Link copiado!';
		el.classList.add('txt-copied');
		document.body.appendChild(el);
		setTimeout(function(){
			let removeTip = document.querySelector('.txt-copied')
			removeTip.parentNode.removeChild(removeTip);
		}, 2000);
	})
})

function copyText (str){
	const el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

// TEMP fix vh unit for mobile
function fixVh (){
	let $elm = document.querySelector('.first-block')
	if ($elm) $elm.style.height = (window.innerHeight - 69) + 'px';
}
window.addEventListener('load', fixVh);
window.addEventListener('resize', fixVh);
