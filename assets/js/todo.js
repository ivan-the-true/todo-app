$("li").on("click", function(){
  $(this).toggleClass("done");
});

$("span").on("click", function(event){
  $(this).parent().fadeOut(300, function(){
    $(this).remove();
  });
  event.stopPropagation();
});