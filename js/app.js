

const audio = document.querySelector('audio')
audio.load()
let btnStart = false
let btn = document.querySelector('#show')
let container = document.querySelector('.container-global')
const containerBg = document.querySelector('.container-sider')
let main = document.querySelector('main')
let text = document.querySelector('h1');
let textPara = document.querySelector('.move')
let btnDowload = document.querySelector('.download-btn')
btnDowload.classList.add('displaynone')
let contenuPara = textPara.innerHTML
textPara.innerHTML = ''

let contenu = text.innerHTML;
text.innerHTML = '';

let span = document.querySelectorAll('.write')
span.forEach(element =>{
    element.classList.add('displaynone')
})

btn.addEventListener('click', () =>{
    btn.classList.add('visible-none')
    span[0].classList.remove('displaynone')
    index = 0;
    let timerTitle = setInterval(function (){
        if(index < contenu.length){
            text.innerHTML += contenu.charAt(index)
            index++
        }else{
            clearInterval(timerTitle)
        }
    }, 60)
    
    setTimeout(timer,800)
    audio.currentTime = 0;
    audio.play()
    setTimeout(displayElement, 2100)
    setTimeout(moveScreen, 2500)     
    btnStart = true
})
function timer(){
    indexbis = 0
    span[0].classList.add('displaynone')
    span[1].classList.remove('displaynone')
    let timerPara = setInterval(function (){
        if(indexbis < contenuPara.length){
            textPara.innerHTML += contenuPara.charAt(indexbis)
            indexbis++
        }else{
            clearInterval(timerPara)
        }
    }, 30)
}

function moveScreen(){
    if(window.innerWidth <= 450){
        window.scrollTo({top:250,
            behavior:"smooth"
        })
    }else if(window.innerWidth > 450 && window.innerWidth <1250){
        window.scrollTo({top:250,
            behavior:"smooth"
        })
    }else{
        window.scrollTo({top:400,
            behavior:"smooth"
        }) 
    }
}

function displayElement(){
    if(window.innerWidth >= 1440){
        nav.classList.remove('displaynone')
        nav.classList.add('display')
        container.classList.add('display')
        containerBg.classList.add('size')
        container.classList.remove('container-global')
        main.classList.add('bg_size')
        btn.classList.add('displaynone')
    }else{
        container.classList.add('display')
        containerBg.classList.add('size')
        container.classList.remove('container-global')
        burger.classList.add('burger-show')
        main.classList.add('bg_size')
        btn.classList.add('displaynone')
        containerburger.classList.add('display')
        containerburger.classList.remove('displaynone')
    }
    if(window.matchMedia('(min-width: 1280px)').matches){
        arrow.style.display = 'block'
        arrowGestion()
    }else{
        arrow.style.display = 'none'
        window.onscroll = null; 
    }
    span.forEach(element =>{
        element.classList.add('displaynone')
    })
    btnDowload.classList.remove('displaynone')
}

function sizeNav(){
    if(btnStart){
        if(window.innerWidth >= 1440){
            containerburger.classList.remove('display')
            containerburger.classList.add('displaynone')
            burger.classList.remove('burger-show')
            nav.classList.remove('displaynone')
            nav.classList.add('display')
            bars.forEach(element => {
                element.classList.remove('open')
            });
        }else{
            containerburger.classList.remove('displaynone')
            containerburger.classList.add('display')
            burger.classList.add('burger-show')
            nav.classList.remove('display')
            nav.classList.add('displaynone')
            bars.forEach(element => {
                element.classList.remove('open')
            });
        } 
    }  
}

window.addEventListener('resize', sizeNav)
/*
*Gestion de la flèche de renvoie en haut
*/ 

let arrow = document.querySelector('.arrow')

function arrowGestion(){
    window.onscroll = function () {
        if (window.scrollY >= 100){
            arrow.style.display = 'block'
            arrow.addEventListener('click', () =>{
                window.scrollTo({
                    top:0,
                    left:0,
                    behavior: "smooth"
                })  
            })
        }else{
            arrow.style.display = 'none'
        }
    }   
} 

window.addEventListener('resize', () =>{
    if(btnStart){
        if(window.matchMedia('(min-width: 1280px)').matches){
            arrow.style.display = 'block'
            arrowGestion()
        }else{
            arrow.style.display = 'none'
            window.onscroll = null; 
        }
    }
})






/*
* Gestion de la nav burger
*/
const burger = document.querySelector('.burger');
let bars = document.querySelectorAll('.barBlack');
let nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    bars.forEach(element => {
        element.classList.toggle('open')
    });
    nav.classList.toggle('display')
    nav.classList.remove('displaynone')
})
if(window.innerWidth <= 1440){
    window.addEventListener('scroll', () => {
        
        if(nav.classList.contains('display')){
            bars.forEach(element => {
                element.classList.remove('open')
            });
        }
        nav.classList.remove('display')

    })
}




