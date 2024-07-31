console.log("script.js loaded");
export var savedImage = 0;
export let activeIcon = 0;
export let navTop = false;
export let hideIcon = true;
export let isMoving = false;
export let clickedIcon = null;
export var mainPage = document.getElementById("main-page");
export var catPage = document.getElementById("cat-page");
export var pcPage = document.getElementById("pc-page");
export var musicPage = document.getElementById("music-page");
export var gamesPage = document.getElementById("games-page");
export var projectsPage = document.getElementById("projects-page");
export var websitePage = document.getElementById("website-page");
export var linksPage = document.getElementById("links-page");
export let page;
export let currentPage;
export var enableCode = true;
export const icons = document.querySelectorAll(".icon");
export let selectedIcon = null;
export let index = null;
export let pos = null;
export const indicator = document.querySelectorAll('#indicator p');
export const pages = document.querySelectorAll("#pc-page, #cat-page, #projects-page, #website-page, #links-page, #music-page, #games-page");
export let nextPercentage2 = null;
export let pageHeight = document.body.scrollHeight;
export const all = document.getElementById("all");
export const titles = document.querySelectorAll(".title, .subtitleBottom, .subtitleTop, .basicText")
export const visibleElements = ".title, .subtitleTop, .subtitleBottom, .basicText, .link, .pcPart, .welcome, .see";
export const buttons = document.querySelectorAll(".projectsMenuButton");
export let showButtons = false;
export let rect2, imageID;
export let clickedImage = false;
export let isClicked = false;
export let imageCopy = document.getElementById('bg');
export let clickedElement2;
export let update = false;
export let lastIndex = null;
export let mainIndex = null;

document.addEventListener('DOMContentLoaded', function () {
    var track = document.getElementById("image-track");

    track.dataset.percentage = -50;

    var handleOnDown = function (event) {
        track.dataset.mouseDownAt = event.clientX;
    };

    var handleOnUp = function () {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = function (event) {
        if (track.dataset.mouseDownAt === "0" || !enableCode || clickedImage) return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - event.clientX;
        const maxDelta = window.innerWidth;

        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, -6.5), -93.5);

        track.dataset.percentage = nextPercentage;

        track.style.transform = `translate(${nextPercentage}%, -50%)`;

        let nextPercentage2Unconstrained = Math.max(Math.min(((nextPercentageUnconstrained + 50) * 6.9), 300), -300);
        nextPercentage2 = nextPercentage2Unconstrained;
        indicator.forEach((pElement) => {
            pElement.style.transform = `translate(${nextPercentage2}%, 0)`;
        });

        const images = track.getElementsByClassName("image");
        for (var image of images) {
            image.style.objectPosition = `${100 + nextPercentage}% center`;
        }
    };

    window.addEventListener('mousedown', function (event) {
        handleOnDown(event);
        handleImageClick(event);
    });

    window.addEventListener('touchstart', function (event) {
        handleOnDown(event.touches[0]);
    });

    window.addEventListener('mouseup', function (event) {
        handleOnUp(event);
    });

    window.addEventListener('touchend', function (event) {
        handleOnUp(event.touches[0]);
    });

    window.addEventListener('mousemove', function (event) {
        handleOnMove(event);
    });

    window.addEventListener('touchmove', function (event) {
        handleOnMove(event.touches[0]);
    });
});

