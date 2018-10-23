// ON SCROLL
window.addEventListener('scroll',function(){
  stickyNavbar();
  trackScroll();
});

// Dark Mode
let darkcheckbtn = document.querySelector('#darkCheck');
let changetheme = document.querySelector(':root');
let localvalue = JSON.parse(localStorage.getItem('dark-theme-enabled'));
darkcheckbtn.addEventListener('click',function(){
    // Set Body Class
    let darkthemeEnabled = document.body.classList.toggle('dark-theme');
    // Set Local Storage
    localStorage.setItem('dark-theme-enabled', darkthemeEnabled);
    changetheme.style.setProperty('--theme-color','#222222');
    changetheme.style.setProperty('--text','#fff');
});
if(localvalue){
    document.body.classList.toggle('dark-theme');
    changetheme.style.setProperty('--theme-color','#222222');
    changetheme.style.setProperty('--text','#fff');
}

// Stick Navbar
let nav = document.querySelector('.navbar-custom');
let navoffset = nav.offsetTop;
function stickyNavbar(){
    if(window.scrollY > navoffset){
        document.body.classList.add('fixed-navbar');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    }else{
        document.body.classList.remove('fixed-navbar');
        document.body.style.paddingTop = 0 + 'px';
    }
}

// Back to top
let goTopBtn = document.querySelector('.back_to_top');
function trackScroll(){
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if(scrolled>coords){
    goTopBtn.classList.add('backtoptop-show');
  }else{
    goTopBtn.classList.remove('backtoptop-show');
  }
}
function backToTop(){
  console.log('clicked');
  if(window.pageYOffset > 0){
    window.scrollBy(0,-80);
    setTimeout(backToTop,0);
  }
}
goTopBtn.addEventListener('click', backToTop);

// Tabs

$(document).ready(function(){
  function onTabClick(event) {
    let activeTabs = document.querySelectorAll('.active');
    activeTabs.forEach(function(tab) {
      tab.className = tab.className.replace('active', '');
    });
    // activate new tab and panel
    event.target.parentElement.className += ' active';
    document.getElementById(event.target.getAttribute('data-target').split('#')[1]).className += ' active';
  }
  const element = document.getElementById('nav-tab');
  element.addEventListener('click', onTabClick, false);
});
