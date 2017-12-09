function searchFunction() {
	var input;
	var anchor;
	var caption;

	input = $('#user_search').val().toUpperCase();
	anchor = $("a");

	for ( var i = 0; i < anchor.length; i += 1){
		
		caption = $(anchor[i]).data('caption').toUpperCase();

		if( caption.indexOf(input) > -1 ){
			$(anchor[i]).css('display', 'inline');

		} else{
			$(anchor[i]).css('display', 'none');
		}
	}
}