$(document).ready(function(){
    
    $('img').click(function(){
        $(this).fadeTo(2000, 0);
    });

    $('button').click(function() {
    	$('img').fadeTo(0, 2000);
    })
});