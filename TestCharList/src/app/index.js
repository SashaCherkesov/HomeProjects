import '../style/index.scss';

document.querySelector('.power').addEventListener('blur', () => {
    let power = document.querySelector('.power');
    let powerValue = power.value;
    let armor = document.querySelector('.armor')
    let hitPoints = document.querySelector('.hitpoint')
    
    armor.innerHTML = Math.floor(powerValue / 3);
    hitPoints.innerHTML = Math.floor(60 + +powerValue);
});

document.querySelector('.agility').addEventListener('blur', () => {
    let agility = document.querySelector('.agility');
    let agilityValue = agility.value;
    let dodge = document.querySelector('.dodge');

    dodge.innerHTML = Math.floor(agilityValue / 3);
});

document.querySelector('.intelligence').addEventListener('blur', () =>{
    let int = document.querySelector('.intelligence');
    let intValue = int.value;
    let energyShield = document.querySelector('.energy_shield');
    let manaPool = document.querySelector('.manapool');
    
    energyShield.innerHTML = Math.floor(intValue * 2);
    manaPool.innerHTML = Math.floor(60 + +intValue);
});

document.querySelector('.level').addEventListener('blur', () => {
    let level = document.querySelector('.level');
    let levelValue = level.value;
    let power = document.querySelector('.power');
    let agility = document.querySelector('.agility');
    let int = document.querySelector('.intelligence');

    power.value = +power.value + 3;
    agility.value = +agility.value + 2;
    int.value = +int.value + 1;
});

document.querySelector('.more_armor').addEventListener('blur', () => {
    let moreArmor = document.querySelector('.more_armor');
    let moreArmorValue = moreArmor.value;
    let armor = document.querySelector('.armor');

    armor.innerHTML = +armor.innerHTML + +moreArmorValue; 
});
document.querySelector('.more_dodge').addEventListener('blur', () => {
    let moreDodge = document.querySelector('.more_dodge');
    let moreDodgeValue = moreDodge.value;
    let dodge = document.querySelector('.dodge');

    dodge.innerHTML = +dodge.innerHTML + +moreDodgeValue; 
});
document.querySelector('.more_movespeed').addEventListener('blur', () => {
    let moreMovespeed = document.querySelector('.more_movespeed');
    let moreMovespeedValue = moreMovespeed.value;
    let movespeed = document.querySelector('.movespeed');

    movespeed.innerHTML = +movespeed.innerHTML + +moreMovespeedValue; 
});
document.querySelector('.more_hitpoint').addEventListener('blur', () => {
    let moreHitpoint = document.querySelector('.more_hitpoint');
    let moreHitpointValue = moreHitpoint.value;
    let hitpoint = document.querySelector('.hitpoint');

    hitpoint.innerHTML = +hitpoint.innerHTML + +moreHitpointValue; 
});
document.querySelector('.more_manapool').addEventListener('blur', () => {
    let moreManapool = document.querySelector('.more_manapool');
    let moreManapoolValue = moreManapool.value;
    let manapool = document.querySelector('.manapool');

    manapool.innerHTML = +manapool.innerHTML + +moreManapoolValue; 
});
document.querySelector('.more_energy_shield').addEventListener('blur', () => {
    let moreEnergyShield = document.querySelector('.more_energy_shield');
    let moreEnergyShieldValue = moreEnergyShield.value;
    let energyShield = document.querySelector('.energy_shield');

    energyShield.innerHTML = +energyShield.innerHTML + +moreEnergyShieldValue; 
});

document.querySelector('.items_first_btn').addEventListener('click', () => {
    let cancelBtn = document.querySelector('.cancel_items_first_btn');
    let btn = document.querySelector('.items_first_btn');
    let itemPlaceholder = document.querySelector('.items_first_level');

    let div = document.createElement('div');
    div.setAttribute('class','first_level_item');
    div.innerHTML = 'Палка с камнем';
    document.querySelector('.items_first_level').append(div);
    

    if(itemPlaceholder.childNodes.length == 0){
        cancelBtn.setAttribute('disabled','');
    }if(itemPlaceholder.childNodes.length > 0){
        cancelBtn.removeAttribute('disabled','');
    };

    if(itemPlaceholder.childNodes.length >= 7){
        btn.setAttribute('disabled','');
    }else if(itemPlaceholder.childNodes.length < 7){
        btn.removeAttribute('disabled','');
    };

    let power = document.querySelector('.power');
    let agility = document.querySelector('.agility');
    let int = document.querySelector('.intelligence');
    let armor = document.querySelector('.armor');

    power.value = +power.value + 3;
    agility.value = +agility.value + 2;
    int.value = +int.value + 1;
    armor.innerHTML = +armor.innerHTML + 1;

    

});

