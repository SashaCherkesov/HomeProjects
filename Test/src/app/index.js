import '../style/index.scss';

let background = [
    {
        img : 'url(https://img3.akspic.ru/image/126089-klan_uchiha-kakashi_hatake-sharingan-illustracia-animaciya-1920x1080.jpg?attachment=1)'
    },
    {
        img : 'url(https://vignette.wikia.nocookie.net/naruto/images/d/db/Pein_Rikud%C5%8D.png/revision/latest?cb=20150127162053)'
    },
    {
        img : 'url(https://wallpapercave.com/wp/wp2624857.jpg)'
    },
    {
        img : 'url(https://wallpaperaccess.com/full/2337496.jpg)'
    },
    {
        img : 'url(https://images4.alphacoders.com/964/964711.png)'
    },
    {
        img : 'url(https://wallpaperaccess.com/full/140034.jpg)'
    },
    {
        img : 'url(https://wallpaperset.com/w/full/c/d/4/148166.jpg)'
    },
    {
        img : 'url(https://vignette.wikia.nocookie.net/naruto/images/e/e2/Zetsu_dividing.png/revision/latest?cb=20151004011115)'
    },
    {
        img : 'url(https://wallpaperaccess.com/full/861897.jpg)'
    },
]

let el = document.querySelectorAll('.move');
let active = document.getElementsByClassName('active');
let body = document.getElementsByClassName('body');

document.addEventListener("DOMContentLoaded", ()=>{
    
    for(let i = 0; i < el.length; i++){
        el[i].addEventListener('click', ()=>{
            el[i].classList.add('active');
            
            let random = Math.floor(Math.random()*1800);
            let randomImg = Math.floor(Math.random()*10);
            document.body.style.backgroundImage = background[randomImg].img;
            active[i].style.marginLeft = random + 'px';
        })
    }
});


