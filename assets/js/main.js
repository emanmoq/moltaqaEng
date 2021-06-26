jQuery(function ($) {


  $('.accordion-panel').click(function () {
    $('.accordion-panel').not(this).find('i:first').removeClass(' fas fa-chevron-down  ').addClass('fas fa-chevron-up ');
    $(this).find('i:first').toggleClass('fas fa-chevron-down fas fa-chevron-up');
})

$('.programHeader').click(function () {
    $(this).parent().find('.programBody').slideToggle(400);
});
$(".programHeader").on("click", "a", function(e) { e.preventDefault() });


      $(".close").click(function(){
          $(".collapse").removeClass('show')
      });



});

