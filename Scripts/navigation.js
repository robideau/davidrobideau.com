var main = function() {

    var navExpanded = false;

	$('#navigation').click(function() {
        if (navExpanded === false) {
            $('#navigation').animate({
            'marginLeft' : "+=74.5%"
            });
            navExpanded = true;
            $('#navigation-text').text("Navigation <")
        }
        else {
            $('#navigation').animate({
            'marginLeft' : "-=74.5%"
            });
            navExpanded = false;
            $('#navigation-text').text("Navigation >")
        }
    });

};

$(document).ready(main);