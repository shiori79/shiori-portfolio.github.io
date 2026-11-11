// ハンバーガー
let hamBtn = document.querySelector('.ham-btn');
let htmlElm = document.querySelector('html');
let menuBox = document.querySelector('.menu-box');
console.log(hamBtn,htmlElm);
hamBtn.addEventListener('click',function(){
    htmlElm.classList.toggle('ham-open');
});
menuBox.addEventListener('click',function(){
    htmlElm.classList.remove('ham-open');
});
let mainNav = document.querySelectorAll('.menu-box a');
console.log(mainNav);
for (i = 0; i < mainNav.length; i++) {
    let mainNavA = mainNav[i];
    mainNavA.addEventListener('click', function () {
        htmlElm.classList.remove('ham-open');
    });
}




// topボタン
let topBtn = document.querySelector('.top-btn');
window.addEventListener('scroll',function(){
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;
    let scrollTarget = document.querySelectorAll('.scroll-target');
    for(i = 0;i < scrollTarget.length;i++){
        let scrollTargetA = scrollTarget[i];
        let rectScroll = scrollTargetA.getBoundingClientRect().top;
        let scrollTop = scrollY + rectScroll;
        if(scrollY > scrollTop - windowHeight + windowHeight / 10){
            scrollTargetA.classList.add('active');
        }
    }


    if(scrollY > windowHeight){
        topBtn.classList.add('open-ham');
    }else {
        topBtn.classList.remove('open-ham');
    }
});