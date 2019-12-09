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
                disableStyleSheets('../../projects/theyalow/styles/style.min.css');
                addStyleSheets('../../projects/theyalow/styles/style.css');
            } else {
                buttonDesktop.innerHTML = 'desktop';
                disableStyleSheets('../../projects/theyalow/styles/style.css');
                addStyleSheets('../../projects/theyalow/styles/style.min.css');
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

function addStyleSheets(href) {
    let head = document.head;
    let link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = href;

    head.appendChild(link);
}

function disableStyleSheets(href) {
    let styles = document.styleSheets;

    for (let i in styles) {
        if (styles[i].href == href) {
            styles[i].disabled = true;
        }
    }
}