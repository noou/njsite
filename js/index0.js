$(window).scroll(function() 
{
     if  ($(window).scrollTop() == $(document).height() - $(window).height())
     {
          console.log('ура! конец страницы!')
     }
});
