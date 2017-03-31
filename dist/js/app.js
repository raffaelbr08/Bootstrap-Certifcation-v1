function openOffcanvas($element){
	$element.addClass('open-offcanvas');
}

function hideOffcanvas($element){
	$element.removeClass('open-offcanvas');
}

$('.open-off').on('click', function(){
openOffcanvas($('html'));
});

$('html,body').on('swiperight', function(){
	openOffcanvas($(this));
});

$('html,body').on('swipeleft', function(){
	hideOffcanvas($(this));
});

$('html,body').on('click', function(e){
if(this === e.target)
	hideOffcanvas($(this));
});


