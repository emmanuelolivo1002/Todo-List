// Check off specific items by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("checked-off");
});

//Click on X to delete TO-DO
$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

//Add new item
$("input[type='text']").keypress(function functionName(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    if (todoText != "") {
      $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
  }

});
