let isMobile = false;
let width = 0;
let body = document.getElementsByTagName('html')[0];

document.addEventListener('DOMContentLoaded', () => {
    width = body.offsetWidth;

    if (width > 480) {
        let buttonDesktop = document.createElement('button');
        buttonDesktop.innerHTML = 'mobile';
        buttonDesktop.className = 'newButton';
        buttonDesktop.onclick = function () {
            if (isMobile) {
                buttonDesktop.innerHTML = 'mobile';
                body.style.width = width;
            } else {
                buttonDesktop.innerHTML = 'desktop';
                body.style.width = '479px';
            }

            isMobile = !isMobile;
        };
        document.getElementsByTagName('body')[0].append(buttonDesktop);
    }

    let buttonBack = document.createElement('button');
    buttonBack.innerHTML = 'back';
    buttonBack.className = 'newButton';
    buttonBack.onclick = function () {
        document.location.href = "../../index.html";
    };
    document.getElementsByTagName('body')[0].append(buttonBack);
});