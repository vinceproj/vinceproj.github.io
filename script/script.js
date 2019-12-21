var currentImage = [1];

const navSlide = () => {
    const navMobile = document.querySelector('.navMobile');
    const nav = document.querySelector('.navLinks');
    const navML1 = document.querySelector('.navLine1');
    const navML2 = document.querySelector('.navLine2');
    const navML3 = document.querySelector('.navLine3');
    const mainLeftArr = document.querySelector('#mainHomeLeftArr');
    const mainRightArr = document.querySelector('#mainHomeRightArr');

    //Toggle
    navMobile.addEventListener('click', () => {
        nav.classList.toggle('navMobileActive');
        navML1.classList.toggle('navLine1Close');
        navML2.classList.toggle('navLine2Close');
        navML3.classList.toggle('navLine3Close');
        mainLeftArr.classList.toggle('mainHomeLeftArr_OFF');
        mainRightArr.classList.toggle('mainHomeRightArr_OFF');
    });

}

const leftArr = () => {
    const mainLeftArr = document.querySelector('#mainHomeLeftArr');
    const mainHome = document.querySelector('#mainHome');

    mainLeftArr.addEventListener('click', () => {
        switch (currentImage[0]) {
            case 1:
                currentImage[0] = 3;
                mainHome.style.backgroundImage = "url('/img/Self_A" + currentImage[0] + ".png')";
                break;
            case 2:
                currentImage[0] = 1;
                mainHome.style.backgroundImage = "url('/img/Self_A" + currentImage[0] + ".png')";
                break;
            case 3:
                currentImage[0] = 2;
                mainHome.style.backgroundImage = "url('/img/Self_A" + currentImage[0] + ".png')";
                break;
        }

    })
}

const rightArr = () => {
    const mainRightArr = document.querySelector('#mainHomeRightArr');
    const mainHome = document.querySelector('#mainHome');

    mainRightArr.addEventListener('click', () => {
        switch (currentImage[0]) {
            case 1:
                currentImage[0] = 2;
                mainHome.style.backgroundImage = "url('/img/Self_A" + currentImage[0] + ".png')";
                break;
            case 2:
                currentImage[0] = 3;
                mainHome.style.backgroundImage = "url('/img/Self_A" + currentImage[0] + ".png')";
                break;
            case 3:
                currentImage[0] = 1;
                mainHome.style.backgroundImage = "url('/img/Self_A" + currentImage[0] + ".png')";
                break;
        }

    })
}

const navApp = () => {
    navSlide();
    leftArr();
    rightArr();
}

navApp();