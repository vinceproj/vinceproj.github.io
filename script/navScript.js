const fadeMain = () => {
  const mainBody = document.querySelector(".mainContainer");
  mainBody.classList.remove("fade-in");
};

const navSlide = () => {
  const navMobile = document.querySelector(".navMobile");
  const nav = document.querySelector(".navLinks");
  const navML1 = document.querySelector(".navLine1");
  const navML2 = document.querySelector(".navLine2");
  const navML3 = document.querySelector(".navLine3");

  //Toggle
  navMobile.addEventListener("click", () => {
    nav.classList.toggle("navMobileActive");
    navML1.classList.toggle("navLine1Close");
    navML2.classList.toggle("navLine2Close");
    navML3.classList.toggle("navLine3Close");
  });
};

const navApp = () => {
  fadeMain();
  navSlide();
};

setTimeout(navApp, 500);