function handleImageClick(event) {
    const selectedImage = event.target;
    const rect = selectedImage.getBoundingClientRect();
    const button = document.getElementsByClassName('button')[0];

    if ((selectedImage.parentNode.classList.contains("icon2") || selectedImage.classList.contains("image")) && !isClicked) {
        switch (true) {
            case selectedImage.classList.contains("cPc") || selectedImage.classList.contains("imgSetup"):
                selectedIcon = document.getElementById("iconPc").querySelector("i");
                page = pcPage;
                if (!selectedImage.parentNode.classList.contains("icon2")) {index = 0;}
                break;
            case selectedImage.classList.contains("cCats") || selectedImage.classList.contains("imgCats"):
                selectedIcon = document.getElementById("iconCats").querySelector("i");
                page = catPage;
                if (!selectedImage.parentNode.classList.contains("icon2")) {index = 1}
                // togglePlayPause();
                break;
            case selectedImage.classList.contains("cProjects") || selectedImage.classList.contains("imgProjects"):
                selectedIcon = document.getElementById("iconProjects").querySelector("i");
                page = projectsPage;
                if (!selectedImage.parentNode.classList.contains("icon2")) {index = 2;}
                showButtons = true;
                break;
            case selectedImage.classList.contains("cWebsite") || selectedImage.classList.contains("imgWebsite"):
                selectedIcon = document.getElementById("iconWebsite").querySelector("i");
                page = websitePage;
                if (!selectedImage.parentNode.classList.contains("icon2")) {index = 3;}
                break;
            case selectedImage.classList.contains("cLinks") || selectedImage.classList.contains("imgLinks"):
                selectedIcon = document.getElementById("iconLinks").querySelector("i");
                page = linksPage;
                if (!selectedImage.parentNode.classList.contains("icon2")) {index = 4;}
                break;
            case selectedImage.classList.contains("cMusic") || selectedImage.classList.contains("imgMusic"):
                selectedIcon = document.getElementById("iconMusic").querySelector("i");
                page = musicPage;
                if (!selectedImage.parentNode.classList.contains("icon2")) {index = 5;}
                break;
            case selectedImage.classList.contains("cGames") || selectedImage.classList.contains("imgGames"):
                selectedIcon = document.getElementById("iconGames").querySelector("i");
                page = gamesPage;
                if (!selectedImage.parentNode.classList.contains("icon2")) {index = 6;}
                break;
        }
        if (selectedImage.classList.contains("image")){
            pages.forEach(page2 => {
                page2.querySelectorAll('*').forEach(child => {
                    child.classList.add("invisible");
                });
            });
            setTimeout(function() {
                page.querySelectorAll('*').forEach(child => {
                    child.classList.remove("invisible");
                });
                mainPage.classList.add('invisible');
            }, 1000);
        }
        activeIcon = selectedIcon;
        if ((hideIcon && !isMoving) || selectedImage.classList.contains("image")) {
            activeIcon.classList.add("active");
        }
    }

    if (selectedImage.classList.contains('image') && !selectedImage.classList.contains('fullscreen') && enableCode && !isClicked){
        clickedImage = true;
        isClicked = true;
        update = false;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        var intervar = setInterval(function() {
            if (window.scrollY === 0) {
                clearInterval(intervar);
                // imageCopy = selectedImage.cloneNode(true);
                savedImage = imageCopy;
                enableCode = !enableCode;
                // document.body.appendChild(imageCopy);
                imageCopy.classList.remove('displayNone');
                imageCopy.classList.add('fullscreen');
                imageCopy.style.setProperty('--start-x', rect.left + 'px');
                button.classList.remove('slideUp');
                button.classList.add('slideDown');
                navTop = true;
                imageCopy.style.boxShadow = "none";
                imageCopy.classList.remove("imageAnim");
                imageCopy.classList.add("visible");
                console.log("page: ", page);
                page.querySelectorAll(visibleElements).forEach(title => { title.classList.add('visible'); });

                setTimeout(function() {
                    buttons.forEach(projectsButton => { 
                        projectsButton.classList.add('buttonVisible');
                        projectsButton.classList.remove('buttonInvisible');
                    });
                    isClicked = false;
                }, 1200);

                if (window.scrollY === 0) { 
                    page.querySelectorAll(visibleElements).forEach(title => { title.style.zIndex = "15"; }); 
                } else {
                    setTimeout(function() {
                        page.querySelectorAll(visibleElements).forEach(title => { title.style.zIndex = "15"; });
                    });
                }
            }
        }, 128);
    } else { clickedImage = false; }

    if (selectedImage.classList.contains('button')){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        var intervar = setInterval(function() {
            if (window.scrollY === 0) {
                pages.forEach(page2 => { page2.style.height = `${pageHeight}px`; });
                all.style.height = `${pageHeight}px`;

                titles.forEach(title => { title.classList.remove('visible'); });
                buttons.forEach(projectsButton => { 
                    projectsButton.classList.remove('buttonVisible');
                    projectsButton.classList.add('buttonInvisible');
                });

                activeIcon = 0;
                showButtons = false;
                isClicked = false;
                navTop = false;
                let id;
                switch(true) {
                    case index === 0:
                        id = 'home';
                        break;
                    case index === 1:
                        id = 'about';
                        break;
                    case index === 2:
                        id = 'projects';
                        break;
                    case index === 3:
                        id = 'portfolio';
                        break;
                    case index === 4:
                        id = 'contact';
                        break;
                    case index === 5:
                        id = 'music';
                        break;
                    case index === 6:
                        id = 'games';
                        break;
                }
                mainIndex = index;
                imageCopy.style.setProperty('--current-objectPos', getComputedStyle(imageCopy).objectPosition);
                imageCopy.style.setProperty('--target-objectPos', getComputedStyle(document.getElementById(id)).objectPosition);
                imageCopy.classList.add('reverseFullscreen');
                imageCopy.classList.remove('fullscreen');
                button.classList.remove('slideDown');
                button.classList.add('slideUp');
                // pauseVideo();
                setTimeout(function() {
                    savedImage.classList.remove('reverseFullscreen');
                    savedImage = 0;
                    index = null;
                    enableCode = !enableCode;
                    titles.forEach(title => { title.style.zIndex = "14"; });
                }, 1500);

                mainPage.classList.remove('invisible');
                pages.forEach(page2 => {
                    page2.querySelectorAll('*').forEach(child => {
                        child.classList.add("invisible");
                    });
                });

                const activeElements = document.querySelectorAll('.active');
                activeElements.forEach(element => {
                    element.classList.remove('active');
                });
                clearInterval(intervar);
            }
        }, 128);
    }
}

