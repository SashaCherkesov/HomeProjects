import '../style/index.scss';
import '../style/media.scss';

const content = [
    {
        img: '/img/Final_1.gif',
        title: 'Ну привіт! Ми зачекалися🤗',
        description: 'Повертай кошти від покупок онлайн та офлайн. Це супер легко! <br><br><br> Магазин виплачує нам винагороду від твоєї купівлі, а ми ділимося з тобою - це і є кешбек. А ще ти можеш додавати акції магазину, кешбек від банків та від TIPSMART.'
    },
    {
        img: '/img/Final_3.gif',
        title: 'Вибирай магазин',
        description: "У розділі “Магазини та сервіси” (на сайті або у додатку) знаходь улюблені онлайн-магазини або офлайн-локації. О таак! Кешбек тепер можна отримати навіть у кав’ярні 😎"
    },
    {
        img: '/img/Final_3.gif',
        title: 'Правила',
        description: "Нічого складного. Перед купівлею просто ознайомся зі ставками кешбека, часом нарахування та правилами магазину. А ще не забудь відключити блокувальник реклами😊"
    }

];

let btnBack = document.querySelector('.btn_back');
let btnNext = document.querySelector('.btn_next');
let slideDot = document.querySelectorAll('.slide_dot');
let title = document.querySelector('.pop_up_title');
let description = document.querySelector('.pop_up_description');
let popUpGif = document.querySelector('.gif');

window.addEventListener('load',()=>{
    title.innerHTML = content[0].title;
    description.innerHTML = content[0].description;
    popUpGif.src = content[0].img;
    slideDot[0].classList.add('active');
});

btnNext.addEventListener('click',function(){
    console.log(this);
    let dataId = this.getAttribute('data-id');
    console.log(dataId)
    if(dataId < content.length - 1){
        dataId++;
        title.innerHTML = content[dataId].title;
        description.innerHTML = content[dataId].description;
        popUpGif.scr = content[dataId].img;
        slideDot[dataId - 1].classList.remove('active');
        slideDot[dataId].classList.add('active');
        btnBack.style.display = 'flex';
        console.log(dataId);
        this.setAttribute('data-id', dataId);
    }if(dataId == 2){
        this.setAttribute('data-id', 0);
    }
});

btnBack.addEventListener('click',function(){
    console.log(this);
    let dataId = this.getAttribute('data-id');
    console.log(dataId)
    if(dataId < content.length + 1){
        dataId--;
        title.innerHTML = content[dataId].title;
        description.innerHTML = content[dataId].description;
        popUpGif.scr = content[dataId].img;
        slideDot[dataId + 1].classList.remove('active');
        slideDot[dataId].classList.add('active');
        console.log(dataId);
        this.setAttribute('data-id', dataId);
    }if(dataId == 0){
        btnBack.style.display = 'none';
        this.setAttribute('data-id', 2);
    }
});

