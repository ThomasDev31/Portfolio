/*
 * Gestion du boutton display et du lancement du son
 */

const audio = document.querySelector('audio')
console.log(audio)
audio.load()

let btn = document.querySelector('#show')
let container = document.querySelector('.container-global')
const containerBg = document.querySelector('.container-sider')

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    btn.classList.add('displaynone')
    container.classList.add('display')
    containerBg.classList.add('size')
    container.classList.remove('container-global')
    burger.classList.add('burger-show')
    audio.currentTime = 0;
    audio.play()
    window.scrollTo({top:400,
        behavior:"smooth"
    })
})



/*
*Gestion de la flèche de renvoie en haut
*/ 

let arrow = document.querySelector('.arrow')

window.onscroll = function(){
    if (window.scrollY >= '100'){
        arrow.style.display ="block"
        arrow.addEventListener('click',()=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior: "smooth"

            })  
        })
    }else{
        arrow.style.display ="none"
    }
    
}



/*
 * Gestion de la nav burger
 */
const burger = document.querySelector('.burger');
let bars = document.querySelectorAll('.barBlack');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    bars.forEach(element => {
        element.classList.toggle('open')
    });
    nav.classList.toggle('display')
})



/*
 * Gestion du dark mode
 */
const toggleOn = document.querySelector('.fa-toggle-on');
const toggleOff = document.querySelector('.fa-toggle-off');
let sections = document.querySelectorAll('.white')
let textWhite = document.querySelectorAll('.text-white')
let textBlack = document.querySelectorAll('.text-black')
let main = document.querySelector('main')


/*
*Start dark mode
*/
toggleOn.addEventListener('click', () => {
    toggleOn.classList.remove('display');
    toggleOn.classList.add('displaynone');

    toggleOff.classList.add('display');
    toggleOff.classList.remove('displaynone');

    main.classList.add('linear-black')
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

    
})

/*
*Remove dark mode
*/

toggleOff.addEventListener('click', () => {
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
})


let links = document.querySelectorAll('.link')
console.log(links)

links.forEach(link =>{
    link.addEventListener('click',()=>{
        nav.classList.remove('display')
        bars.forEach(element => {
            element.classList.remove('open')
        });

    })
})