/*
* Gestion du dark mode
*/
const toggleOn = document.querySelector('.fa-toggle-on');
const toggleOff = document.querySelector('.fa-toggle-off');
let sections = document.querySelectorAll('.white')
let textWhite = document.querySelectorAll('.text-white')
let textBlack = document.querySelectorAll('.text-black')
const containerburger = document.querySelector('.container-burger')

/*
*Start dark mode
*/
function enableDarkMode() {
    toggleOn.classList.remove('display');
    toggleOn.classList.add('displaynone');

    toggleOff.classList.add('display');
    toggleOff.classList.remove('displaynone');

    // main.classList.add('linear-black')
    arrow.classList.add('text-white')
    sections.forEach(element =>{
        element.classList.remove('white')
        element.classList.add('bg-dark')
    })
    bars.forEach(element => {
        element.classList.add('bar-white')
    });
    textWhite.forEach(element =>{
        element.classList.remove('text-white')
        element.classList.add('text-black')
    })
    textBlack.forEach(element => {
        element.classList.remove('text-black')
        element.classList.add('text-white')
    })
    containerburger.classList.remove('white')
    containerburger.classList.add('bg-dark')

    localStorage.setItem('darMode', "enabled")
}

/*
*Remove dark mode
*/

function disabledDarkMode() {
    toggleOff.classList.remove('display');
    toggleOff.classList.add('displaynone');

    toggleOn.classList.add('display');
    toggleOn.classList.remove('displaynone');

    main.classList.remove('linear-black')
    arrow.classList.remove('text-white')
    sections.forEach(element =>{
        element.classList.add('white')
        element.classList.remove('bg-dark')
    })
    bars.forEach(element => {
        element.classList.remove('bar-white')
    });
    textWhite.forEach(element =>{
        element.classList.add('text-white')
        element.classList.remove('text-black')
    })
    textBlack.forEach(element =>{
        element.classList.remove('text-white')
        element.classList.add('text-black')
    })
    containerburger.classList.add('white')
    containerburger.classList.remove('bg-dark')

    localStorage.setItem('darMode', "disabled")
    
}




/*
*Gestion de la nav en fonction de la taille de l'écran
*/
let links = document.querySelectorAll('.link')

window.addEventListener('resize', () => {
    if(window.matchMedia('(min-width: 1440px)').matches){
        links.forEach( link =>{
            link.addEventListener('click',() => {
                if(nav.classList.contains('display')){
                    return
                }
            
            })
        })
    }else{
        links.forEach( link =>{
            link.addEventListener('click',() => {
                if(window.innerWidth < 1440 && nav.classList.contains('display')){
                    bars.forEach(element => {
                        element.classList.remove('open')
                        nav.classList.remove('display')
                    })
                    nav.classList.remove('display')
                }  
            })
        })     
    }  
})

/*
*Gestion de la nav en fonction d'ou on se trouve sur la page
*/

const me = document.getElementById("me");
const info = document.getElementById("info");

const skills = document.getElementById("skills");
const skill = document.getElementById("skill");

const projets = document.getElementById("projets");
const projet = document.getElementById("projet");

const contact = document.getElementById("contact");
const contactMe = document.getElementById("contact-me");

function handleScroll() {

    const windowCenter = window.innerHeight / 2;

    const elements = [
        { element: me, target: info },
        { element: skills, target: skill },
        { element: projets, target: projet },
        { element: contact, target: contactMe }
    ];

    elements.forEach(item => {
        item.target.classList.remove('nav-actived');
    });

    elements.forEach(item => {
        const rect = item.element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;

        if (Math.abs(elementCenter - windowCenter) <= 300) {
            item.target.classList.add('nav-actived');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();


const navLinks = document.querySelectorAll('.link'); 

function scrollToElement(element) {
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const windowCenter = window.innerHeight / 2;
    const scrollTo = window.scrollY + elementCenter - windowCenter;

    window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
    });
}


navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = link.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            scrollToElement(targetElement);
        }
    });
});




const logos = document.querySelectorAll('.gmail-logo, .fa-linkedin, .fa-mobile-screen-button, .fa-github');
const contents = document.querySelectorAll('.content-logo');

// Ajouter un événement de clic à chaque logo
logos.forEach(logo => {
    logo.addEventListener('click', () => {
        // Récupérer l'ID du logo (gmail ou linkedin)
        const logoId = logo.getAttribute('data-id');
        
        // Trouver le conteneur de contenu correspondant à ce logo
        const content = document.querySelector(`.content-logo.${logoId}`);
        
        // Si le contenu est actuellement caché, l'afficher, sinon le cacher
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';  // Afficher le contenu
            logo.classList.add('scale')
        } else {
            content.style.display = 'none';   // Masquer le contenu
            logo.classList.remove('scale')
        }
    });
});


document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('darkMode') === 'enabled'){
        enableDarkMode()
    }else{
        disabledDarkMode()
    }
})

toggleOn.addEventListener('click', enableDarkMode)
toggleOff.addEventListener('click', disabledDarkMode)