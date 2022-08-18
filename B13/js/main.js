let c = true;
let a = $(this).css('background-color', 'red')
let b = $(this).css('background-color', 'green')
console.log(a);
$("#myImage").click(function () {
    c ? a : b
  
     c = !c;

});


let n = 20
$('button:first').click(function (e) { 
    e.preventDefault();
    n++
    $('#text').css('font-size', n + 'px')
    console.log(123);
});

$('.box').click((e) => { 
    let colors = $(this).css('background-color');
    $('#text').css('color', colors);
    console.log(colors);
});