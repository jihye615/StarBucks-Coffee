//------------------돋보기 버튼 제어---------------------
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

//포커스가 들어가면 .focused 추가.
searchInputEl.addEventListener("focus", function () {

    searchInputEl.setAttribute("placeholder", "통합검색");
});

//포커스가 나가면 .focused 삭제
searchInputEl.addEventListener("blur", function () {
    searchInputEl.setAttribute("placeholder", "");
});



//------------------main visual 순차적 등장---------------------
const fadeEl = document.querySelectorAll('.main .fade-in');
fadeEl.forEach(function(fadeEl, index){
    //gsop문법 => gsap.to(요소, 지속시간초단위, 옵션)
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * 0.5, //0., 1, 1.5,
        opacity : 1,
    })
});

//------------------공지사항 swiper slider---------------------
new Swiper('.notice-line .swiper', {
    direction: 'vertical', /*수직 슬라이드*/
    loop: true,
    autoplay : true
  
});


  //------------------promoiton swiper slider---------------------
  new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay : 5000
    },
    pagination :{
        el : ".promotion .swiper-pagination",
        clickable : true
    },
    navigation : {
        prevEl : ".promotion .swiper-prev",
        nextEl : ".promotion .swiper-next"
    },
    slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true //1번 슬라이드가 가운데 보이기
});

//promoiton toggle-btn--------
const promotionEl = document.querySelector('.promotion'); //슬라이드 영역 요소 검색
const promotionToggleBtn = document.querySelector('.toggle-promotion'); //슬라이드영역을 토글할 버튼 검색


//슬라이드 영역 숨김 여부에 관한 기본값 설정
let isHidePromotion = false;

//토글버튼을 클릭하면 
promotionToggleBtn.addEventListener('click', function(){
    //슬라이드 영역 숨기 여부를 반대값
    isHidePromotion = !isHidePromotion;

    if(isHidePromotion){
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});
//올해 년도 구하기--------
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

//Masgic Scroll------------------------
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
        triggerElement: spyEl,
        triggerHook: 0.8,
     })   
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
