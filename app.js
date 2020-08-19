// Colours for the website
const colors = ['#42f4a4', '#41c1f4', '#ff4271', '#f2ca65'];

// words grabs all spans from the dom
const words = document.getElementsByTagName('span');

// intros grabs the spans on home page
const intros = document.querySelectorAll('#welcome-section span');

// navspan grabs just nav items
const navSpan = document.querySelectorAll('#nav-items span');

// Grabs the portfolio text divs
document.querySelectorAll('.text');

// Function declaration that adds an event listener to a list of items
function addEventListenerList(list, event, fn) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

// Function that adds a random colour to element
function colorChanger() {
  var color = Math.floor(Math.random() * colors.length);
  this.style.color = colors[color];
  this.style.transition = 'all 0.3s';
}

// calling addEventListenerList on words
addEventListenerList(words, 'mouseenter', colorChanger);
addEventListenerList(words, 'click', colorChanger);
// calling addEventListenerList on navSpan
addEventListenerList(navSpan, 'mouseenter', colorChanger);
// calling addEventListenerList on navSpan to remove rubberBand effect on leave
addEventListenerList(navSpan, 'mouseleave', function () {
  this.className = this.className.replace('animated rubberBand', '');
});
// iterate through each intro adding animation and colour effects
let index = 0;
function myLoop() {
  var color = Math.floor(Math.random() * colors.length);
  setTimeout(function () {
    intros[index].className = 'animated bounce';
    intros[index].style.display = 'inline-block';
    intros[index].style.color = colors[color];
    intros[index].style.transition = 'all .4s';

    index++;
    if (index < intros.length) {
      myLoop();
    }
  }, 30);
}
myLoop();

// data for portfolio.
window.onload = function () {
  const portfolioItems = [
    {
      name: 'Manila Finds',
      link: 'http://manilafinds.com.au/',
      info:
        'Manila Finds is an online store that specializes in finding and selling unique items sourced from the Philippines. I built this website using storefront as the parent theme, while adding all of the neccesary styling and customization through the use of a child theme.',
    },
    {
      name: 'Arcadian 3D',
      link: 'http://arcadian3d.com/',
      info:
        'Arcadian 3D is an Australian start up based in the Gold Coast that has its focus in developing consumer friendly 3D printers.',
    },
    {
      name: 'Wolfe Recycling',
      link: '#',
      info: 'Coming Soon.',
    },
    {
      name: 'Pool And Spa Repairs Adelaide',
      link: 'https://spa-repairs.com.au/',
      info:
        'Operating out of Adelaide, South Australia. Pool And Spa Repairs Adelaide came to me asking for a website with blogging capabilities. I developed their theme from scratch.',
    },
    {
      name: 'XenoClouds',
      link: 'http://xenoclouds.com.au/',
      info:
        'XenoClouds is an australian Vape Juice company, they worked very closely with me, providing me with all of the images and layout designs they wanted.',
    },
    {
      name: 'Black Diamond Electrical Services S.A.',
      link: 'https://blackdiamondes.com',
      info:
        'Black Diamond Electrical Services S.A. is a South Australian electrician business that takes their customers needs above all else. Providing clients with the best service at a great price. I developed their website with their business model in mind, using the genesis framework I was able to provide them with an excellent website.',
    },
  ];

  function getDescription(altvalue, theImage) {
    document.querySelector('.open-gallery-image').src = theImage;
    for (let i = 0; i < portfolioItems.length; i++) {
      if (portfolioItems[i].name === altvalue) {
        document.getElementById('item-name').innerHTML = portfolioItems[i].name;
        document.getElementById('description').innerHTML =
          portfolioItems[i].info;
        if (portfolioItems[i].link !== '#') {
          document.getElementById('gallery-link').style.display = 'block';
          document
            .getElementById('gallery-link')
            .setAttribute('target', '_blank');
          document
            .getElementById('gallery-link')
            .setAttribute('href', portfolioItems[i].link);
        } else {
          document.getElementById('gallery-link').style.display = 'none';
        }
      }
    }
  }

  const projects = document.querySelectorAll('.project-tile');
  addEventListenerList(projects, 'click', function (e) {
    const theImage = this.getElementsByTagName('img').item(e).src;
    const altvalue = this.getElementsByTagName('img').item(e).alt;
    getDescription(altvalue, theImage);
    document.getElementById('open-gallery').style.display = 'block';
    document.getElementById('open-gallery').className = 'animated fadeIn';
  });
  document
    .getElementById('close-open-gallery')
    .addEventListener('click', function () {
      document.getElementById('open-gallery').style.display = 'none';
    });
};