export function home(){
    clickedIcon = document.getElementsByClassName('setup')[0];
    console.log("home: ", index);
    if (index !== null) {lastIndex = index;}
    if (index != 0 && !isClicked) {nav(-6.5, "home", clickedIcon, pcPage);}
    if (index === 0 && navTop && !isClicked) { menu(clickedIcon, pcPage, "home"); }
    index = 0;
    mainIndex = index;
}
export function about(){
    clickedIcon = document.getElementsByClassName('cats')[0];
    if (index !== null) {lastIndex = index;}
    if (index != 1 && !isClicked) {nav(-21, "about", clickedIcon, catPage);}
    if (index === 1 && navTop && !isClicked) { menu(clickedIcon, catPage, "about"); }
    // togglePlayPause();
    index = 1;
    mainIndex = index;
}
export function projects(){
    clickedIcon = document.getElementsByClassName('projects')[0];
    if (index !== null) {lastIndex = index;}
    if (index === 2 && navTop && !isClicked) { menu(clickedIcon, projectsPage, "projects"); }
    if (index != 2 && !isClicked) {nav(-35.5, "projects", clickedIcon, projectsPage);}
    index = 2;
    mainIndex = index;
}
export function portfolio(){
    clickedIcon = document.getElementsByClassName('portfolio')[0];
    if (index !== null) {lastIndex = index;}
    if (index === 3 && navTop && !isClicked) { menu(clickedIcon, websitePage, "portfolio"); }
    if (index != 3 && !isClicked) {nav(-50, "portfolio", clickedIcon, websitePage);}
    index = 3;
    mainIndex = index;
}
export function contact(){
    clickedIcon = document.getElementsByClassName('links')[0];
    if (index !== null) {lastIndex = index;}
    if (index === 4 && navTop && !isClicked) { menu(clickedIcon, linksPage, "contact"); }
    if (index != 4 && !isClicked) { nav(-64.5, "contact", clickedIcon, linksPage); }
    index = 4;
    mainIndex = index;
}
export function music(){
    clickedIcon = document.getElementsByClassName('music')[0];
    if (index !== null) {lastIndex = index;}
    if (index === 5 && navTop && !isClicked) { menu(clickedIcon, musicPage, "music"); }
    if (index != 5 && !isClicked) {nav(-79, "music", clickedIcon, musicPage);}
    index = 5;
    mainIndex = index;
}
export function games(){
    clickedIcon = document.getElementsByClassName('games')[0];
    if (index !== null) {lastIndex = index;}
    if (index === 6 && navTop && !isClicked) { menu(clickedIcon, gamesPage, "games"); }
    if (index != 6 && !isClicked) {nav(-93.5, "games", clickedIcon, gamesPage);}
    index = 6;
    mainIndex = index;
}

