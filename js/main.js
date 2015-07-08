$(function() {
  // Handler for .ready() called.

  var count = 0;

  $('.count').click(addOne);

  function addOne() {
  	count = count + 1;

  	console.log(count);

  	if (count == 5) {
  		//alert('hit 5')
  		$('body').css('background-color', 'green');
  	} else if(count > 6) {
  		$('body').css('background-color', 'blue');
  	} else if(count == 6) {
  		$('body').css('background-color', 'purple');
  	} else {
  		$('body').css('background-color', 'red');
  	}

  	if(count == 6) {
  		 $('body').css('background-color', 'yellow');
  	}

  }

});