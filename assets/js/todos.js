//check off todos using click
$("ul").on("click","li",function() {
$(this).toggleClass("completed");
	});

$("ul").on("click","span",function(umad){
$(this).parent().fadeOut(500, function() {
	$(this).remove();
});
umad.stopPropagation();
})

$("input[type='text']").on("keypress",function(kya){
  if(kya.which === 13) {
  	var todoText = $(this).val();
  	$(this).val("");
  	$('ul').append("<li> <span><i class = 'fa fa-trash-alt'></i></span> " + todoText + "</li>")
  }
});

$(".fa-edit").click(function() {
	$("input[type = 'text']").fadeToggle();
})