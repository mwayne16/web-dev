// features fade in
window.onload = function() {
  this.startTab();
};

window.addEventListener("scroll", () => {
  var features = document.querySelectorAll(".feature-item");
  y = window.scrollY;
  if (y >= 300) {
    this.removeEventListener;
    features.forEach(item => {
      item.classList.add("feature-scroll");
    });
  }
});

var videoBg = document.querySelectorAll(".video-popout-bg");

// Get the button that opens the modal
var toggle = document.querySelectorAll(".video-toggle");

// Get the <span> element that closes the modal
var close = document.querySelectorAll(".close");
// When the user clicks on the button, open the modal

var isToggled = () => {
  for (item of videoBg) {
    if ((item.style.display = "none")) {
      item.style.display = "block";
    }
  }
};

// When the user clicks on <span> (x), close the modal

var isClosed = () => {
  for (item of videoBg) {
    if ((item.style.display = "block")) {
      item.style.display = "none";
    }
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == this.videoBg) {
    this.videoBg.style.display = "none";
  }
};

function animateValue1(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 10 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.querySelector(".js-counter");
  var timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

function animateValue2(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.querySelector(
    ".counter-content .counter-item:nth-child(2) .js-counter"
  );
  var timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

function animateValue3(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.querySelector(
    ".counter-content .counter-item:nth-child(3) .js-counter"
  );
  var timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

function animateValue4(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.querySelector(
    ".counter-content .counter-item:nth-child(4) .js-counter"
  );
  var timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}
// counter fadein/counter
window.addEventListener("scroll", counterHandler, true);

function counterHandler() {
  var counter = document.querySelectorAll(".counter-item");
  y = window.scrollY;
  if (y >= 1400) {
    window.removeEventListener("scroll", counterHandler, true);
    counter.forEach(item => {
      item.classList.add("feature-scroll");
    });
    animateValue1("value", 15000, 22070, 3000);
    animateValue2("value", 0, 97, 3000);
    animateValue3("value", 202, 402, 3000);
    animateValue4("value", 211300, 212023, 3000);
  }
}
var sliderContent = document.querySelectorAll(".slider-content");
var sliderButtons = document.querySelectorAll(".testimonial-slider");

// Event listener
window.addEventListener("scroll", () => {
  if (y >= 1900) {
    sliderContent.forEach(slide => {
      slide.classList.add("sliderFade");
    });
  }
});

// What we Offer FadeIn
var offersWrapper = document.querySelector(".offers-wrapper");
var nodeList = document.querySelector(".offers-wrapper").children;
var offerArray = Array.from(nodeList);
window.addEventListener("scroll", () => {
  var y = window.scrollY;
  if (y >= 2500) {
    offersWrapper.classList.add("offers-children-animation");
    offerArray.forEach(item => {
      item.classList.add("offers-children-animation");
    });
  }
});

//Subscribe form FadeIn
var formWrapper = document.querySelector(".form-wrapper");
var subscribeWrapper = document.querySelector(".form-wrapper").children;
var subscribeArray = Array.from(subscribeWrapper);
window.addEventListener("scroll", () => {
  var y = window.scrollY;
  if (y >= 3500) {
    formWrapper.classList.add("offers-children-animation");
    subscribeArray.forEach(item => {
      item.classList.add("offers-children-animation");
    });
  }
});

//Testimonial Carousel
var carouselSlider = () => {
  sliderButtons.forEach(button => {
    button.addEventListener("click", e => {
      for (slide of sliderContent) {
        if (sliderButtons[0] == e.target) {
          slide.style.transform = "translateX(100%)";
        } else if (sliderButtons[1] == e.target) {
          slide.style.transform = "translateX(0%)";
        } else if (sliderButtons[2] == e.target) {
          slide.style.transform = "translateX(-100%)";
        }
      }
    });
  });
};
carouselSlider();
var style = (function() {
  // Create the <style> tag
  var style = document.createElement("style");

  // WebKit hack
  style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style;
})();

var mobileNavToggle = document.querySelectorAll(".nav-toggle i");
var mobileNav = document.querySelectorAll(".nav-offset");
var body = document.body;
var mobileToggle = () => {
  for (element of mobileNav) {
    element.classList.toggle("nav-onset");
  }
  for (icon of mobileNavToggle) {
    icon.classList.toggle("nav-istoggled");
    if (icon.classList.contains("nav-istoggled")) {
      style.sheet.insertRule("header::after{display:inherit;}", 0);
      icon.style.margin = "5px 0";
      body.classList.add("onset");
    } else {
      body.classList.remove("onset");
      style.sheet.deleteRule(0);
      icon = document.querySelectorAll(".nav-toggle:hover i");
    }
  }
};

var mobileHover = () => {};
// What we Offer Tabs
var startTab = () => {
  document.getElementById("defaultOpen").click();
};
var offerTabs = document.querySelectorAll(".offers-tabs");
var offersContent = document.querySelectorAll(".offer-tabs-content");
function navTabs(tabIdentifier, event) {
  var i;
  for (i = 0; i < offersContent.length; i++) {
    offersContent[i].style.display = "none";
  }
  for (i = 0; i < offerTabs.length; i++) {
    offerTabs[i].className = offerTabs[i].className.replace("active", "");
  }
  document.getElementById(tabIdentifier).style.display = "flex";
  event.currentTarget.className += "active";
}

navTabs();

//Array.prototype.indexOf.call(sliderButtons, document.body);
//let id = event.currentTarget.id;
//let btn = document.getElementById(id);
//let content = document.getElementById(id);
//
// buttons.style.border = "none";
