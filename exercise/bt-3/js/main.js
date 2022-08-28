$('.box-element_numbers').click(function (e ) { 
   e.preventDefault();
   
   $(this).html(getRandomInt(1, 25));
   let values = parseInt($(this).html(getRandomInt(1, 25)).text())
   let numberSecrets = parseInt($('#box-element_nub-secrets').text());
   console.log(values);
   if (values < numberSecrets) {
      $(".box-element_turn").append(
         "<span id='box-element_result'>sai rồi</span>" +
         "<p class='box-element-content'>1. Lần  số của bạn nhỏ hơn số bí mật</p>")
      
   } else if (values > numberSecrets) {
      $("#box-element_result").html('sai rồi');
      $(".box-element-content").text("Lần 1. " + values + " - số của bạn lớn hơn sô bí mật");

   }else{
      $("#box-element_result").html('tuyệt vời');
      $(".box-element-content").text("10 điểm");
      
   }
   $(".box-element_turn").show();
});

