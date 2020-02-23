// форма прогружающая сначало весь документ, а потому уже начинает читать код типо async, await
// $(document).ready(function(){
//     $('#id');
// });

// Урок 1

$(document).ready(function(){

//--------СЕЛЕКТОРЫ

//--------Базовые селекторы (#id, tagName, .class)
//$('span').css('border', 'solid 3px red');
//$('p').css('border', 'solid 2px green');

//--------Селекторы взаимодействия (parent, child, + ~ и т.д.)
//$('body h2').css('border', 'solid 3px gray');
//$('h2 ~ p').css('border', 'solid 3px black'); //Определяем тек h2 а так же его сестринкие элементы, 
//которые идут дальше в коде, т.е. ближайший тег p;
//$('h2').parent().css('border', 'solid 3px black'); // определить родительский элемент от тега h2 это будет body

//-------- Простые фильтры(:first, :last, :even, :odd, eq и т.д.)
//$('p:last').css('border', 'solid 3px gray'); // применить стиль к последнему тегу
//$('p:even').css('border', 'solid 3px gray'); // применить стиль к нечетным тегам
$('p:odd').css('border', 'solid 3px gray'); // применить стиль к четным тегам
//$('p:eq(3)').css('border', 'solid 3px gray'); // применить стиль к элементам указав его индекс

//-------- Фильтры по содержимому(:has, :parent, :empty и т.д.)
$('h2:has(span)').css('border', 'solid 3px gray');
$('.box:parent').css('border', 'solid 3px red'); // элементы являющиеся родителями 
//(если в эдементе что-то есть он уже являеться родителем, пустой элемент выделяться не будет)

//-------- Фильтры по атрибутам ([name ~= value] и т.д.)
$('a[href="https://www.google.com/" ]').css('border', 'solid 3px gray'); // выделям ссылку которая содержит Google
//$('a[href!="https://www.google.com/" ]').css('border', 'solid 3px gray'); // с помощью оператора != можно выделить все ссылки не равные заданой
$('a[href^="http"]').css('border', 'solid 3px green'); // выделяем те ссылки которые начинаються с http
$('a[href$=".ru]').css('border', 'solid 3px yellow'); // знак $ означает что ссылка заканчивается на этот симфол

// Урок 2

//---------События

//---------Клик мышью (click, dblclick)
$('h2').click(function(){
    console.log('Ты кликнул по заголовку');
});
$('h2').dblclick(function(){
    $(this).toggleClass('blue');
    console.log('Ты кликнул по заголовку double clickом');
});

//---------Полеты над элементом (mouseenter, mouseleave и т.д.)
$('p').mouseenter(function(){
    $(this).toggleClass('blue');
    console.log('Ты навел на элемент <p>');
});
$('p').mouseleave(function(){
    $(this).toggleClass('blue');
    console.log('Ты убрал курсор с элемента <p>');
});

//---------Формы (focus, change и т.д.)
$('input').focus(function(){
    console.log('Поле в фокусе');
});

$('input').change(function(){
    $('#userName').text(', ' + $(this).val());
    console.log('Поле в фокусе');
});

//---------Клавиатура (keypress, keydown, keyup)
$('input').keypress(function(){
    console.log('Ты нажал кнопку в impute');
});
$('input').keyup(function(){
    console.log('Ты отпустил нажатую кнопку в impute');
});

//---------Урок 3

//---------Базовые анимации
$('.box:first').delay(1000).hide('1000').delay(1000).show(1000); // базавая анимация для первого элемента, спрятать элемент с задержкой в 1000 млс
$('.box:eq(1)').animate({'width': '200px'}, 1000); // увеличить ширину с заданной задержкой
$('.box:eq(2)').slideUp(1000).delay(1000).slideDown(1000);

//---------Взаимодестйсвия с Атрибутами
$('img').click(function(){
    $(this).fadeOut(500, function(){
        $(this).attr('src','img2.png').fadeIn(500); // своеобразный слайдер, меняет картинку на другую полсе клика
    });
});

$('p.lead').attr('data-target', 'text');


//---------Взаимодействия с классами
//$('p.lead').addClass('blue');
$('.lead').click(function(){
    //$('p.lead').addClass('blue');
    //$(this).removeClass('lead');
    //$(this).toggleClass('lead blue'); меняет с одного класса на другой
});

//---------Клонирование, добавление, пермещение элементов
$('.lead').click(function(){
    // $(this).text('Поменять на свой текст без стилей');
    // $(this).html('Свой собоственный <em>текст</em>');
    // $(this).append(' Добавить текст в конце тега р');
    // $(this).prepend(' Добавть текста в начало тега р');
    // $(this).after('<p> Новый текст</p>');
    // $(this).wrap('<div class="container"></div>'); // оборачивает тег в контейнер при клике
    // $(this).unwrap('<div class="###"></div>'); // убрать необходимую обёртку
    // $(this).empty(); // очистить содердимое тега <p></p>
    // $(this).remove(); // удалить тег <p></p>
    // $(this).append('<br />' + $(this).text()); при клике добавляем содержимое нашего тега в этот же тег можно и любое другое место
});




});