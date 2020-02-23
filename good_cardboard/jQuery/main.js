// форма прогружающая сначало весь документ, а потому уже начинает читать код типо async, await
// $(document).ready(function(){
//     $('#id');
// });

// Урок 1

$(document).ready(function(){

//--------СЕЛЕКТОРЫ

//--------Базовые селекторы (#id, tagName, .class)
$('span').css('border', 'solid 3px red');
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








});