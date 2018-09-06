
// Colours for the website
var colors = ["#42f4a4","#41c1f4","#ff4271","#f2ca65"];
// words grabs all spans from the dom 
var words = document.getElementsByTagName("span");
// intros grabs the spans on home page
var intros = document.querySelectorAll('#home span');
// navspan grabs just nav items
var navSpan = document.querySelectorAll("#nav-items span");
// Grabs the portfolio text divs
document.querySelectorAll(".text");
// Function declaration that adds an event listener to a list of items
function addEventListenerList (list, event, fn) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

// calling addEventListenerList on words
addEventListenerList(words, "mouseenter", function(){
  var color = Math.floor(Math.random() * colors.length);
  this.style.color = colors[color];
  this.style.transition = "all 0.3s";
});
// calling addEventListenerList on navSpan
addEventListenerList(navSpan, "mouseenter", function(){
  var color = Math.floor(Math.random() * colors.length);
  this.style.color = colors[color];
  this.style.transition = "all 0.3s";
  this.className = "animated rubberBand";
});
// calling addEventListenerList on navSpan to remove rubberBand effect on leave
addEventListenerList(navSpan, "mouseleave", function(){
    this.className = this.className.replace("animated rubberBand", "");
});
// iterate through each intro adding animation and colour effects
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

// data for portfolio.
var portfolioItems = [
  {
    name: "Manila Finds",
    link: "http://manilafinds.com.au/",
    info: "Manila Finds is an online store that specializes in finding and selling unique items sourced from the Philippines. I built this website using storefront as the parent theme, while adding all of the neccesary styling and customization through the use of a child theme.",
  },
  {
    name: "Arcadian 3D",
    link: "http://arcadian3d.com/",
    info: "Arcadian 3D is an Australian start up based in the Gold Coast that has its focus in developing consumer friendly 3D printers.",
  },
  {
    name: "Wolfe Recycling",
    link: "#",
    info: "Coming Soon.",
  },
  {
    name: "Pool And Spa Repairs Adelaide",
    link: "http://spa-repairs.com.au/",
    info: "Operating out of Adelaide, South Australia. Pool And Spa Repairs Adelaide came to me asking for a website with blogging capabilities. I developed their theme from scratch using all of the mentioned tools and technologies, while also reading through the WordPress Codex.",
  },
  {
    name: "XenoClouds",
    link: "http://xenoclouds.com.au/",
    info: "XenoClouds is an australian Vape Juice company, they worked very closely with me, providing me with all of the images and layout designs they wanted.",

  },
  {
    name: "Black Diamond Electrical Services S.A.",
    link: "#",
    info: "More Information Coming Soon!",

  }
]
window.onload = function() {
  function getDescription(altvalue, theImage) {
    document.querySelector(".open-gallery-image").src = theImage;
    for (let i = 0; i < portfolioItems.length; i++) {
      if (portfolioItems[i].name === altvalue) {
        document.getElementById("item-name").innerHTML = portfolioItems[i].name;
        document.getElementById("description").innerHTML = portfolioItems[i].info;
        if (portfolioItems[i].link != "#") {
          document.getElementById("gallery-link").setAttribute('target', '_blank');
          document.getElementById("gallery-link").setAttribute('href', portfolioItems[i].link);
        } else {
          document.getElementById("gallery-link").style.display = "none";
        }
      }
    }
  }

  var projects = document.querySelectorAll(".project");
  addEventListenerList(projects, "click", function (e) {
    var theImage = this.getElementsByTagName("img").item(e).src;
    var altvalue = this.getElementsByTagName("img").item(e).alt;
    console.log(document.getElementById("description"));
    getDescription(altvalue, theImage)
    document.getElementById("open-gallery").style.display = "block";
    document.getElementById("open-gallery").className = "animated fadeIn";
  });
  document.getElementById("close-open-gallery").addEventListener("click", function(){
    document.getElementById("open-gallery").style.display = "none";
  });
// creating a function to generate the gallery card
//   // remove open gallery
//   (newDiv).addEventListener('click', function(e) {
//     if(e.path[0] === document.getElementById('open-gallery') || e.path[0] === document.getElementById('close')) {
//     newDiv.remove();
//     } 
//   });
 
// }



// // creating a function to generate the gallery card
// function createOpenGallery (mainphoto) {
//   // divs for gallery cards 
//   var clonephoto = mainphoto.cloneNode();
//   var newDiv = document.createElement("div");
//   var galleryCard = document.createElement("div");
//   var imageDiv = document.createElement("div");
//   var closeButton = document.createElement("a");
//   var description = document.createElement("div");
//   var itemInfo = document.createElement("div");
//   var itemTools = document.createElement("div");
//   // adding font awesome for close button
//   closeButton.innerHTML = 'x';
  
//   //Element id's
//   galleryCard.id = "galleryCard";
//   itemTools.id = "itemTools";
//   itemInfo.id = "itemInfo";
//   description.id = "description";
//   closeButton.id = "close";
 
//   newDiv.id = "open-gallery";
//   imageDiv.id = "open-gallery-image";
//   //appending divs together
//   description.appendChild(itemInfo);
//   description.appendChild(itemTools);
//   imageDiv.appendChild(clonephoto);
//   galleryCard.appendChild(imageDiv);
//   galleryCard.appendChild(description);
//   newDiv.appendChild(galleryCard);
//   imageDiv.appendChild(closeButton);
//   document.body.appendChild(newDiv);
//   // document.getElementById('close').onclick = document.getElementById('open-gallery').remove();
//   // document.getElementById('close').onclick = newDiv.remove();
//   // remove open gallery
//   (newDiv).addEventListener('click', function(e) {
//     if(e.path[0] === document.getElementById('open-gallery') || e.path[0] === document.getElementById('close')) {
//     newDiv.remove();
//     } 
//   });
 
// }


// function getDescription(altvalue) {
//   for (let i = 0; i < portfolioItems.length; i++) {
//     if (portfolioItems[i].name === altvalue) {
//       itemInfo.innerHTML = "<h4>" + portfolioItems[i].name + "</h4>" + portfolioItems[i].info;
//       itemTools.innerHTML = "<h4>Technologies</h4>" + portfolioItems[i].tools;
//       itemInfo.innerHTML += '<a class="rainbow" href="' + portfolioItems[i].link + '" target="_blank"><i class="link fal fa-external-link"></i></a>';
//     }
//   }
// }



// var projects = document.querySelectorAll(".project");
// addEventListenerList(projects, "click", function (e) {
//   var mainphoto = this.getElementsByTagName("img").item(e);
//   var altvalue = this.getElementsByTagName("img").item(e).alt;
//   createOpenGallery(mainphoto);
//   getDescription(altvalue);
//   document.querySelector("#open-gallery").style.display = "block";
//   document.querySelector("#open-gallery").className = "animated fadeIn";
// });

}