icons.forEach(icon => {
    icon.addEventListener("click", function() {
        if (hideIcon && !isMoving) {
            this.classList.add("active");
        }
       activeIcon = this.querySelector("i");
    });
});

function nav(endValue, id, clickedElement, page) {
    console.log("nav");
    if(isMoving){return;}
    setTimeout(function() {
        // index = lastIndex;
        console.log('clickedElement: ', clickedElement)
        // if (savedImage !== 0) {
        // }
    }, 1);
    // index = lastIndex;
    hideIcon = true;
    isMoving = true;
    enableCode = false;
    update = false;
    const track = document.getElementById("image-track");
    let currentPercentage = parseFloat(track.dataset.percentage);
    const button = document.getElementsByClassName('button')[0];
    const increment = endValue > currentPercentage ? 1.35 : -1.35;
    let nextPercentage = currentPercentage;
    const activeElements = document.querySelectorAll('.active');

    activeElements.forEach(element => {
        element.classList.remove('active');
    });

    if (!clickedElement.classList.contains('active')) {
        clickedElement.classList.add('active');
    }

    isClicked = true;
    setTimeout(function() { isClicked = false; }, 1200);

    if (window.scrollY !== 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        var intervar = setInterval(function() {
            if (window.scrollY === 0) {
                clearInterval(intervar);
                move();
            }
        }, 128);
    } else { move(); }
    function move() {
        if (savedImage === 0) {
            startUpdatePercentage();
        } else {
            setTimeout(startUpdatePercentage, 1500);
            setTimeout(function() {
                mainIndex = lastIndex;
                console.log('MAIN INDEX: ', mainIndex)
            }, 1000);
            savedImage.style.setProperty('--current-objectPos', getComputedStyle(savedImage).objectPosition);
            savedImage.style.setProperty('--target-objectPos', getComputedStyle(document.getElementById(id)).objectPosition);
            savedImage.classList.add('reverseFullscreen');
            savedImage.classList.remove('fullscreen');
            button.classList.remove('slideDown');
            button.classList.add('slideUp');
            clickedElement.classList.add("active");
            navTop = false;
            setTimeout(function() {
                // savedImage.remove();
                savedImage.classList.remove('reverseFullscreen');
                savedImage = 0;
            }, 1500);
            mainPage.classList.add('invisible');
            pages.forEach(page2 => {
                page2.querySelectorAll('*').forEach(child => {
                    child.classList.add("invisible");
                });
            });
        }
        titles.forEach(title => { title.classList.remove('visible'); });
        buttons.forEach(projectsButton => { 
            projectsButton.classList.remove('buttonVisible');
            projectsButton.classList.add('buttonInvisible');
         });
    }

    function startUpdatePercentage() {
        titles.forEach(title => { title.style.zIndex = "14"; });
        const updatePercentage = setInterval(() => {
            nextPercentage += increment;
            track.dataset.percentage = nextPercentage;
            track.style.transform = `translate(${nextPercentage}%, -50%)`;
            indicator.forEach((pElement) => {
                pElement.style.transform = `translate(${((nextPercentage - (-6.5)) / (-93.5 - (-6.5)) * (300 - (-300)) + (-300))*-1}%, 0)`;
            });

            const images = track.getElementsByClassName("image");
            for (var image of images) {
                image.style.objectPosition = `${100 + nextPercentage}% center`;
            }

            if ((increment > 0 && nextPercentage >= endValue) || (increment < 0 && nextPercentage <= endValue)) {
                const image = document.getElementById(id);
                imageID = image;
                rect2 = image.getBoundingClientRect();
                console.log("correct rect2: ", rect2.left);
                // imageCopy = image.cloneNode(true);
                imageCopy.classList.remove('displayNone');
                imageCopy.style.boxShadow = "none";
                imageCopy.classList.remove("imageAnim");
                imageCopy.classList.add("visible");
                savedImage = imageCopy;
                // document.body.appendChild(imageCopy);
                imageCopy.classList.add('fullscreen');
                imageCopy.style.setProperty('--start-x', rect2.left + 'px');
                button.classList.remove('slideUp');
                button.classList.add('slideDown');
                navTop = true;
                isMoving = false;
                // if (page != catPage) { pauseVideo(); }
                setTimeout(function() {
                    console.log("NOW");
                    page.querySelectorAll('*').forEach(child => {
                        child.classList.remove("invisible");
                    });
                    mainPage.classList.add('invisible');

                    page.style.height = "auto";
                    pages.forEach(page2 => { page2.style.height = `${page.clientHeight}px`; });
                    all.style.height = `${page.clientHeight}px`;

                    page.querySelectorAll(visibleElements).forEach(title => {
                        title.classList.add('visible');       
                        title.style.zIndex = "15";
                    });
                    buttons.forEach(projectsButton => { 
                        projectsButton.classList.add('buttonVisible'); 
                        projectsButton.classList.remove('buttonInvisible');
                    });

                    if (page === projectsPage) {
                        showButtons = true;
                    } else {
                        showButtons = false;
                    }

                    setTimeout(() => {
                        observe();
                    }, 1000);
                    
                }, 1000);
                clearInterval(updatePercentage);
            }
        });
    }
    track.dataset.prevPercentage = endValue;
}

