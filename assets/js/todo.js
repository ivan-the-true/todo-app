$("#todoList").on("click", "li", function(){
  $(this).toggleClass("done");
});

$("#todoList").on("click", "span", function(event){
  $(this).parent().fadeOut(300, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("#newTodoInput").on("keypress", function(event){
  if (event.which === 13) {
    $("#todoList").append(`<li class=\"todo-item\"><span>X</span> ${$(this).val()}</li>`);
    $(this).val("");
  }
});