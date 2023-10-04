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
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1.15,
            breakpoints:{
                350: {
                    slidesPerView: 1.40,
                    spaceBetween: 17,
                },
                400: {
                    slidesPerView: 1.6,
                    spaceBetween: 17,
                },
                450: {
                    slidesPerView: 1.8,
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

window.addEventListener('resize', function(){
    let widthClient = window.innerWidth;
    if (widthClient <= 500){
        catalogSliderInit ();
    } else {
        catalogSliderDestroy();
    }
});

let button = document.querySelector('.button-unwrap');
const fixBrandsBlock = document.querySelector('.fix__desc');
const buttonContentHide =`
<img src="./icons/icon.svg" class="button-unwrap__arrow button-unwrap__arrow--hide" alt="Arrow open">
Скрыть`;
const buttonContentShow =`
<img src="./icons/icon.svg" class="button-unwrap__arrow" alt="Arrow open">
Показать все`;



function hideShowBrandsBlock(classHide){
    fixBrandsBlock.classList.add(classHide);

    function showHide(){
        if (fixBrandsBlock.classList.contains(classHide)){
            fixBrandsBlock.classList.remove(classHide);
            button.innerHTML=buttonContentHide;
        }else {
            fixBrandsBlock.classList.add(classHide);
            button.innerHTML=buttonContentShow;
        }
    }
    return showHide;
}


button.addEventListener('click', hideShowBrandsBlock('fix__desc--hidden'));