document.querySelector('.cancel_items_first_btn').addEventListener('click', () => {
    let cancelBtn = document.querySelector('.cancel_items_first_btn');
    let btn = document.querySelector('.items_first_btn');
    let itemPlaceholder = document.querySelector('.items_first_level');
    console.log(document.querySelector('.items_first_level').childNodes.length)

    itemPlaceholder.firstChild.remove();
    

    if(itemPlaceholder.childNodes.length == 0){
        cancelBtn.setAttribute('disabled','');
    }if(itemPlaceholder.childNodes.length > 0){
        cancelBtn.removeAttribute('disabled','');
    }

    if(itemPlaceholder.childNodes.length > 7){
        btn.setAttribute('disabled','');
    }else if(itemPlaceholder.childNodes.length < 7){
        btn.removeAttribute('disabled','');
    };

    let power = document.querySelector('.power');
    let agility = document.querySelector('.agility');
    let int = document.querySelector('.intelligence');
    let armor = document.querySelector('.armor');

    power.value = +power.value - 3;
    agility.value = +agility.value - 2;
    int.value = +int.value - 1;
    armor.innerHTML = +armor.innerHTML - 1;

    

});

document.querySelector('.items_second_btn').addEventListener('click', () => {
    let cancelBtn = document.querySelector('.cancel_items_second_btn');
    let btn = document.querySelector('.items_second_btn');
    let itemPlaceholder = document.querySelector('.items_second_level');

    let div = document.createElement('div');
    div.setAttribute('class','second_level_item');
    div.innerHTML = 'Палка с камнем';
    document.querySelector('.items_second_level').append(div);
    

    if(itemPlaceholder.childNodes.length == 0){
        cancelBtn.setAttribute('disabled','');
    }if(itemPlaceholder.childNodes.length > 0){
        cancelBtn.removeAttribute('disabled','');
    };

    if(itemPlaceholder.childNodes.length >= 7){
        btn.setAttribute('disabled','');
    }else if(itemPlaceholder.childNodes.length < 7){
        btn.removeAttribute('disabled','');
    };

    let power = document.querySelector('.power');
    let agility = document.querySelector('.agility');
    let int = document.querySelector('.intelligence');
    let armor = document.querySelector('.armor');

    power.value = +power.value + 3;
    agility.value = +agility.value + 2;
    int.value = +int.value + 1;
    armor.innerHTML = +armor.innerHTML + 1;
});

document.querySelector('.cancel_items_second_btn').addEventListener('click', () => {
    let cancelBtn = document.querySelector('.cancel_items_second_btn');
    let btn = document.querySelector('.items_second_btn');
    let itemPlaceholder = document.querySelector('.items_second_level');
    console.log(document.querySelector('.items_second_level').childNodes.length)

    itemPlaceholder.firstChild.remove();
    

    if(itemPlaceholder.childNodes.length == 0){
        cancelBtn.setAttribute('disabled','');
    }if(itemPlaceholder.childNodes.length > 0){
        cancelBtn.removeAttribute('disabled','');
    }

    if(itemPlaceholder.childNodes.length > 7){
        btn.setAttribute('disabled','');
    }else if(itemPlaceholder.childNodes.length < 7){
        btn.removeAttribute('disabled','');
    };

    let power = document.querySelector('.power');
    let agility = document.querySelector('.agility');
    let int = document.querySelector('.intelligence');
    let armor = document.querySelector('.armor');

    power.value = +power.value - 3;
    agility.value = +agility.value - 2;
    int.value = +int.value - 1;
    armor.innerHTML = +armor.innerHTML - 1;
});

document.querySelector('.img_btn').addEventListener('click', () => {

    let img = document.querySelector('.img');
    let input = document.querySelector('.img_href');
    let btn = document.querySelector('.img_btn');
    let inputValue = input.value;

    img.style.display = 'flex';
    btn.style.display = 'none';
    input.style.display = 'none';
    img.src = inputValue;
})