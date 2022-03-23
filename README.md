## Favicon(파비콘, favorites icon)
웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.  
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면  
자동으로로딩하기 때문에 `<link />` 를 작성할 필요가 없습니다.  
`favicon.png` 파일을 사용하려면 다음과 같이 `<link />`를 작성하세요.  
```html
<link rel="shortcut icon" href="favicon.ico" /> 
<link rel="icon" href="./favicon.png" />
```
favicon.ico 64 x 64 (px) 또는 32 x 32 또는 16 x 16
favicon.png 500 x 500 (px)

## Reset.css
> 각 브라우저의 기본 스타일을 초기화 합니다.  
> [jsdelivr 이동](https://www.jsdelivr.com/package/npm/the-new-css-reset)
> ```html
> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
> ```

## 구글 폰트설정 
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet"> //나눔고딕
```
## 구글 material icon 설정
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> //main css보다 먼저설정
```

사용법
```html
<span class="material-icons">search</span>  //class이름에서 마지막 단어 지워주기
```
## script 태그의 defer 속성
`<script>` 태그의 defer 속성은 페이지가 모두 로드된 후에 해당 외부 스크립트가 실행됨을 명시합니다.
```html
<script defer src="js/main.js"></script>
```
## 오픈그래프(The Open Graph protocol)
웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.  
[더 많은 오픈그래프 속성보기](https://ogp.me/)  
```og:type: 페이지의 유형(E.g, website, video.movie)
og:site_name: 속한 사이트의 이름
og:title: 페이지의 이름(제목)
og:description: 페이지의 간단한 설명
og:image: 페이지의 대표 이미지 주소(URL)
og:url: 페이지 주소(URL)
```


## lodash
scroll이벤트가 계속 실행되면 사이트가 무거워 질 수 있으므로 이런 부분을 제어 할 수 있는 플러그인이 lodash를 설치하여 보자. https://cdnjs.com/libraries/lodash.js
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## gsap 애니메이션 제어 / scrollTop
자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
        integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## gsap으로 여러요소 순차적으로 faid-in

순차적으로 나올 요소에 `class="fade-in"`으로 설정해줍니다.
html
```html
<section class="main">
        <div class="inner">
            <div class="title">
                <class="fade-in" img src="" alt="">
            </div>
            <div class="fade-in"><img src="" alt=""></div>
            <div class="fade-in"><img src="" alt=""></div>
            <div class="fade-in"><img src="" alt=""></div>
            <a href="javascript:void(0)" class="fade-in">more</a>
        </div>
```
css 
```css
.main .fade-in{opacity: 0;}
```

## gsop문법 => gsap.to(요소, 지속시간초단위, 옵션)
```javascript
const fadeEl = document.querySelectorAll('.main .fade-in');
fadeEl.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * 0.5, //0., 1, 1.5,
        opacity : 1,
    })
});
```

## ScrollMagic
스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리
어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollToPlugin.min.js"
        integrity="sha512-agNfXmEo6F+qcj3WGryaRvl9X9wLMQORbTt5ACS9YVqzKDMzhRxY+xjgO45HCLm61OwHWR1Oblp4QSw/SGh9SA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
html
```html
<div class="wrapper scroll-spy">
  <div class="inner">
    <h2 class="back-to-position to-right delay-0">TEST</h2>
    <h4 class="back-to-position to-left delay-0>TEST</h4>
  </div>
</div>
<div class="wrapper scroll-spy">
  <div class="inner">
    <h2 class="back-to-position to-right delay-1>TEST</h2>
    <h4 class="back-to-position to-left delay-2>TEST</h4>
  </div>
</div>
<div class="wrapper scroll-spy">
  <div class="inner">
    <h2 class="back-to-position to-right delay-3>TEST</h2>
    <h4 class="back-to-position to-left delay-3>TEST</h4>
  </div>
</div> //class 이름에서 [ to-방향 , delay- ] 지우면 스크롤이 내려왔을때 제자리에서 opacity 조절만가능
```
css
```css
.back-to-position {
  opacity: 0;
  transition: 1s;
}
.back-to-position.to-right {
  transform: translateX(-150px);
}
.back-to-position.to-left {
  transform: translateX(150px);
}
.show .back-to-position {
  opacity: 1;
  transform: translateX(0);
}
// 시간차 등장 모션 제작 
.show .back-to-position.delay-0{transition-delay: 0s;}
.show .back-to-position.delay-1{transition-delay: 0.3s;}
.show .back-to-position.delay-2{transition-delay: 0.6s;}
.show .back-to-position.delay-3{transition-delay: 0.9s;}

```
javascript
```javascript
const spyEls = document.querySelectorAll('.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})
```

            


## Swiper slide
>`아래 링크를 연결해줍니다`
```css
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script> 
```

>html 
```html
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
```
## swiper 'vertical' option
```javascript
new Swiper('.notice-line .swiper', {
    direction: 'vertical',  //세로(수직)
    loop: true,
    autoplay : true
  
});
```
## swiper option
```javascript
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
```
