$(function() {
  // Handler for .ready() called.

  var count = 0;

  $('.count').click(addOne);

  function addOne() {
  	count = count + 1;

  	console.log(count);

  	if (count == 5) {
  		alert('hit 5')
  	}

  	console.log('after if');
  }

});