window.addEventListener('resize', function() {
    if (imageID != null){
        rect2 = imageID.getBoundingClientRect();
        imageCopy.style.setProperty('--start-x', rect2.left + 'px');
        console.log("rect2: ", rect2.left);
    }
});

function menu(clickedElement, page, id) {
    console.log("menu");
    const button = document.getElementsByClassName('button')[0];

    pages.forEach(page2 => { page2.style.height = `${pageHeight}px`; });
    all.style.height = `${pageHeight}px`;

    hideIcon = false;
    navTop = false;
    showButtons = false;

    if (window.scrollY !== 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        var intervar = setInterval(function() {
            if (window.scrollY === 0) {
                clearInterval(intervar);
                close();
            }
        }, 128);
    } else { close(); }
    function close() {
        page.querySelectorAll(visibleElements).forEach(title => { title.classList.remove('visible'); });
        buttons.forEach(projectsButton => { 
            projectsButton.classList.remove('buttonVisible');
            projectsButton.classList.add('buttonInvisible');
         });
        pages.forEach(page2 => {
            page2.querySelectorAll('*').forEach(child => {
                child.classList.add("invisible");
            });
        });
        if (savedImage) {
            savedImage.style.setProperty('--current-objectPos', getComputedStyle(savedImage).objectPosition);
            savedImage.style.setProperty('--target-objectPos', getComputedStyle(document.getElementById(id)).objectPosition);
            savedImage.classList.add('reverseFullscreen');
            savedImage.classList.remove('fullscreen');
        }
        if (clickedElement) { clickedElement.classList.remove("active"); }
        button.classList.remove('slideDown');
        button.classList.add('slideUp');
        mainPage.classList.remove('invisible');
        setTimeout(function () {
            console.log("NOW");
            if (savedImage) {
                // savedImage.remove();
                savedImage.classList.remove('reverseFullscreen');
                savedImage = 0;
            }
            activeIcon = 0;
            enableCode = true;
            update = true;
            index = null;
            resizeNormal();
            page.querySelectorAll(visibleElements).forEach(title => { title.style.zIndex = "14"; });
        }, 1500);
    }
}

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        if(entry.isIntersecting && entry.target.classList.contains('imageAppear')) {
            entry.target.classList.add('imageAnim');
        } else {
            entry.target.classList.remove('imageAppear');
            entry.target.classList.add('visible');
        }
    }));
});

const imageElements = document.querySelectorAll('.image');
imageElements.forEach((el) => observer2.observe(el));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        if(entry.isIntersecting && !entry.target.classList.contains("invisible")) {
            entry.target.classList.add('show');
        }
    }));
});

