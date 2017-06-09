function onReady() {
  $(".dynamicMenu").on("click", function() {
    $.post(
      "http://www.json-generator.com/api/json/get/bGnxjbjTci",
      {},
      function(data) {
        var html = "";

        $.each(data, function(index, el) {
          html = html + "<li>" + el + "</li>";
        });

        $(".dynamicMenuItems").html(html);
      }
    );
  });

  // $(".form").on("submit", function(e) {
  //   var code = $("#code").val();
  //
  //   $.post(
  //     "http://www.json-generator.com/api/json/get/cnffPOarci",
  //     {
  //       code: code
  //     },
  //     function(data) {
  //       $(".message").html(data.result);
  //     }
  //   );
  //
  //   e.preventDefault();
  // });
}

$(document).ready(onReady);
