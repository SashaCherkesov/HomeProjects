import '../style/index.scss';

let num;
let radius = 200;
let wrap = 400;
let block = document.getElementsByClassName('block');
let inputBtn = document.querySelector('.get_input');
let input = document.getElementsByTagName('input');
let garlandBox = document.querySelector('.garland_box');



inputBtn.addEventListener('focus', ()=> {

    console.log(input[0].value)
    let result = input[0].value;
    num = result;
    console.log(num);

    if(block.length < num){
        for(let i = 0; i < num; i++){
            let createDiv = document.createElement('div');
            garlandBox.appendChild(createDiv);
            createDiv.setAttribute('class','block');
        };
        
    }if(block.length > num){
        for(let i = block.length; i > num; i--){
            block[0].parentNode.removeChild(block[0]);
        };
    };
   
    console.log('длина блок = ' + block.length)
      
    for(let i = 0; i < num; i++){
        let f = 2 / num * i * Math.PI;
        let left = 2.33 * wrap + radius * Math.sin(f) + 'px';
        let top = 0.6 * wrap + radius * Math.cos(f) + 'px';
        block[i].style.left = left;
        block[i].style.top = top;
    };

});

inputBtn.addEventListener('click', ()=> {
    setInterval(() => {
        let random = Math.floor(Math.random()*block.length);
        let colorRandom = block[random].classList.toggle('red');
        return[colorRandom];
    }, 200);
    setInterval(() => {
        let random = Math.floor(Math.random()*block.length);
        let colorRandom = block[random].classList.toggle('blue');
        return[colorRandom];
    }, 200);
    setInterval(() => {
        let random = Math.floor(Math.random()*block.length);
        let colorRandom = block[random].classList.toggle('green');
        return[colorRandom];
    }, 200);
});



    