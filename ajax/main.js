function onReady() {
  $('.form').on('submit', function (e) {
    var code = $('#code').val();

    $.post(
      "http://www.json-generator.com/api/json/get/cnffPOarci",
      {
        'code': code
      },
      function( data ) {
        $( ".message" ).html( data.result );
      }
    );

    e.preventDefault();
  });
}

$(document).ready( onReady );
