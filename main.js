



















$("document").ready(function(){

  $("#accordion").on('click', 'a.heading', function(e){
    e.preventDefault();

    if (!$(this).find('+ .section').hasClass('open')) {
      $(".section").slideUp().removeClass('open');
      // var id = $(this).attr('href');
      // $(id).slideDown().addClass('open');
      $(this).find('+ .section').slideDown().addClass('open');
    } else {
      $(".section").slideUp().removeClass('open');
    }
  })

});