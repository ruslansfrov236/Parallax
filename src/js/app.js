

const hamburger = document.querySelector('.hamburger');
const scrollButton = document.querySelector('.scroll');
const sidenav = document.querySelector('.sidenav');
const navbar = document.querySelector('.navbar');
const searchDialog = document.querySelector('.search-dialog');
const navSearch = document.querySelector('#nav-search');
const content = document.getElementById('content')
const card = document.querySelector('card');


document.addEventListener('DOMContentLoaded', () => {

  hamburger.addEventListener('click', responsiveDesign);


  scrollToTop();

  showTab();
});


function responsiveDesign() {
  const width = window.innerWidth;
  const active = 'active';

  if (width > 920) {
    hamburger.classList.toggle(active);
    sidenav.classList.toggle(active);
    hamburger.classList.toggle('toggle');
  } else if (width <= 920) {
    sidenav.style.display = "none";
    hamburger.classList.toggle(active);
    navbar.classList.toggle(active);
    hamburger.classList.toggle('toggle');
  }
}

function scrollToTop() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || window.scrollTop;

    if (scrollTop > 20) {
      scrollButton.classList.add('activeScroll');
    } else {
      scrollButton.classList.remove('activeScroll');
    }
  });

  scrollButton.addEventListener('click', () => {
    const scrollToTopDuration = 500;
    const scrollStep = -window.scrollY / (scrollToTopDuration / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  });
}

function searchDialogs() {
  if (searchDialog.style.display === 'none') {
    searchDialog.style.display = "grid"
  } else {
    searchDialog.style.display = "none"
  }
}







function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();





