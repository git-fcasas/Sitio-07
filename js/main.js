//Esperar que el DOM este listo 
$(document).ready(function () { 

  //Evento de tipo click 
  $(".menu-link").on("click", function() { 
    $(".menu-link").removeClass("active"); //Quitale la clase 'active' a los elementos que cuenten con la clase 'menu-link' 
    $(this).addClass("active"); //Al elemento que origino el evento agregale la clase 'active' 
  }); 

  //Evento de tipo mouseover 
  $(".menu-item").on("mouseover", function() {
    $(this).addClass("active").siblings().removeClass("active"); 
  }); 
  


});

//.menu-item === <li> 
//.menu-link === <a> 
  


