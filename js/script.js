// const menuOpen = document.querySelector('.header__button-burger');
// const menuClose = document.querySelector('.menu-mobile__button');
// const menu = document.querySelector('.menu');

// function menuToogle (){
//     menu.classList.toggle('menu--active');
// }

// menuOpen.addEventListener('click', menuToogle);
// menuClose.addEventListener('click', menuToogle)

let swiper = null;

function catalogSliderInit () {
    if (!swiper) {
        swiper = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 1.10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard:{
                enabled: true,
            },
            
            breakpoints:{
                350: {
                    slidesPerView: 1.35,
                    spaceBetween: 17,
                },
                400: {
                    slidesPerView: 1.55,
                    spaceBetween: 17,
                },
                450: {
                    slidesPerView: 1.75,
                    spaceBetween: 17,
                },
                550: {
                    slidesPerView: 2,
                    spaceBetween: 17,
                },
            }
            });
    }
  }
function catalogSliderDestroy () {
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
}

catalogSliderInit ();

window.addEventListener('resize', function(){
    let widthClient = window.innerWidth;

    if (widthClient >= 767){
        catalogSliderDestroy();
    }
});


const button = document.querySelector('.button-unwrap');
const fixBrandsBlock = document.querySelector('.fix__desc');
const buttonText = button.querySelector('.button-unwrap__text');
const buttonImg = button.querySelector('.button-unwrap__arrow');

function hideShowBrandsBlock(classHide, classArrowHide, textHide, textShow){
    fixBrandsBlock.classList.add(classHide);
    
    function showHide(){
        fixBrandsBlock.classList.toggle(classHide);
        buttonImg.classList.toggle(classArrowHide);
        
        if (!fixBrandsBlock.classList.contains(classHide)){
            buttonText.innerText = textHide;
        } else {
            buttonText.innerText = textShow;
        }   
    }  

    return showHide;
}


button.addEventListener('click', hideShowBrandsBlock('fix__desc--hidden','button-unwrap__arrow--hide','Скрыть','Показать все'));





