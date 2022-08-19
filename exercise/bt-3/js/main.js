$('.box-element_numbers').click(function (e ) { 
   e.preventDefault();
   
   $(this).html(getRandomInt(1, 25));
   console.log();
  
});


