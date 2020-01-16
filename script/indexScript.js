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

setTimeout(messageChange, 1000)