$( document ).ready( function(){

  $("h1").css("background-color", "purple");

  $("#sns").html("I don't use my social media that often, but click on the icons to navigate to my profile");

  $("#warning").animate( { top : "+=150px"}, 1500 );

  $(".warningCancel").click( function(){
      $("#warning").animate( { top : "-=150px"}, 1500 );
  } );

  $("#photo").click( function(){
    $("#gifpopup").css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 1000);
  } );

  $(".gif_cancel").click( function(){
      $("#gifpopup").fadeOut();
  });

  setTimeout( function(){
    $("#gifpopup").fadeIn();
  } , 3000);


} );
