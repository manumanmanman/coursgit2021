// $( document ).ready(function() {
    $(function () {
   
   
      console.log("thomas");

      
    //   $( "#saskya" ).keyup(function() {
    //     var valeur = $(this).val();
    //     $("#titre1").text(valeur);
    //     $("#input2").val(valeur);
    //   });

    $("#madiv").append("<h1>coucou</h1>");

$("#moninput").val("quelque chose")





$( "#clickme" ).click(function() {
    $( "#book" ).toggle( "slow", function() {
      // Animation complete.
    });
  });

  
  $( "li a" ).click(function(e) {
    e.preventDefault();
    var gender = "."+$(this).attr("data-gender");
    console.log(gender)

    if(gender == ".tous") {

        $( ".col-3" ).fadeIn();

    } else {
        $( gender ).fadeIn();
        $( ".col-3:not("+gender+")").fadeOut();
    }

  }); //click




}); // ready