const hiddenElements = document.querySelectorAll('.hidden');
function observe(){
    hiddenElements.forEach((el) => observer.observe(el));
}
observe();

pages.forEach(page2 => {
    page2.querySelectorAll('*').forEach(child => {
        child.classList.add("invisible");
    });
    page2.style.height = `${pageHeight}px`;
});
all.style.height = `${pageHeight}px`;

window.addEventListener('resize', function() {
    if (window.innerWidth !== window.outerWidth || window.innerHeight !== window.outerHeight) {
        if (activeIcon !== 0){
            switch (true) {
                case activeIcon.classList.contains("setup"):
                    currentPage = pcPage;
                    break;
                case activeIcon.classList.contains("cats"):
                    currentPage = catPage;
                    break;
                case activeIcon.classList.contains("projects"):
                    currentPage = projectsPage;
                    break;
                case activeIcon.classList.contains("portfolio"):
                    currentPage = websitePage;
                    break;
                case activeIcon.classList.contains("links"):
                    currentPage = linksPage;
                    break;
                case activeIcon.classList.contains("music"):
                    currentPage = musicPage;
                    break;
                case activeIcon.classList.contains("games"):
                    currentPage = gamesPage;
                    break;
            }
        }
        if (navTop) {
            currentPage.style.height = "auto";
            pages.forEach(page2 => { page2.style.height = `${currentPage.clientHeight}px`; });
            all.style.height = `${currentPage.clientHeight}px`;
            console.log("page");
        } 
        if (!navTop) {
            resizeNormal();
        }

        console.log("scrollHeight: ", pageHeight);
    }
});
function resizeNormal() {
    all.style.height = "auto";
    pageHeight = document.body.scrollHeight;
    all.style.height = `${pageHeight}px`;
    pages.forEach(page2 => { page2.style.height = `${pageHeight}px`; });
    console.log("websitePage");
}

export function scrollButton(element) {
    let target = element.offsetTop - element.offsetHeight;
    console.log("target");
    if (showButtons) {
        window.scrollTo({
            top: target,
            behavior: 'smooth'
        });
    }
}

// const video = document.getElementById('videoPlayer');
// const play = document.getElementById('playButton');
// const pause = document.getElementById('pauseButton');
// const on = document.getElementById('onButton');
// const off = document.getElementById('offButton');
// const videos = [
//   'assets/videos/1.mp4',
//   'assets/videos/2.mp4',
//   'assets/videos/3.mov',
//   'assets/videos/4.mov',
//   'assets/videos/5.mov',
//   'assets/videos/6.mov',
//   'assets/videos/7.mov',
//   'assets/videos/8.mov',
//   'assets/videos/9.mov',
//   'assets/videos/10.mov',
//   'assets/videos/11.mov',
//   'assets/videos/12.mp4',
// ];

// console.log("videos2: ", videos);

// function togglePlayPause() {
//     if (video.paused) {
//         video.play();
//         play.classList.remove('hiddenButton');
//         pause.classList.add('hiddenButton');
//     } else {
//         video.pause();
//         pause.classList.remove('hiddenButton');
//         play.classList.add('hiddenButton');
//     }
// }

// function pauseVideo() {
//     video.pause();
//     pause.classList.remove('hiddenButton');
//     play.classList.add('hiddenButton');
// }

// var lastVideoIndex = -1;

// function changeVideo() {
//   var randomIndex;
//     do {
//         randomIndex = Math.floor(Math.random() * videos.length);
//     } while (randomIndex === lastVideoIndex);

//     lastVideoIndex = randomIndex;
//     video.src = videos[randomIndex];
//     video.load();
//     video.play();
// }

// function toggleMute() {
//     if (video.muted) {
//         on.classList.remove('hiddenButton');
//         off.classList.add('hiddenButton');
//     } else {
//         off.classList.remove('hiddenButton');
//         on.classList.add('hiddenButton');
//     }
//     video.muted = !video.muted;
// }
        
// changeVideo();
// togglePlayPause();

export function getRect(e) {
    return e.getBoundingClientRect();
}