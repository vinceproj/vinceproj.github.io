//Play Intro
const playIntro = () => {
  $(".opening").addClass("fadeOut");
  setTimeout(() => {
    $(".opening").remove();
    $(".container").addClass("fadeIn");
  }, 1000);
};

$(document).ready(function () {
  setTimeout(playIntro, 2000);
});

//Change Welcome Message
const messageChange = () => {
  const message = document.getElementById("welcomeMessage");
  const messageArray = [
    "Software Engineer",
    "Web Developer",
    "Visual Designer"
  ];
  let messageIndex = 1;
  let hideFlag = false;

  setInterval(function () {
    if (hideFlag == false) {
      message.classList.add("welcomeHide");
      hideFlag = true;
    } else if (hideFlag == true) {
      message.classList.remove("welcomeHide");
      message.classList.add("welcomeShow");
      hideFlag = false;
    }
  }, 2000);
  setInterval(function () {
    if (messageIndex < messageArray.length) {
      message.innerHTML = messageArray[messageIndex];
      messageIndex++;
    } else {
      messageIndex = 0;
      message.innerHTML = messageArray[messageIndex];
      messageIndex++;
    }
  }, 4000);
};

setTimeout(messageChange, 3000);

//Handle Mobile Nav
const navSlide = () => {
  //Toggle deprecated in JQuery so use vanilla
  const navMobile = document.querySelector(".mobile-nav");
  const nav = document.querySelector(".main-menu");
  const navBarOne = document.querySelector("#mobile-bar-1");
  const navBarTwo = document.querySelector("#mobile-bar-2");
  const navBarThree = document.querySelector("#mobile-bar-3");

  //Toggle
  navMobile.addEventListener("click", () => {
    nav.classList.toggle("navMobileActive");
    navBarOne.classList.toggle("mobile-bar-1-close");
    navBarTwo.classList.toggle("mobile-bar-2-close");
    navBarThree.classList.toggle("mobile-bar-3-close");
  })
}

navSlide();

//Handle Scroll Behavior
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-target").style.top = "0";
  } else {
    document.getElementById("nav-target").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
}

//Handle Page Scrolling

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });