
$(document).ready(function() {
    $("h3:contains('INGREDIENTES')").on("dblclick", function() {
      $(this).css("color", "red");
    });
    
    $("h3:contains('PREPARACIÓN')").on("dblclick", function() {
      $(this).css("color", "red");
    });

    
      $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });

      $('.card-titulo1').click(function() {
      $(this).siblings('.card-text1').toggle();
    });

    $('.card-titulo2').click(function() {
      $(this).siblings('.card-text2').toggle();
    });

    $('.card-titulo3').click(function() {
      $(this).siblings('.card-text3').toggle();
    });
    
});

// profe zorry por la demora pero pa mi esto es demaciado ya, el hacer esto me emociona caleta, no soy el mejor pero se q puedo llegar a ser el segundo despues de ud 
    
  

  