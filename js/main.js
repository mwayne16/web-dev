// features fade in
if (document.getElementById("defaultOpen") != null)
  window.onload = function() {
    this.startTab();
  };

(function featureItemAnim() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".feature-item");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("feature-scroll");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

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
  if (document.querySelectorAll(".counter-item").length > 0) {
    var counter = document.querySelectorAll(".counter-item");
    y = window.scrollY;
    w = window.innerWidth;
    counter.forEach(item => {
      if (w > 990 && y >= 1400) {
        window.removeEventListener("scroll", counterHandler, true);
        item.classList.add("feature-scroll");
        animateValue1("value", 15000, 22070, 3000);
        animateValue2("value", 0, 97, 3000);
        animateValue3("value", 202, 402, 3000);
        animateValue4("value", 211300, 212023, 3000);
      } else if (w < 990 && w > 770 && y >= 2100) {
        window.removeEventListener("scroll", counterHandler, true);
        item.classList.add("feature-scroll");
        animateValue1("value", 15000, 22070, 3000);
        animateValue2("value", 0, 97, 3000);
        animateValue3("value", 202, 402, 3000);
        animateValue4("value", 211300, 212023, 3000);
      } else if (w < 770 && y >= 2800) {
        window.removeEventListener("scroll", counterHandler, true);
        item.classList.add("feature-scroll");
        animateValue1("value", 15000, 22070, 3000);
        animateValue2("value", 0, 97, 3000);
        animateValue3("value", 202, 402, 3000);
        animateValue4("value", 211300, 212023, 3000);
      }
    });
  }
}
var sliderContent = document.querySelectorAll(".slider-content");
var sliderButtons = document.querySelectorAll(".testimonial-slider");

// Event listener
if (document.querySelectorAll(".slider-content") != null) {
  window.addEventListener("scroll", () => {
    w = window.innerWidth;
    y = window.scrollY;
    sliderContent.forEach(slide => {
      if (w > 990 && y >= 1900) {
        slide.classList.add("sliderFade");
      } else if (w < 990 && w > 770 && y >= 2900) {
        slide.classList.add("sliderFade");
      } else if (w < 770 && y >= 4000) {
        slide.classList.add("sliderFade");
      }
    });
  });
}
// What we Offer FadeIn
if (document.querySelector(".offers-wrapper") != null) {
  var offersWrapper = document.querySelector(".offers-wrapper");
  var nodeList = document.querySelector(".offers-wrapper").children;
  var offerArray = Array.from(nodeList);

  (function offersAnimation() {
    var elements;
    var windowHeight;

    function init() {
      elements = offerArray;
      windowHeight = window.innerHeight;
    }

    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add("offers-children-animation");
          offersWrapper.classList.add("offers-children-animation");
        }
      }
    }

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);

    init();
    checkPosition();
  })();
}
//Subscribe form FadeIn
// offersWrapper.classList.add("offers-children-animation");

//item.classList.add("offers-children-animation");
var formWrapper = document.querySelector(".form-wrapper");
var subscribeWrapper = document.querySelector(".form-wrapper").children;
var subscribeArray = Array.from(subscribeWrapper);

(function subcribeAnimation() {
  var elements;
  var windowHeight;

  function init() {
    elements = subscribeWrapper;
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("offers-children-animation");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

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

// What we Offer Tabs
var startTab = () => {
  document.getElementById("defaultOpen").click();
};
var offerTabs = document.querySelectorAll(".offers-tabs");
var offersContent = document.querySelectorAll(".offer-tabs-content");
function navTabs(id) {
  var i;
  for (i = 0; i < offersContent.length; i++) {
    contentAttr = offersContent[i].getAttribute("data-tab");
    offersContent[i].style.display = "none";
  }
  for (i = 0; i < offerTabs.length; i++) {
    offerTabs[i].getAttribute("data-tab");
    offerTabs[i].className = offerTabs[i].className.replace("active", "");
  }
  document.querySelector(id).style.display = "flex";
  event.currentTarget.className += "active";
}

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
    }
  }
};

// About Us Section

// WCU Section Fade

(function featureAnimation() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".feature-copy");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.remove("hidden");
        element.classList.add("featureAnimation");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Staff Section
if (document.querySelectorAll(".staff-container") !== null) {
  window.addEventListener("scroll", staffAnimtaion);

  function staffAnimtaion() {
    var staffRow = document.querySelectorAll(".staff-row");
    var row1 = Array.from(staffRow[0].children);
    var row2 = Array.from(staffRow[1].children);
    y = window.scrollY;
    row1.forEach(item => {
      if (y >= 1600 && window.innerWidth > 990) {
        item.classList.add("staffAnimation1");
      }
    });
    row2.forEach(item => {
      if (y >= 2000 && window.innerWidth > 990) {
        window.removeEventListener("scroll", staffAnimtaion);
        item.classList.add("staffAnimation2");
      }
    });
    y >= 1300 && window.innerWidth > 990
      ? document.querySelector(".staff-title").classList.add("wcuText")
      : document.querySelector(".staff-title").classList.remove("wcuText");
  }
  if (window.innerWidth < 990) {
    (function mobileStaffAnimation() {
      var elements;
      var windowHeight;

      function init() {
        elements = document.querySelectorAll(".staff-item, .staff-title");
        windowHeight = window.innerHeight;
      }

      function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var positionFromTop = elements[i].getBoundingClientRect().top;
          if (positionFromTop - windowHeight <= 0) {
            element.classList.remove("hidden");
            element.classList.add("mobileStaffAnimation");
          }
        }
      }

      window.addEventListener("scroll", checkPosition);
      window.addEventListener("resize", init);

      init();
      checkPosition();
    })();
  }
}
