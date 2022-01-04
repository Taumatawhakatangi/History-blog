let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

//Polyfill for HTMLCollection.forEach
	if ('HTMLCollection' in window && !HTMLCollection.prototype.forEach) {
		console.info('polyfill HTMLCollection for IE11');
		HTMLCollection.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
			}
		};
	}

// Авторесайз для textarea

// const textArea = document.querySelectorAll('[data-autoresize]');

// textArea.forEach(item => {
//     let textAreaH = item.offsetHeight;
    
//     item.addEventListener('input', event => {
//         let $this = event.target;
        
//         $this.style.height = textAreaH + 'px';
//         $this.style.height = $this.scrollHeight + 'px';
//     });
// });



