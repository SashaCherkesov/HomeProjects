import '../style/index.scss';
import '../style/media.scss';

const elements = [
    {
        img: 'https://cryogen.ru.com/pictures/9.png',
        title: 'Водород',
        description: 'Водоро́д (H, лат. hydrogenium) — химический элемент периодической системы с обозначением H и атомным номером 1, самый лёгкий из элементов периодической таблицы. Его одноатомная форма — самое распространённое химическое вещество во Вселенной, составляющее примерно 75 % всей барионной массы. Звёзды, кроме компактных, в основном состоят из водородной плазмы.'
    },
    {
        img: 'https://cryogen.ru.com/pictures/8.png',
        title: 'Гелий',
        description: 'Ге́лий (He, лат. helium) — химический элемент VIII группы короткой формы (18-й группы длинной формы) первого периода периодической системы химических элементов, имеет атомный номер 2. Возглавляет группу инертных газов. Как простое вещество представляет собой инертный одноатомный газ без цвета, вкуса и запаха.'
    },
    {
        img: 'https://vignette.wikia.nocookie.net/astroneer/images/9/93/%D0%9B%D0%B8%D1%82%D0%B8%D0%B9_2.png/revision/latest?cb=20190626114610&path-prefix=ru',
        title: 'Литий',
        description: 'Ли́тий — химический элемент первой группы, второго периода периодической системы с атомным номером 3. Как простое вещество представляет собой мягкий щелочной металл серебристо-белого цвета'
    },
    {
        img: 'https://lh3.googleusercontent.com/proxy/oB-1Q2OFYLSpa5AeP7JDDe-eGM9S_f7lveu6kUx54YPc2B_iFYGcLJ_Umsp-t_F-Ss4cE_3YH__Tpq4',
        title: 'Бери́ллий',
        description: 'Бери́ллий (Be, лат. beryllium) — химический элемент второй группы, второго периода периодической системы с атомным номером 4. Как простое вещество представляет собой относительно твёрдый металл светло-серого цвета, имеет очень высокую стоимость[3]. Чрезвычайно токсичен.'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Boron_%28The_fifth_Element%29.jpg/300px-Boron_%28The_fifth_Element%29.jpg',
        title: 'Бор',
        description: 'Бор (B, лат. borum) — химический элемент 13-й группы, второго периода периодической системы (по устаревшей короткой форме периодической системы принадлежит к главной подгруппе III группы, или к группе IIIA) с атомным номером 5. Бесцветное, серое или красное кристаллическое либо тёмное аморфное вещество. Известно более 10 аллотропных модификаций бора, образование и взаимные переходы которых определяются температурой, при которой бор был получен'
    },
    {
        img: 'https://images.ua.prom.st/1925849411_w640_h640_uglerod-tehnicheskij-sazha.jpg',
        title: 'Углеро́д',
        description: 'Углеро́д (C, лат. carboneum) — химический элемент, обозначающийся буквой C и имеющий атомный номер 6. Элемент является четырехвалентным неметаллом, т. е. имеет четыре свободных электрона для формирования ковалентных химических связей.'
    },
    {
        img: 'https://cryogen.ru.com/pictures/13.png',
        title: 'Азо́т',
        description: 'Азо́т (N, лат. nitrogenium) — химический элемент 15-й группы (по устаревшей короткой форме периодической системы принадлежит к главной подгруппе V группы, или к группе VA), второго периода периодической системы с атомным номером 7.'
    },
    {
        img: 'https://cryogen.ru.com/pictures/12.png',
        title: 'Кислоро́д',
        description: 'Кислоро́д (O, лат. oxygenium) — химический элемент 16-й группы (по устаревшей короткой форме периодической системы принадлежит к главной подгруппе VI группы, или к группе VIA), второго периода периодической системы, с атомным номером 8.'
    },
    {
        img: 'https://istra-gaz.ru/wp-content/uploads/2019/05/Ftor_gaz_1.jpg',
        title: 'Фтор',
        description: 'Фтор (устар. флюор; F, лат. fluorum) — химический элемент 17-й группы второго периода периодической системы (по устаревшей короткой форме периодической системы принадлежит к главной подгруппе VII группы, или к группе VIIA) с атомным номером 9'
    },
    {
        img: 'https://i2.rozetka.ua/goods/11396014/76821204_images_11396014182.jpg',
        title: 'Нео́н',
        description: 'Нео́н (Ne, лат. neon) — химический элемент 18-й группы (по устаревшей классификации — элемент главной подгруппы VIII группы) второго периода периодической системы с атомным номером 10'
    },
    {
        img: 'https://bvb-alyans.ru/media/uploads/images/2_jlUT1lV.jpg',
        title: 'На́трий',
        description: 'На́трий (Na, лат. natrium) — химический элемент первой группы, третьего периода периодической системы Менделеева, с атомным номером 11'
    },
    {
        img: 'https://agro.bio/image/cache/catalog/benefit/mg-800x800.png',
        title: 'Ма́гний',
        description: 'Ма́гний — элемент второй группы (по старой классификации — главной подгруппы второй группы), третьего периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 12'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Aluminium-4.jpg/250px-Aluminium-4.jpg',
        title: 'Алюми́ний',
        description: 'Алюми́ний (Al, лат. Aluminium) — элемент 13-й группы периодической таблицы химических элементов (по устаревшей классификации — элемент главной подгруппы III группы), третьего периода, с атомным номером 13'
    },
    {
        img: 'https://med-magazin.ua/images/products/6/products.6612.1.b.jpg',
        title: 'Кре́мний',
        description: 'Кре́мний (Si от лат. Silicium) — элемент четырнадцатой группы (по старой классификации — главной подгруппы четвёртой группы), третьего периода периодической системы химических элементов с атомным номером 14.'
    },
    {
        img: 'https://himfarminvest.com.ua/image/cache/catalog/demo/products_watermarked/111/krasnyjfosfor-1000x1000.png',
        title: 'Фо́сфор',
        description: 'Фо́сфор (от др.-греч. φῶς — свет и φέρω — несу; φωσφόρος — светоносный; лат. Phosphorus) — химический элемент 15-й группы (по устаревшей классификации — главной подгруппы пятой группы) третьего периода периодической системы Д. И. Менделеева;'
    },
    {
        img: 'https://eltemiks-lab.ru/wp-content/uploads/2018/02/Sera.jpg',
        title: 'Се́ра',
        description: 'Се́ра — элемент 16-й группы (по устаревшей классификации — главной подгруппы VI группы), третьего периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 16.'
    },
    {
        img: 'https://i2.rozetka.ua/goods/1872382/14690846_images_1872382256.jpg',
        title: 'Хлор',
        description: 'Хлор (от греч. χλωρός — «жёлто-зелёный») — химический элемент с атомным номером 17.Простое вещество хлор при нормальных условиях — ядовитый газ желтовато-зелёного цвета, тяжелее воздуха, с резким запахом и сладковатым, «металлическим» вкусом. Молекула хлора двухатомная (формула Cl2). '
    },
    {
        img: 'https://vignette.wikia.nocookie.net/science/images/6/61/%D0%90%D1%80%D0%B3%D0%BE%D0%BD.jpg/revision/latest/scale-to-width-down/340?cb=20140404115000&path-prefix=ru',
        title: 'Арго́н',
        description: 'Арго́н — химический элемент 18-й группы периодической таблицы химических элементов (по устаревшей классификации — элемент главной подгруппы VIII группы) третьего периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 18'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDQ9dpBlKpoAc2Y4PTvM5PsLP64jPWXr4ZUg&usqp=CAU',
        title: 'Ка́лий',
        description: 'Ка́лий — элемент первой группы (по старой классификации — главной подгруппы первой группы), четвёртого периода системы химических элементов Д. И. Менделеева, с атомным номером 19'
    },
    {
        img: 'https://images.ua.prom.st/1366109969_kaltsij-hloristyj-hlorid.jpg',
        title: 'Ка́льций',
        description: 'Ка́льций (Ca от лат. Calcium) — элемент второй группы (по старой классификации — главной подгруппы второй группы), четвёртого периода, с атомным номером 20.'
    },
    {
        img: 'https://bvb-alyans.ru/media/uploads/images/skandij.jpg',
        title: 'Ска́ндий',
        description: 'Ска́ндий (химический символ — Sc; лат. Scandium) — элемент третьей группы (по старой классификации — побочной подгруппы третьей группы), четвёртого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 21'
    },
    {
        img: 'https://www.sacrarium.com.ua/content/images/thumbs/0005398_kolco-2-mm-titan-celnoe-s-segmentom-effekt-celnogo-besovnogo-kolca_550.jpeg',
        title: 'Тита́н',
        description: 'Тита́н — химический элемент с атомным номером 22[4]. Принадлежит к 4-й группе периодической таблицы химических элементов , находится в четвёртом периоде таблицы. Атомная масса элемента 47,867(1) а. е. м.[1]'
    },
    {
        img: 'https://specmetal.ru/images/%D0%B2%D0%B0%D0%BD%D0%B0%D0%B4%D0%B8%D0%B9/%D0%B2%D0%B0%D0%BD%D0%B0%D0%B4%D0%B8%D0%B8%CC%86.png',
        title: 'Вана́дий',
        description: 'Вана́дий — химический элемент с атомным номером 23[3]. Принадлежит к 5-й группе периодической таблицы химических элементов , находится в четвёртом периоде таблицы'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwJrmYRPsBK-tQ47JuWvobdbFXh-ObUGnsmQ&usqp=CAU',
        title: 'Хром',
        description: 'Хром — элемент 6-й группы (по устаревшей классификации — побочной подгруппы 6-й группы) 4-го периода периодической системы химических элементов Д. И. Менделеева с атомным номером 24'
    },
    {
        img: 'https://chem.ru/uploads/posts/2019-12/1577396778_manganese-ingots.jpg',
        title: 'Ма́рганец',
        description: 'Ма́рганец — элемент 7-й группы (по устаревшей классификации — побочной подгруппы седьмой группы) четвёртого периода периодической системы химических элементов Д. И. Менделеева с атомным номером 25'
    },
    {
        img: 'https://lh3.googleusercontent.com/proxy/1G0CRfUYwg7NyR8mvxH9HLLznPqBhFoVK7m7BWU0_TwMYpoT97-1iruaPit8Ah86d98A0RDIeri-Be0uXp4DQ1wvl1bQIMUAldlJ0x2c',
        title: 'Желе́зо',
        description: 'Желе́зо (Fe от лат. Ferrum) — элемент восьмой группы  четвёртого периода периодической системы химических элементов Д. И. Менделеева с атомным номером 26'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Cobalt-3.jpg/200px-Cobalt-3.jpg',
        title: 'Ко́бальт',
        description: 'Ко́бальт — химический элемент с атомным номером 27[2]. Принадлежит к 9-й группе периодической таблицы химических элементов , находится в четвёртом периоде таблицы'
    },
    {
        img: 'https://resursmsk.ru/d/nikel.jpg',
        title: 'Ни́кель ',
        description: 'Ни́кель — химический элемент десятой (по устаревшей короткопериодной форме — побочной подгруппы восьмой) группы, четвёртого периода периодической системы, с атомным номером 28'
    },
    {
        img: 'https://othodynet.ru/wp-content/uploads/2018/10/1605371_med-1024x1024.jpg',
        title: 'Медь',
        description: 'Медь (Cu от лат. Cuprum) — элемент одиннадцатой группы четвёртого периода (побочной подгруппы первой группы) периодической системы химических элементов Д. И. Менделеева, с атомным номером 29'
    },
    {
        img: 'https://bvb-alyans.ru/media/uploads/images/granuly_tsink.jpg',
        title: 'Цинк',
        description: 'Цинк — химический элемент 12-й группы (по устаревшей классификации — побочной подгруппы второй группы), четвёртого периода периодической системы, с атомным номером 30'
    },
    {
        img: 'https://bigpicture.ru/wp-content/uploads/2013/02/gallium04.jpg',
        title: 'Га́ллий',
        description: 'Га́ллий — элемент 13-й группы  четвёртого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 31'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Polycrystalline-germanium.jpg/250px-Polycrystalline-germanium.jpg',
        title: 'Герма́ний',
        description: 'Герма́ний — химический элемент 14-й группы  4-го периода периодической системы химических элементов, с атомным номером 32'
    },
    {
        img: 'https://catalogmineralov.ru/pic/2011/131736030611.jpg',
        title: 'Мышья́к',
        description: 'Мышья́к (лат. Arsenicum, химический символ — As) — химический элемент 15-й группы  четвёртого периода периодической системы; имеет атомный номер 33'
    },
    {
        img: 'data:image/jpeg;base64,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',
        title: 'Селе́н',
        description: 'Селе́н — химический элемент с атомным номером 34[3]. Принадлежит к 16-й группе периодической таблицы химических элементов , находится в четвёртом периоде таблицы'
    },
    {
        img: 'https://images.ua.prom.st/231638450_w640_h640_brom-elementarnyj-996.jpg',
        title: 'Бром',
        description: 'Бром (от др.-греч. βρῶμος — «зловонный», «вонючий») — химический элемент с атомным номером 35[3'
    },
    {
        img: 'data:image/jpeg;base64,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',
        title: 'Крипто́н',
        description: 'Крипто́н — химический элемент с атомным номером 36[4]. Принадлежит к 18-й группе периодической таблицы химических элементов , находится в четвёртом периоде таблицы.'
    },
    {
        img: 'https://lh3.googleusercontent.com/proxy/l7DE9k9KWtJNnqNtpYx-kimsaMFxYfXlHAkDDLRCBTTl1TxGTDKDVXXT5DjmP8H6eDX-9D0fQvhzBpL8-VMB',
        title: 'Руби́дий',
        description: 'Руби́дий — элемент 1-й группы , пятого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 37.'
    },
    {
        img: 'https://lh3.googleusercontent.com/proxy/G2mni1Ae41HAN_kb3-hFfFlQfBN6NdrEKe5hkUWWP6oewSauiXMfKZL_gPP_gzs9Qm06G2JdHqPFA81K1OpqRpRW_2SmzpGrZsEF1WcFoqBbGSBf63tZKSPJjw',
        title: 'Стро́нций',
        description: 'Стро́нций — химический элемент с атомным номером 38[5]. Принадлежит к 2-й группе периодической таблицы химических элементов , находится в пятом периоде таблицы'
    },
    {
        img: 'https://www.graycell.ru/picture/big/ittriy.jpg',
        title: 'И́ттрий',
        description: 'И́ттрий — элемент 3-й группы  пятого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 39'
    },
    {
        img: 'data:image/jpeg;base64,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',
        title: 'Цирко́ний',
        description: 'Цирко́ний — химический элемент с атомным номером 40[3]. Принадлежит к 4-й группе периодической таблицы химических элементов , находится в пятом периоде таблицы'
    },
    {
        img: 'https://images.ua.prom.st/1074923255_w640_h640_1074923255.jpg',
        title: 'Нио́бий',
        description: 'Нио́бий — элемент пятой группы  пятого периода периодической системы химических элементов Д. И. Менделеева, атомный номер — 41.'
    },
    {
        img: 'https://specmetal.ru/images/%D0%BC%D0%BE%D0%BB%D0%B8%D0%B1%D0%B4%D0%B5%D0%BD/%D0%BC%D0%BE%D0%BB%D0%B8%D0%B1%D0%B4%D0%B5%D0%BD%20%D1%80%D1%83%D0%B4%D0%B0.png',
        title: 'Молибде́н',
        description: 'Молибде́н — элемент шестой группы  пятого периода периодической системы химических элементов Д. И. Менделеева, атомный номер 42'
    },
    {
        img: 'https://www.atomic-energy.ru/files/styles/center/public/images/2017/06/s13.jpg?itok=uXkWhNnk',
        title: 'Техне́ций',
        description: 'Техне́ций — элемент седьмой группы , пятого периода периодической системы химических элементов, атомный номер — 43'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Ruthenium_crystal.jpg',
        title: 'Руте́ний',
        description: 'Руте́ний — элемент восьмой группы пятого периода периодической системы химических элементов, атомный номер — 44.'
    },
    {
        img: 'https://www.silver-mania.ru/articles/wp-content/uploads/2012/09/rhodium-27-09-2012.jpg',
        title: 'Ро́дий',
        description: 'Ро́дий (химический символ — Rh; лат. Rhodium) — элемент девятой группы пятого периода периодической системы химических элементов, атомный номер — 45'
    },
    {
        img: 'data:image/jpeg;base64,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',
        title: 'Палла́дий',
        description: 'Палла́дий — химический элемент с атомным номером 46[3]. Принадлежит к 10-й группе периодической таблицы химических элементов , находится в пятом периоде таблицы'
    },
    {
        img: 'https://finesell.ru/images/articles/serebro/serebro-preview.jpg',
        title: 'Серебро́',
        description: 'Серебро́ (Ag от лат. Argentum) — элемент 11 группы , пятого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 47.'
    },
    {
        img: 'https://vignette.wikia.nocookie.net/masseffect/images/d/d1/MEA_%D0%9A%D0%B0%D0%B4%D0%BC%D0%B8%D0%B9.png/revision/latest?cb=20200229125305&path-prefix=ru',
        title: 'Ка́дмий',
        description: 'Ка́дмий — элемент двенадцатой группы , пятого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 48.'
    },
    {
        img: 'https://institut-seltene-erden.de/wp-content/uploads/2019/08/Indium-Metall.jpg',
        title: 'И́ндий',
        description: 'И́ндий — элемент 13-й группы периодической таблицы химических элементов (по устаревшей классификации — элемент главной подгруппы III группы), атомный номер 49'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Tin-2.jpg/220px-Tin-2.jpg',
        title: 'О́лово',
        description: 'О́лово (химический символ — Sn; лат. Stannum) — элемент 14-й группы периодической системы химических элементов , пятого периода, с атомным номером 50'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Antimony-4.jpg/250px-Antimony-4.jpg',
        title: 'Сурьма́',
        description: 'Сурьма́ (химический символ — Sb; лат. Stibium) — химический элемент 15-й группы  пятого периода периодической системы химических элементов Д. И. Менделеева; имеет атомный номер 51'
    },
    {
        img: 'https://tvoi-uvelirr.ru/wp-content/uploads/2015/09/%D0%A2%D0%B5%D0%BB%D0%BB%D1%83%D1%80-%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B5%D0%BB%D0%BB%D1%83%D1%80%D0%B0-%D0%A1%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0-%D1%82%D0%B5%D0%BB%D0%BB%D1%83%D1%80%D0%B0-1.jpg',
        title: 'Теллу́р',
        description: 'Теллу́р — химический элемент 16-й группы , 5-го периода в периодической системе, имеет атомный номер 52'
    },
    {
        img: 'data:image/jpeg;base64,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',
        title: 'Ио́д',
        description: 'Ио́д[4] (тривиальное (общеупотребительное) название — йод[5]; от греч. ἰώδης — «фиалковый (фиолетовый)») — химический элемент с атомным номером 53'
    },
    {
        img: 'https://i1.rozetka.ua/goods/8890269/62360737_images_8890269218.jpg',
        title: 'Ксено́н',
        description: 'Ксено́н — элемент 18-й группы , пятого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 54'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Caesium-3.jpg/1200px-Caesium-3.jpg',
        title: 'Це́зий',
        description: 'Це́зий (химический символ — Cs; лат. Caesium) — элемент 1-й группы  шестого периода системы химических элементов Д. И. Менделеева, атомный номер — 55'
    },
    {
        img: 'https://bvb-alyans.ru/media/uploads/images/barij.jpg',
        title: 'Ба́рий',
        description: 'Ба́рий — элемент 2-й группы, шестого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 56.'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Lanthanum-2.jpg',
        title: 'Ланта́н',
        description: 'Ланта́н — химический элемент 3-й группы шестого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 57, атомная масса — 138,9055['
    },
    {
        img: 'https://lh3.googleusercontent.com/proxy/TyRMDVWltawME5Ti0Hvma8tp2iwm1I0fbvXxxQHuXbd5IuX-dO7o_NOwvGEDjMQVEOBCouZUcwgta8nV0c1tRlyZYhJ4n3aDASCBiCn_EfJfRmI',
        title: 'Люте́ций',
        description: 'Люте́ций (химический символ — Lu; лат. Lutetium) — химический элемент, относящийся к группе лантаноидов'
    },
    {
        img: 'https://img01.flagma.ua/photo/gafniy-3750020_big.jpg',
        title: 'Га́фний',
        description: 'Га́фний — химический элемент 4-й группы длиннопериодной формы периодической системы Д. И. Менделеева, шестого периода, с атомным номером 72.'
    },
    {
        img: 'https://s.0462.ua/s/41/section/doska/upload/pers/41/img/doska/000/000/010/_147707329525_592761372ccc7.jpg',
        title: 'Танта́л',
        description: 'Танта́л — химический элемент с атомным номером 73 в Периодической системе химических элементов Д. И. Менделеева, обозначается символом Ta'
    },
    {
        img: 'https://specmetal.ru/images/%D0%B2%D0%BE%D0%BB%D1%8C%D1%84%D1%80%D0%B0%D0%BC/%D1%81%D0%B2%D0%BE%D0%B8%CC%86%D1%81%D1%82%D0%B2%D0%B0%20%D0%B2%D0%BE%D0%BB%D1%8C%D1%84%D1%80%D0%B0%D0%BC%D0%B0.png',
        title: 'Вольфра́м',
        description: 'Вольфра́м — химический элемент с атомным номером 74 в Периодической системе химических элементов Д. И. Менделеева, обозначается символом W '
    },
    {
        img: 'https://specmetal.ru/images/%D0%A0%D0%B5%D0%BD%D0%B8%D0%B9/%D1%80%D0%B5%D0%BD%D0%B8%D0%B8%CC%86.png',
        title: 'Ре́ний',
        description: 'Ре́ний (лат. Rhenium) — химический элемент с атомным номером 75 в Периодической системе химических элементов Д. И. Менделеева, обозначается символом Re'
    },
    {
        img: 'https://lh3.googleusercontent.com/proxy/0DUEBy95-XD6LvEfdyrb2SoBE8ltoPinI2ggaKN8NQ0Fs1NJqDXRIzjPCja2se-3dE7eznoVZva4',
        title: 'О́смий',
        description: 'О́смий (лат. Osmium) — химический элемент с атомным номером 76 в Периодической системе химических элементов Д. И. Менделеева, обозначается символом Os'
    },
    {
        img: 'https://www.krastsvetmet.ru/components/com_jshopping/files/img_products/full_Ir_Iridium__III__Chloride_Hydrate.jpg',
        title: 'Ири́дий',
        description: 'Ири́дий (лат. Iridium, обозначается знаком Ir) — химический элемент с атомным номером 77 в периодической системе химических элементов Д. И. Менделеева. Иридий — очень твёрдый,'
    },
    {
        img: 'https://img.zlato.ua/upload/resize_cache/iblock/30e/250_250_1/09100100.jpg',
        title: 'Пла́тина',
        description: 'Пла́тина (Pt от лат. Platinum) — химический элемент 10-й группы, 6-го периода периодической системы химических элементов, с атомным номером 78; блестящий благородный металл серебристо-белого цвета.'
    },
    {
        img: '',
        title: 'Зо́лото',
        description: 'Зо́лото (Au от лат. Aurum)[5] — элемент 11 группы , шестого периода периодической системы химических элементов, с атомным номером 79. Простое вещество золото — благородный металл жёлтого цвета.'
    },
    {
        img: 'https://pcgroup.ru/files/uploads/Rtutj-3.jpg',
        title: 'Ртуть',
        description: 'Ртуть (Hg, от лат. Hydrargyrum) — элемент шестого периода периодической системы химических элементов Д. И. Менделеева с атомным номером 80, относящийся к подгруппе цинка, 12-й группе '
    },
    {
        img: 'https://lh3.googleusercontent.com/proxy/eK7U9qLFekUMkRz-dBKh85F0oUyH8BhyJgzatdfW91rjPzbuOmrVBLWEYBV8dXsTLcXmiLEwgcZL0cw',
        title: 'Та́ллий',
        description: 'Та́ллий — элемент 13-й группы периодической таблицы химических элементов , шестого периода, атомный номер 81'
    },
    {
        img: 'https://lh3.googleusercontent.com/proxy/iCBij5CvoDXlpM3L4JN3JBNqvjOfYg3x1uWcvgMTgc-3lJUSyTTkbMpPbCvorJ9gZbycnFWqE0sz5CZOt82zya8TFe7p5H7if_NjMVSXPEVGC4jrXRQKtglF',
        title: 'Свине́ц',
        description: 'Свине́ц (лат. Plumbum; обозначается символом Pb) — элемент 14-й группы, шестого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 82 и, таким образом, содержит магическое число протонов.'
    },
    {
        img: 'https://i.pinimg.com/originals/f4/30/a2/f430a24674e716d23b2790b5665dbcc6.jpg',
        title: 'Ви́смут',
        description: 'Ви́смут — химический элемент 15-й группы шестого периода периодической системы химических элементов Д. И. Менделеева; имеет атомный номер 83'
    },
    {
        img: 'https://chto-takoe-lyubov.net/wp-content/uploads/2015/07/poloniy-stikhi.jpg',
        title: 'Поло́ний',
        description: 'Поло́ний — радиоактивный химический элемент 16-й группы, 6-го периода в периодической системе Д. И. Менделеева, с атомным номером 84,'
    },
    {
        img: 'https://theodoregray.com/PeriodicTable/Samples/069/s10s.JPG',
        title: 'Аста́т',
        description: 'Аста́т — химический элемент с атомным номером 85[4]. Принадлежит к 17-й группе периодической таблицы химических элементов, находится в шестом периоде таблицы.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1577883420_rn.jpg',
        title: 'Радо́н',
        description: 'адо́н — элемент 18-й группы периодической системы химических элементов Д. И. Менделеева , 6-го периода, с атомным номером 86. Обозначается символом Rn'
    },
    {
        img: 'https://vignette.wikia.nocookie.net/themonsteruniverse/images/7/7e/1aeHgq9MpfQ.jpg/revision/latest/scale-to-width-down/340?cb=20180623150932&path-prefix=ru',
        title: 'Фра́нций',
        description: 'Фра́нций — элемент 1-й группы седьмого периода периодический системы химических элементов Д. И. Менделеева, с атомным номером 87.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1577883758_ra.jpg',
        title: 'Ра́дий',
        description: 'Ра́дий — элемент 2-й группы, седьмого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 88.'
    },
    {
        img: 'https://helperia.ru/public/images/articles/2/28/89.JPG',
        title: 'Акти́ний',
        description: 'Акти́ний — химический элемент с атомным номером 89, обозначается в периодической системе элементов символом Ac '
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578390046_lourensij.jpg',
        title: 'Лоуре́нсий',
        description: 'Лоуре́нсий (Lr, англ. Lawrencium) — искусственно полученный химический элемент группы актиноидов с атомным номером 103. '
    },
    {
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIWFRUVGB4ZGBcWFhcYGBgVGhcdGBcVFRoYKCggGBslGxcXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGw8QGzcmHyM3NTcrNzctNzc3Ny0yNzctNTc3MTY3Kzg1LTQyNy83LTc4Ny81Njc3NSw3MDY3NzctN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYCAwUHAQj/xABFEAABAwEFBQYDBQUGBQUAAAABAAIDEQQFEiExE0FRcZEGIjNhcoEHFVMyQqGxwSNSssLRFDRigpLwNXOi0vEWFyRD4f/EABoBAQACAwEAAAAAAAAAAAAAAAACAwQFBgH/xAAqEQEAAQIFAQYHAAAAAAAAAAAAAQIRAwQSIUExE1FhcZGhBRRSU4Gx8f/aAAwDAQACEQMRAD8A8fvC3SCR4D3ABxoKqP8AMJfqO6pefiv9RUq4Ln/tL3Nx4MLa1w4q50pqOKCL8wl+o7qnzCX6juqsJ7IMGX9rZ/pH/cvrexoP2bS1x4Yf6OKCu/MJfqO6p8wl+o7qsr0uySB+CQeYIzBHEFSuz9yOtLnd7C1tKupXXQDoUEP5hL9R3VPmEv1HdV0b9uqCFoMc4kdioWgtNBQ5mnmFxEEr5hL9R3VPmEv1HdVFRBK+YS/Ud1T5hL9R3VRUQSvmEv1HdU+YS/Ud1WmzwOe4MY0uc40AAqSeAUu+bomssmzmbRxaHChqKHgRwNRzCjNdMVab7jV8wl+o7qnzCX6juqirq3n2etEEccsjKMkAII3V0a/911M6efNKq6aZiJneegifMJfqO6p8wl+o7qoqKQlfMJfqO6p8wl+o7qoqIJXzCX6juqfMJfqO6qda7gfHZhO80JIGAjMA6EmuR8qLkNaSaAVJ3IJPzCX6juqfMJfqO6rtw9kiGh007IidAaH2JJAryqoV9dnpLOA+ofGfvN3cKjdXigg/MJfqO6p8wl+o7qoq22aB0j2saKucaAINvzCX6juq+x3hLUftHa8VMv8AuQ2bAC/HjB+7SlKeeeq5Ueo5oLzRfURBTbz8V/qK7/w/8aT0fzBcC8/Ff6iu/wDD/wAaT0fzBBwL18aX/mO/iK0QucHAtJDgcqa13Uorfa73sAkeHWYlwcQTgZmQczrxXUspgMW3ssDHuG4ANcDvGhz8t6Dn9uB/8eEvptMX5s79PfCpnZ+7BFDK0TNfjH2m6Nq2meapl8XpJO/FJlTINGjRw5qw9j/7raff+AoOBfN2CAtAlbJiFat3c8yuciICIiAiIg9R+FdytbEbU4Ve8lrP8LBk4jzLqj/L5rqfEW5Wz2UyZB8ALgSQKt++0k8qjzHmqLdPb202eFkLI4S1goMTX1zJJJo4DU8Fvl7cy2l0Uc8UZi2rHPbG19XgH7JBccQrnSmdAuexMlm5zfzHETtvx3eiy8Wsg9g7lbabU0PpgYNo5ppVwBFGgbxUivlVey2yyslY6ORocx4oQeH6HzVD7Z9qYKWeWzUfLFJiDsDg1rcBDo3HI51FWg7lyP8A3Ntn0oP9Mn/eq81l83nZpxqY024mbWkiYjZV77u82eeSE54HEA8R90+4oVBU6+rzfaZnzvDQ59KhoIbk0NyqSdBxUFdFh6tEa+tt/NWKyXJJY4Ymzyd+apozXDQ0BpoONT7Ktopi8do7UZbA2Qihe4Gg3ZnJcXsXZQ+0gn7jS73yA/Ovsulef/DIubfzctHw/P7aT0fzBByu0tsMlokJOTXFrRwDTTL3qfdd3sdIZoZrO/NtO7XcHVrTkQD7qrXj4snrd/EVZPh94kvpH5oKo4UNOCtV1xCx2c2mQftZBSJp3A7z+Z8qDeo1w3UJZnyv8GNxJro4g1DeW8//AKod/wBtktEpdhcGjJgocm8eZ1/8IOx8QNYeTv5VU49RzVu7exkmGgJydoPSqjHqOaC9IiIKbefiv9RXf+H/AI0no/mC4F5+K/1FZXZeckDi6MgEihqAcq13oMb18aX/AJjv4ipnZu9jZ5QT9h2Tx5bncx/VcyaUucXHVxJPMmpWCC1dtLpDSLQwd1/2qaBx0dyP581u7H/3W0+/8BXCbfs4i2OIFlMNC0HLhXy3LVYb2liY9jCA1/2qgHdT8kEFERAREQEREBXz4XXDtJDanjuR5Mrvk4/5R+JHBURrScgKqy3F2qttlYI2NxRjRr2GgqamhFDnXisTPYeLiYM0YXWf09ptfd6p2mudtrs74Trqw/uvGh/Q+RK8InicxzmOFHNJBB1BBoQfdXW0/Ey0kUZFEw8aOcfYE0VOttrfK90kjsT3GrjkKn2yWH8JyuYy9NVOLa3G/KVUxLQiItugIiILhef/AAyLm383LkdkrYIrS3FkHgsJ4V0/EBRZr3ldC2AkYG0pkK5efuoCDudqLpkjne4NJY8lwIBIqcyDwNarsdnYDZbNLPIMJcBhacjlXD7kn8Fx7F2qtMbcOJrwNMYqQOYoT7qFel8TTkbR2Q0aMmjzpx5oJV0do5bOwsa1hBdiq7FWpAG4jgp3/ref6cfR/wDVVhEHoXai/JLPswxrTjBriruppQjivP49RzUy9L2lnw7Qg4a0oKa0/ooceo5oL0iIgpt5+K/1FRVKvPxX+oqKgIiICIiAiIgIim2CAfacKjcOJQabPZHO8hxK6lksMQze0u98vwWQKl3dZzI4ACueu5B0brhc4gRsDBxA/Xf7Lvx2iGIUL3TP3gHIH8lnDZajZtNG79xPly8l37vu6NoADR0QVie0slFHWZjh/iYK9Qq7e3ZmNwLoKscP/rJqD6ScxyXrrbM390LRbLpjeKOZyIyIQfnyeFzCWuFCFrXpHa64S1pxjEK9yQDP0v8A6rzmRhaSDqEGKIiAiIgLbZsOIYwS3eG6ngB7rUttltDo3B7cnN0qAfwOSDsC74hVzgG4QwOY55Aa95dkXAE1wtBpuLs9CokljYGTfaxxvAoaUAxEZkfaOXJaReT6k0ZnSo2bMJoagkUpUE6rSbU846muM1dpmQa16lBpWUeo5pI+pJNM+AAHsBkEj1HNBekREFNvPxX+oqKpV5+K/wBRUVAREQEREBERBshjxGi6YyUSwt1KntYg+NG5Wm54cDK8VXI2713LHaK0buAogtF2HirHY1X7qAy8lZbM0DNB1WQ5LcIAsIHKcwVQcm8LpbIwtcKtcKEFeC9ubhfZLSWkdxwqx3EaU5hfpRzVTPijcQtFhkcB34f2jcs6Ad5vu2vuAg/PiIiAiIgIiICIiAso9RzWKyj1HNBekREFNvPxX+oqKpV5+K/1FRUBERAREQEREHVsTO6FPDVFu4VaFPw5INbGrdZpcJC1F6wxoLxc9qbQEmit9itEdB3gV5JYnveQ1ppzKu11XXCG0ltOGgqQ0gU8yUHoNjnZlQtPuF0MbaAjeV4zfTf7M8Pgnc9rjvrUe+8K69le0jZmtYftDVBeS5oFSQPMlc+2W2DCQXtIIIO/Iih0VX7VR45QHSShhp3WUoeOZyXPiumyuLYo7TMyR2YbIKBw07ppQ6HTgUHit72PYzSRbmuIB4trkeihqz/ERrG2x0bB4YDXc6V/VVhAREQEREBERAWUeo5rFZR6jmgvSIiCm3n4r/UVFUq8/Ff6ioqAiIgIiICIiDuXW0hme9SBKsHNoGjyC0lyDeSurdF27XPcuLiXRua3OY4AcUHTb2dcJcFaNOdePlkrfdXZiMODuHnWvOozC3XRIHgVVigaAMigqva27o2xmg7xdU5mlcySBurVVfs/aCydtONFau3EmCLEdSqRc1qa2QOcg9rs0DZMDyO9Qge61O7Jx4sR1BDhrUEGuR4FbrgYXw4wRTIhd5pyzQfm34s2AxXnNXSQNkbyLQD/ANTXKnL1z4/2JofZZge84PYR5NIcP4ivI0BERAREQEREBZR6jmsVlHqOaC9IiIKbefiv9RUVSrz8V/qKioCIiAiIgIiIO4J8QafL8RktGLNRLHNTunQqQSg241Mux3fC51VusklHAoPT7on0orVZJOKoFyy1oVZZr0ZE2p9hvJ4BBy/iI/EGgHTcqBGx7nBra1JoOauNusj5htJHhuM6V0aNR0Uy7LshD2kGulN2VK0CDqdmbbNZ2xxzPaGk0NKktHnuC9Gs9qxNC89ns1QakZuB5clbbklBYBXdvKDzX4/S52Rtd0p/FgH6ryNei/HC3Y7cyIaRRD/U4lx/DCvOkBERAREQEREBZR6jmsVlHqOaC9IiIKbefiv9RUVSrz8V/qKioCIiAiIgIiIC3R2g781pRB0CsoytbDkFkEFs7P2ylAurarunllD8Jc1oyFaCqqN1TUcF6nYrVSIAbwgo1plnc/Z0w0GGhOgPlvViu7svanASsew/4akU3V5rZbrnEpDgKHyXdumxzsAAc7yQffkFpMfewAgUrVxr5r52XsVrZMWyNIDHg4hm0tLdxOu7qrFZI5fvkkea6laDP/YQfnH4nS4rztR4PA6MaP0VXXR7Q27b2qebdJI5w9JccP4UXOQEREBERAREQFlHqOaxWUeo5oL0iIgpt5+K/wBRUVSrz8V/qKioCIiAiIgIiICItsUdc9yCSBpyWQW1kWJlRqPxC1hBugfQ1VsuO/KEBx04qoNUiIoPYrFb2mhGatl0TNOZXhd33rIzIZhXS4+1MmQ2Tj51CD1KSUbgql29voQWSajqSSNMcY34nChPsKlTrntE1ofh7raDEd9G8SvJO0t5OtMmNxyFcA3BtcvfigoMsLm6ii1qyyxcQor7FG7dTl/uiDiIulNdLtWkOHQqBJE5uTgRzQYIiICIiAso9RzWKyj1HNBekREFNvPxX+oqKpV5+K/1FRUBERAREQEW5lmcd1Oa2tswGuaDRFETyUk6L6hQSbvf3qcV1nXe2TPQ8R+o3rhRZGulFcLhmZINc94QcodnZz9ij+RDT0dT81OsnZm0DN8LwONK/krvd9h0yVlu9gBAOhQU26OzTKVduVjuns46UhsDABvmeDgA/wAA1kPLLzUH4aMktFomdNnHZnGMAgUMmIjPkBX/ADBeuw0QVW/Yortu2csJxubh2js3vmk7jXHkXVoKAAZLwibd5K8fGDtU20WmOyROrHAcTyNHTUoAOIaMubjwVFkKDWWqLIyilYkLahBHjetxodc1oLc1saUGEtjjd90e2X5LmW67MILmnIag/ou00rReQ/ZO5IKyiIgLKPUc1iso9RzQXpERBTbz8V/qKiqVefiv9RUVAREQS7vgDyaitF1G2YDQAKFcv2ncl1jTiEESRqiyhTrQ4AblAcQc65oNayAXxZspvKBGNR5fisrNM5pxNNPMI37QXZ7FWaCW1iCemGQOaDWlHgEtz3A0I9wg7FxdtZI6NlbjHEa+1deqv12dorNMCRK1hAr3+7nrTP8APRcm8ewkLgdjamsc2lA7CRh3iop5rzy/rDJBK6N5BoagtNWu4O5oPW7m7UWOzMc1pMj3PdI/ZNqDI81dRxoCN3stfazt4/8AszhGwxV1JeMZH7oA0zpU1OVQvMbhtYL8JIFcq1VjfYWTPbI8spjDGgOH2W1xuPu2iClxtdXaO3upzOp/TqpjnL7fkzdqGNIo0uOXFzqD/pa1aS8cUAOWZctLXjiFmHDiEHxyxW1oHEdVrJHEIMmla7wd+ydyX3EOIWm3PGzdnuQV9ERAWUeo5rFZR6jmgvSIiCm3n4r/AFFRVKvPxX+oqKgIiICk3dZHTSNiaQHO0qTTIE505KMuv2S/vcXM/wABQfW3HU0Fps5JyA2h14aLm2uzOje6N4o5poQu9YrrskryGyyOcKnZ4WtL6ZlrSTSqwjnFomtUj2AUgeQ1wqWloa0HP7wogrynRXXIXxR5AygFtTlQ1oTStNFuu6Jps1pcWgubs8JIqRV5rThVd11qxWixDAwVZG6rWgEVxd0Hc3yQVGaMtcWnVpINPI0WIKtFmnZNNLAYYw2klHBvfDm1IcXak5LCwWQMs8cjRBjlLiTO5uTWnCAwOy8yUFc2juJ6qRd9kfO8RtIrQklxyAAqSVYYrFC61WfKI7RrtoyNzXsDmtOYArQHI08ljcV6B8rgIYWARvphZ3qAZBx3+fFBXLZCGPLWva8D7za0/FasZ4ld4ytjgbaNlGZJnuABYCxjW5Ua3QElSLNZo5TZZtm1uOQskYB3HEaEN0GWoQViqk2SxukbI5pFI24jUnMVpl5ruQPikmkaYYxHZ2yPAaKOeGZAPdvzzXy77wEkVpBijY4RZGNuHu1FQQNd1PdBwrRZywMONrsbcVGmpb5O4HyWiqtFlskZlsYLG0fES4YR3jR2buJyC5dwwtdt8TQcNne4VFaOFKEcCg5dUqu/JaGQ2ezubDE57w/E57cWQeRpxz18lPmdEy1ts7bPFgeW4qtqavAPdJ+yBUUA4IKjVKrbbIw2R7Ro1xA5A0WlAREQFlHqOaxWUeo5oL0iIgpt5+K/1FRVLvJh2r8j9o7lG2Z4HogxRZbM8D0TZngeiDFTLptuxmZLhxYa5VpWoI1z4qLszwPRNmeB6IM4rQ5rw9po4Go8jWq6pvxu3dNsQBIwskZiydiHeLTTu1oOP4rj7M8D0TZngeiDqzXpEIpIYoS1smElzn1dVprnlpup5lZsvtgMD9kdpBhFceTmNBoKUyNTr5Lj7M8D0TZngeiCdYbz2czpcFcWLKtKYwRrTdVbLLeUZibDNGXtYSWOa7C5tcyNCCCVzdmeB6JszwPRB1477DZo5GwhrIgQ1gOZqCCXOpUnP8FDuq37F5dhxVY5tK0+0KV3qJszwPRNmeB6IOjYryYItjNGXsxYmlrsLmupQ0OYIPArcb7AfDgjwxwmrWYqkkmpLnU1PJcjZngeibM8D0QTbJeZjmMoaCHYsTDoWu1af6qX82hYyRkUBbtW0JdJUjPIDLQZ+Zy4Lj7M8D0TZngeiDqMvsh8DwwVgbhzNcQzryyJ4raL3hYJBFZy3asc0lz6kYho3LQfjQaLjbM8D0TZngeiCVa7djiijw02QcK1rixOxablJnvjFaW2jBTCWnDi1wgDWm+nBczZngeibM8D0QSZoXyOdIG0xOLgK55mtG/vey0ugcG4iMq0911WEEl2APBpmTTBQDI1zHstgtbSfIvNat+7hpvHFUdrV3NvGRwJjeu3968beUz5uCi7TJWYGCgyw1BrUEOzNKZ9VkLQ05GlDjB7u77u5e9rP0qoyOF92OPf8uGso9RzU6A4GPoQXENpkTxxDMagKRanNIdhIJc5pAANQAKGuSlrm9rKYytPZ6pri9r29fHw94WRERWMN8C+oiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg+L6iICIiAiIgwREQf//Z',
        title: 'Резерфо́рдий',
        description: 'Резерфо́рдий (Rf), лат. Rutherfordium, до 1997 года в СССР и России был известен как курчато́вий (Ku) — 104-й элемент в периодической системе'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389726_dubnij.jpg',
        title: 'Ду́бний',
        description: 'Ду́бний (Db), до 1997 года в СССР и России известен как нильсбо́рий (Ns) — 105-й элемент таблицы Менделеева.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389711_siborgij.jpg',
        title: 'Сибо́ргий',
        description: 'Сибо́ргий (лат. Seaborgium, обозначается символом Sg, ранее Уннилгéксий, Unnilhexium, Unh, или эка-вольфрам) — элемент 6-й группы 7-го периода периодической системы элементов с атомным номером 106; короткоживущий радиоактивный элемент.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389671_borij.jpg',
        title: 'Бо́рий',
        description: 'Бо́рий (лат. Bohrium, обозначается символом Bh, ранее Уннилсéптий, Unnilseptium, Uns, или эка-рений) — нестабильный радиоактивный химический элемент с атомным номером 107. '
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389665_hassij.jpg',
        title: 'Ха́ссий',
        description: 'Ха́ссий (лат. Hassium, обозначается символом Hs; исторические названия эка-осмий, уннилоктий) — 108-й ис­кусственный ра­дио­ак­тив­ный химический элемент VIII груп­пы ко­рот­кой фор­мы (8-й груп­пы длин­ной фор­мы) пе­рио­дической сис­те­мы химических элементов; от­но­сит­ся к трансактиноидам'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389588_mejtnerij.jpg',
        title: 'Мейтне́рий',
        description: 'Мейтне́рий — химический элемент с атомным номером 109[8]. Принадлежит к 9-й группе периодической таблицы химических элементов , находится в седьмом периоде таблицы.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389499_darmshtadtij.jpg',
        title: 'Дармшта́дтий',
        description: 'рмшта́дтий (лат. Darmstadtium, обозначение Ds; ранее Унунни́лий, лат. Ununnillium, обозначение Uun или эка-платина) — искусственно синтезированный химический элемент 10-й группы периодической системы, атомный номер 110'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389486_rentgenij.jpg',
        title: 'Рентге́ний',
        description: 'Рентге́ний (лат. Roentgenium, обозначение Rg; ранее унуну́ний, лат. Unununium, обозначение Uuu или эка-золото) — искусственно синтезированный химический элемент 11-й группы , седьмого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 111'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389478_kopernicij.jpg',
        title: 'Копе́рниций',
        description: 'Копе́рниций (лат. Copernicium, Cn[2]; ранее использовались названия уну́нбий (лат. Ununbium, Uub), копе́рникий и эка-ртуть) — 112-й химический элемент.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389960_nihonij.jpg',
        title: 'Нихо́ний',
        description: 'Нихо́ний[3] (лат. Nihonium, Nh), который ранее фигурировал под временными наименованиями уну́нтрий (лат. Ununtrium, Uut) или эка-тáллий[4], — химический элемент 13-й группы 7-го периода периодической системы. Атомный номер — 113.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389909_flerovij.jpg',
        title: 'Флеро́вий',
        description: 'Флеро́вий[2][3][4] (лат. Flerovium, Fl), ранее был известен как унунква́дий (лат. Ununquadium, Uuq), использовалось также нофициальное название эка-свинец — 114-й химический элемент 14-й группы , 7-го периода периодической системы, атомный номер 114, из известных изотопов наиболее устойчив 289Fl с атомной массой 289,190(4) а. е. м.[1]. Элемент сильно радиоактивен.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389882_moskovij.jpg',
        title: 'Моско́вий',
        description: 'Моско́вий[2] (лат. Moscovium, Mc), ранее был известен под временными названиями унунпе́нтий (лат. Ununpentium, Uup) или э́ка-ви́смут — химический элемент пятнадцатой группы , седьмого периода периодической системы химических элементов, атомный номер — 115, наиболее стабильным является нуклид 289Mc (период полураспада оценивается в 156 мс), атомная масса этого нуклида равна 289,194(6) а. е. м'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389883_livermorij.jpg',
        title: 'Ливермо́рий',
        description: 'Ливермо́рий (лат. Livermorium, Lv), ранее был известен под вре́менными названиями унунге́ксий (лат. Ununhexium, Uuh) и э̀ка-поло́ний — 116-й химический элемент, относится к 16-й группе и 7-му периоду периодической системы, атомный номер — 116, массовое число наиболее устойчивого изотопа — 293 (атомная масса этого изотопа равна 293,204(5) а. е. м.[1]).'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389886_tennessin.jpg',
        title: 'Теннесси́н',
        description: 'Теннесси́н[4][5] (новолат.  и англ. Tennessine[6]), ранее фигурировал под временными названиями унунсе́птий (лат. Ununseptium, Uus) или э́ка-аста́т — химический элемент семнадцатой группы'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578389782_oganeson.jpg',
        title: 'Оганесо́н',
        description: 'Оганесо́н[3][4] (лат. Oganesson, Og), ранее был известен под временными названиями унуно́ктий (лат. Ununoctium, Uuo) или э́ка-радо́н — химический элемент восемнадцатой группы'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Lanthanum-2.jpg',
        title: 'Лантан',
        description: 'Ланта́н — химический элемент 3-й группы (по устаревшей классификации — побочной подгруппы третьей группы) шестого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 57, атомная масса — 138,9055[2].'
    },
    {
        img: 'https://institut-seltene-erden.de/wp-content/uploads/2019/07/Cerium-metall.jpg',
        title: 'Церий',
        description: 'Це́рий (химический символ — Ce; лат. Cerium) — химический элемент из группы лантаноидов, серебристый металл.'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Praseodymium.jpg',
        title: 'Празеодим',
        description: 'Празеоди́м — химический элемент из группы лантаноидов, серебристый металл.'
    },
    {
        img: 'https://lh3.googleusercontent.com/proxy/PlOAa3eXJ01qpbWRx9s6CS-YEiJ0P2mJxjzFb24OAx1eIQpn3G2bTC63kDaW8m_IQPD9HdNmFJqMJY0H3XRLngYym7t28r93pBVx5FMUcGjq3w',
        title: 'Неодим',
        description: 'Неоди́м — химический элемент, редкоземельный металл серебристо-белого цвета с золотистым оттенком. Относится к группе лантаноидов. '
    },
    {
        img: 'https://mysamocvet.ru/wp-content/uploads/2018/11/Antimony-4.jpg',
        title: 'Прометий',
        description: 'Проме́тий — химический элемент, относящийся к группе лантаноидов. В природе практически не встречается, так как все его изотопы радиоактивны. Впервые был получен искусственно в 1945 году. Самый долгоживущий изотоп — прометий-145 имеет период полураспада 18 лет.'
    },
    {
        img: 'https://www.umeks.ru/upload/iblock/a1d/a1d4ec67ec669fcd0361e886571fc764.jpg',
        title: 'Самарий',
        description: 'Сама́рий — элемент, лантаноид с атомным номером 62. Обозначается символом Sm (лат. Samarium). Простое вещество самарий — твёрдый металл белого цвета из группы лантаноидов.'
    },
    {
        img: 'https://bvb-alyans.ru/media/uploads/images/evropiy-min.jpg',
        title: 'Европий',
        description: 'Евро́пий — химический элемент с атомным номером 63 и атомной массой 151,964(1) а. е. м., относящийся к группе лантаноидов, а также относящийся к группе редкоземельных элементов.'
    },
    {
        img: 'https://natural-museum.ru/sites/default/files/2018-03/%D0%93%D0%B0%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B8%D0%B9.jpg',
        title: 'Гадолиний',
        description: 'Гадоли́ний (новолат. Gadolinium), Gd — химический элемент, лантаноид, атомный номер — 64, атомная масса — 157,25.'
    },
    {
        img: 'https://natural-museum.ru/sites/default/files/2018-03/%D0%A2%D0%B5%D1%80%D0%B1%D0%B8%D0%B9.jpeg',
        title: 'Тербий',
        description: 'Те́рбий — химический элемент, относящийся к группе лантаноидов.'
    },
    {
        img: 'https://z4p5q6q8.rocketcdn.me/wp-content/uploads/2015/03/strateg_mat_invisticii_dys_metal.jpg',
        title: 'Диспрозий',
        description: 'Диспро́зий (Dy, лат. Dysprosium[3]) — химический элемент III группы короткой формы (3-й группы длинной формы) периодической системы.'
    },
    {
        img: 'https://azbukametalla.ru/images/martens/G/Golmiy/Golmiy_1.gif',
        title: 'Гольмий',
        description: 'Го́льмий — химический элемент, относящийся к группе лантаноидов. Символ — Ho, атомный номер — 67. Редкоземельный элемент. Элементарный гольмий — это относительно мягкий и пластичный серебристо-белый металл.'
    },
    {
        img: 'https://www.thoughtco.com/thmb/2a_7g-kXeFnmwAycpvzhB971fIA=/956x956/filters:fill(auto,1)/Erbium-5b6b2822c9e77c005042bbc8.jpg',
        title: 'Эрбий',
        description: 'Э́рбий (химический символ — Er; лат. Erbium) — химический элемент с атомным номером 68, относится к лантаноидам и редкоземельным элементам (иттриевая подгруппа).'
    },
    {
        img: 'https://bvb-alyans.ru/media/uploads/images/tulij.jpg',
        title: 'Тулий',
        description: 'Ту́лий (лат. Thulium) — химический элемент. Обозначается символом Tm, атомный номер — 69, относится к группе лантаноидов. Простое вещество тулий представляет собой легко обрабатываемый металл серебристо-белого цвета.'
    },
    {
        img: 'https://natural-museum.ru/sites/default/files/2018-03/%D0%98%D1%82%D1%82%D0%B5%D1%80%D0%B1%D0%B8%D0%B9_%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80.jpg',
        title: 'Иттербий',
        description: 'Итте́рбий (лат. Ytterbium) — химический элемент, лантаноид, атомный номер — 70. Обозначается символом Yb. Относится к редкоземельным элементам (иттриевая подгруппа).'
    },
    {
        img: 'https://natural-museum.ru/sites/default/files/2018-03/%D0%9B%D1%8E%D1%82%D0%B5%D1%86%D0%B8%D0%B9_%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80.jpg',
        title: 'Лютеций',
        description: 'Люте́ций (химический символ — Lu; лат. Lutetium) — химический элемент, относящийся к группе лантаноидов.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578390437_aktinij.jpg',
        title: 'Актиний',
        description: 'Акти́ний — химический элемент с атомным номером 89, обозначается в периодической системе элементов символом Ac (лат. Actinium). Не имеет стабильных изотопов. При нормальных условиях представляет собой тяжёлый серебристо-белый металл.'
    },
    {
        img: 'https://tvoi-uvelirr.ru/wp-content/uploads/2017/01/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%82%D0%BE%D1%80%D0%B8%D0%B9-%D0%A1%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0-%D0%B4%D0%BE%D0%B1%D1%8B%D1%87%D0%B0-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%86%D0%B5%D0%BD%D0%B0-%D1%82%D0%BE%D1%80%D0%B8%D1%8F-4.jpg',
        title: 'Торий',
        description: 'То́рий — химический элемент, принадлежащий к актиноидам; тяжёлый слаборадиоактивный металл.'
    },
    {
        img: 'https://ours-nature.ru/new_site/img/2640339827/i_112.png',
        title: 'Протактиний',
        description: 'Протакти́ний (protactinium, ранее - protoactinium) — химический элемент, принадлежащий к актиноидам; радиоактивный металл. Символ — Pa, атомный номер — 91.'
    },
    {
        img: 'https://tvoi-uvelirr.ru/wp-content/uploads/2016/07/%D0%A3%D1%80%D0%B0%D0%BD-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82-%D0%A1%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0-%D0%B4%D0%BE%D0%B1%D1%8B%D1%87%D0%B0-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%86%D0%B5%D0%BD%D0%B0-%D1%83%D1%80%D0%B0%D0%BD%D0%B0-1.jpg',
        title: 'Уран',
        description: 'Ура́н (U, лат. uranium; устаревший вариант ура́ний[4]) — химический элемент с атомным номером 92 в периодической системе, атомная масса — 238,029; относится к семейству актиноидов. '
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578390269_neptunij.jpg',
        title: 'Нептуний',
        description: 'Непту́ний — химический элемент с атомным номером 93 в периодической системе; обозначается символом Np (лат. Neptunium), относится к семейству актиноидов. '
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578561471_plutonij.jpg',
        title: 'Плутоний',
        description: 'Плуто́ний (обозначается символом Pu; атомное число 94) — тяжёлый хрупкий высокотоксичный радиоактивный металл серебристо-белого цвета[10][11]. В периодической таблице располагается в семействе актиноидов.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578390250_americij.jpg',
        title: 'Америций',
        description: 'Амери́ций — химический элемент с атомным номером 95[4]. Принадлежит к 3-й группе периодической таблицы химических элементов (по устаревшей короткой форме периодической системы принадлежит к побочной подгруппе III группы, или к группе IIIB), находится в седьмом периоде таблицы.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578390248_kjurij.jpg',
        title: 'Кюрий',
        description: 'Кю́рий (лат. Curium (Cm)) — 96-й элемент таблицы Менделеева, синтезированный трансурановый элемент.'
    },
    {
        img: 'https://ours-nature.ru/new_site/img/2640339827/i_135.png',
        title: 'Берклий',
        description: 'Бе́рклий (Bk, лат. Berkelium) — искусственно полученный радиоактивный трансурановый химический элемент группы актиноидов с атомным номером 97. Берклий не имеет стабильных изотопов, наиболее долгоживущий нуклид 247Bk имеет период полураспада 1380 лет.'
    },
    {
        img: 'data:image/jpeg;base64,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',
        title: 'Калифорний',
        description: 'Калифорний — искусственный радиоактивный химический элемент, актиноид, обозначаемый Cf, имеющий атомный номер 98 в периодической системе Менделеева. Известны радиоизотопы с массовыми числами 237—256. Стабильных изотопов не имеет[4].'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578390106_jejnshtejnij.jpg',
        title: 'Эйнштейний',
        description: 'Эйнште́йний — трансурановый химический элемент с атомным номером 99, радиоактивный серебристый металл.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578390107_fermij.jpg',
        title: 'Фермий',
        description: 'Фе́рмий (лат. Fermium) — радиоактивный трансурановый химический элемент с порядковым номером 100, относящийся к группе актиноидов. Как и прочие элементы тяжелее плутония, в природе не обнаружен, все известные изотопы получены искусственно.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578390070_mendelevij.jpg',
        title: 'Менделевий',
        description: 'Менделе́вий — химический элемент с атомным номером 101 в периодической системе, обозначается символом Md.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578390053_nobelij.jpg',
        title: 'Нобелий',
        description: 'Нобе́лий (No, лат. Nobelium) — искусственно полученный трансфермиевый химический элемент группы актиноидов с атомным номером 102. Имеет несколько нестабильных изотопов, самый долгоживущий из которых 259No имеет период полураспада 58 минут.'
    },
    {
        img: 'https://chem.ru/uploads/posts/2020-01/1578390046_lourensij.jpg',
        title: 'Лоуре́нсий',
        description: 'Лоуре́нсий (Lr, англ. Lawrencium) — искусственно полученный химический элемент группы актиноидов с атомным номером 103. '
    }
];

let elementLink = document.querySelectorAll('.element_link');
let elementImg = document.querySelector('.element_img');
let elementH1 = document.querySelector('.element_h1');
let elementDescription = document.querySelector('.element_description');


for(let i = 0; i < elementLink.length; i++){
    elementLink[i].addEventListener('click', () => {
        elementImg.src = elements[i].img;
        elementH1.innerHTML = elements[i].title;
        elementDescription.innerHTML = elements[i].description;
    })
}