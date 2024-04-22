
document.querySelectorAll('.tabs-wrapper').forEach((e) => {
  let tabTabs = e.querySelectorAll('.tab .tablinks');
  let tabItems = e.querySelectorAll('.tabs-items .item');
  for(let i =0;i<tabTabs.length;i++) {
      tabTabs[0].click();
       tabTabs[i].onclick = () => {
        tabTabs.forEach((e)  => { e.classList.remove('on') }); 
        tabItems.forEach((e)  => { e.classList.remove('on') });
        tabTabs[i].classList.add('on');
        tabItems[i].classList.add('on');
     }
   }
 });
/*модальное окно */
function closeModal() {
  document.querySelector('.modal-container').style.opacity = '0';
  document.querySelector('.modal-container').classList.toggle("block");
  document.body.style.overflow = 'auto'
  document.querySelector('.bg').classList.toggle("block")
}
function showModal() {
  document.querySelector('.modal-container').style.opacity = '1';
  document.querySelector('.modal-container').classList.toggle("block");
//  document.body.style.overflow = 'hidden';
  document.querySelector('.bg').classList.toggle("block");
}
const modalOverlay = document.querySelector('.bg')
modalOverlay.addEventListener('click', closeModal)

/*частозадаваемые вопросы */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


/*слайдер вып.работы */
var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination:true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  speed: 1000,
  parallax: true,
  effect: "slide",
  mousewheelControl: 1
});


/*слайдер отзывы */
const swiper = new Swiper(".swiper", {
	slidesPerView:2.5,
  //loop:true,
  spaceBetween: 10,
 // centeredSlides: true,
  // Responsive breakpoints
 breakpoints: {
  320: {
    slidesPerView:1,
     spaceBetween: 40,
  },
		640: {
      slidesPerView:1.5,
			 spaceBetween: 40,
    },
  992: {
      slidesPerView: 2,
			//  spaceBetween: 40,
    },
 },
	// Navigation arrows
	 navigation: {
	 	nextEl: ".swiper-button-next",
	 	prevEl: ".swiper-button-prev"
 }

});



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

