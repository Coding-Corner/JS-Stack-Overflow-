$('[id^="navbar-menu"]').hover(function() {

    $('[id^="navbar-menu"]').css('background', '');
    $(this).css('background', '#114D89');
    if(!($(this).attr('id') == "navbar-menu-x")) {
    
        var menuElement = $(this).attr('id');
        var elementIndex = $(this).attr('id').split("-")[2];
        var subMenuElement = 'sub-menus-wrapper-'+elementIndex;

        $('#'+subMenuElement).removeClass('bg-transparent');
        $('#'+subMenuElement).addClass('sub-menu-bg-color');
        $("[id^='sub-menus-wrapper']").hide();
        $('#'+subMenuElement).show();
        $('.content-wrapper').css('margin-top', '4em');


       $('#'+subMenuElement).hover(function(){
         $('#'+subMenuElement).removeClass('bg-transparent');
         $('#'+subMenuElement).addClass('sub-menu-bg-color');
         $('#'+menuElement).addClass("sub-menu-bg-color");
         $('#'+subMenuElement).show();
         $('.content-wrapper').css('margin-top', '4em');

       },function() {
           $('#'+subMenuElement).removeClass('sub-menu-bg-color');
           $('#'+subMenuElement).addClass('bg-transparent');
           $('#'+menuElement).removeClass("sub-menu-bg-color");
           $('#'+subMenuElement).hide();
           
           $('.content-wrapper').css('margin-top', '4em');

       });
     }
   }, function() {
      var menuelement = $(this).attr('id');
      var elementIndex = $(this).attr('id').split("-")[2];
      var subMenuElement = 'sub-menus-wrapper-'+elementIndex;

      $('#'+subMenuElement).removeClass('sub-menu-bg-color');
      $('#'+subMenuElement).addClass('bg-transparent');

      $('#'+subMenuElement).hide();
      $('.content-wrapper').css('margin-top', '4em');
  });