// Check off specific items by clicking
$("li").click(function () {
  $(this).toggleClass("checked-off");
});

//Click on X to delete TO-DO
$("span").click(function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});
