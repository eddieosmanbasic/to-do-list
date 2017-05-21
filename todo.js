$("ul").on('click', 'li', function() {
	$(this).toggleClass("strikethru")
})

$("ul").on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var newEntry = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'> </i></span>" + newEntry + "</li>")
	}

})

$(".fa-plus").on('click', function() {
	$("input[type='text']").fadeToggle();
})



