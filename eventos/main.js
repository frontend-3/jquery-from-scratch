function onReady() {
  $('.btn-say-hi').on('click', function (e) {
    var name = $('#name').val();

    $('.message').html('Hi ' + name);
    e.preventDefault();
  });

  $('#name').on('keyup', function (e) {
    var value = e.target.value;
    $('.counter').html('Número de letras:' + value.length);
  });

  $('#course').on('change', function (e) {
    var selectedOption = $(this).find('option:selected');
    $('.selected-course').html('Curso seleccionado:' + selectedOption.text());
  });
}

$(document).ready( onReady );
