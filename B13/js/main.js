// let c = true;
// $("#myImage").click(function () {
//   let a = $(this).css("background-color", "yellow");
//   let b = $(this).css("background-color", "aqua");
//   c ? a : b;
//   c = !c;

// });
// let n = 20
// $('button:first').click(function (e) { 
//     e.preventDefault();
//     n++
//     $('#text').css('font-size', n)
//     console.log(123);
// });

$('.box').click(function () { 
    let color = $(this).css('color');
    $('#text').css('color', color);

});