// color changer for text spans
// var colors = ["#00d4ff","#eeff00","#ff006a","#ff9000","#d400ff","#00ff50","#6e00ff","#12a85d","#acc479","#00ffb2","#832aba","#b2294d"];
var colors = ["#42f4a4","#41c1f4","#ff4271","#f2ca65"];

var words = document.getElementsByTagName("span");
var intros = document.querySelectorAll('#home span');
var navSpan = document.querySelectorAll("#nav-items span");
document.querySelectorAll(".text");
function addEventListenerList (list, event, fn) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener(event, fn, false);
  }
}


addEventListenerList(words, "mouseenter", function(){
  var color = Math.floor(Math.random() * colors.length);
  this.style.color = colors[color];
  this.style.transition = "all 0.3s";
  // this.addEventListener("mouseleave", function() {
  //   this.className = this.className.replace("animated rubberBand", "");
  // });
});
// addEventListenerList(words, "mouseleave", function(){
//     this.className = this.className.replace("animated rubberBand", "");
// });
addEventListenerList(navSpan, "mouseenter", function(){
  var color = Math.floor(Math.random() * colors.length);
  this.style.color = colors[color];
  this.style.transition = "all 0.3s";
  this.className = "animated rubberBand";
});
addEventListenerList(navSpan, "mouseleave", function(){
    this.className = this.className.replace("animated rubberBand", "");
});

var index = 0;

function myLoop() {
  var color = Math.floor(Math.random() * colors.length);
  setTimeout(function () {
    intros[index].className = "animated bounce";
    intros[index].style.display = "inline-block";
    intros[index].style.color = colors[color];
    intros[index].style.transition = "all .4s";
   
    index++;
    if (index < intros.length) {
      myLoop();
    }
  },30);
}



myLoop();






// lightbox creation

var portfolioItems = [
  {
    name: "Manila Finds",
    tools: "<ul><li>HTML5</li><li>CSS3</li><li>PHP</li><li>JavaScript</li><li>jQuery</li><li>WordPress</li><li>WooCommerce</li></ul>",
    link: "http://manilafinds.com.au/",
    info: "Manila Finds is an online store that specializes in finding and selling unique items sourced from the Philippines. I built this website using storefront as the parent theme, while adding all of the neccesary styling and customization through the use of a child theme.<br><br><i>-Custom WordPress Child Theme and Plugin Installations, Responsive Web Design. </i>",
  },
  {
    name: "Arcadian 3D",
    tools: "<ul><li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>jQuery</li><li>MailChimp</li></ul>",
    link: "http://arcadian3d.com/",
    info: "Arcadian 3D is an Australian start up based in the Gold Coast that has its focus in developing consumer friendly 3D printers.<br><br><i>-Static Website created from scratch, using mailchimp and formspring to power contact form & mailing list </i>",
  },
  {
    name: "Wolfe Recycling",
    tools: "<ul><li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>jQuery</li><li>BootStrap</li>",
    link: "#",
    info: "Coming Soon.",
  },
  {
    name: "Pool And Spa Repairs Adelaide",
    tools: "<ul><li>HTML5</li><li>CSS3</li><li>PHP</li><li>JavaScript</li><li>jQuery</li><li>WordPress</li></ul>",
    link: "http://spa-repairs.com.au/",
    info: "Operating out of Adelaide, South Australia. Pool And Spa Repairs Adelaide came to me asking for a website with blogging capabilities. I developed their theme from scratch using all of the mentioned tools and technologies, while also reading through the WordPress Codex. <br><br><i>-Custom WordPress Theme and Plugin Installations, Responsive Web Design. </i>",
  },
  {
    name: "XenoClouds",
    tools: "<ul><li>HTML5</li><li>CSS3</li><li>PHP</li><li>JavaScript</li><li>jQuery</li><li>WordPress</li><li>WooCommerce</li></ul>",
    link: "http://xenoclouds.com.au/",
    info: "XenoClouds is an australian Vape Juice company, they worked very closely with me, providing me with all of the images and layout designs they wanted. <br><br><i>-Custom WordPress Child Theme and Plugin Installations and Setup, Responsive Web Design. </i>",
  },
  {
    name: "Black Diamond Electrical Services S.A.",
    tools: "<ul><li>HTML5</li><li>CSS3</li><li>PHP</li><li>JavaScript</li><li>WordPress</li><li>Genesis Framework</li></ul>",
    link: "#",
    info: "More Information Coming Soon!<br><br><i>-Custom WordPress Child Theme and Plugin Installations and Setup, Responsive Web Design.</i>",
}
]

function createOpenGallery (mainphoto) {
  var clonephoto = mainphoto.cloneNode();
  var newDiv = document.createElement("div");
  var galleryCard = document.createElement("div");
  var imageDiv = document.createElement("div");
  var button = document.createElement("a");
  var description = document.createElement("div");
  var itemInfo = document.createElement("div");
  var itemTools = document.createElement("div");
  // adding content to elements
  
  button.innerHTML = '<i class="fal fa-window-close"></i>';
  
  //Element id's
  galleryCard.id = "galleryCard";
  itemTools.id = "itemTools";
  itemInfo.id = "itemInfo";
  description.id = "description";
  button.id = "close";
 
  newDiv.id = "open-gallery";
  imageDiv.id = "open-gallery-image";
  //appending divs together
  description.appendChild(itemInfo);
  description.appendChild(itemTools);
  imageDiv.appendChild(clonephoto);
  galleryCard.appendChild(imageDiv);
  galleryCard.appendChild(description);
  newDiv.appendChild(galleryCard);
  imageDiv.appendChild(button);
  document.body.appendChild(newDiv);
  document.getElementById('close').setAttribute("href", "#portfolio");
  //Delete new element
  (newDiv).addEventListener("click", function(e) {
    if(e.path[0] === document.getElementById('open-gallery') || e.path[0] === document.getElementById('close')) {
    newDiv.remove();
  } return
  });
}

function getDescription(altvalue) {
  for (let i = 0; i < portfolioItems.length; i++) {
    if (portfolioItems[i].name === altvalue) {
      itemInfo.innerHTML = "<h4>" + portfolioItems[i].name + "</h4>" + portfolioItems[i].info;
      itemTools.innerHTML = "<h4>Technologies</h4>" + portfolioItems[i].tools;
      itemInfo.innerHTML += '<a class="rainbow" href="' + portfolioItems[i].link + '" target="_blank"><i class="link fal fa-external-link"></i></a>';
    }
  }
}



var projects = document.querySelectorAll(".project");
addEventListenerList(projects, "click", function (e) {
  var mainphoto = this.getElementsByTagName("img").item(e);
  var altvalue = this.getElementsByTagName("img").item(e).alt;
  createOpenGallery(mainphoto);
  getDescription(altvalue);
  document.querySelector("#open-gallery").style.display = "block";
  document.querySelector("#open-gallery").className = "animated fadeIn";
});

