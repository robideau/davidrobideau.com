var main = function() {

    var navExpanded = false;

	$('#navigation').click(function() {
        if (navExpanded === false) {
            $('#navigation').animate({
            'marginLeft' : "+=74.5%" //moves right
            });
            navExpanded = true;
            $('#navigation-text').text("Navigation <")
        }
        else {
            $('#navigation').animate({
            'marginLeft' : "-=74.5%" //moves right
            });
            navExpanded = false;
            $('#navigation-text').text("Navigation >")
        }
    });

};

$(document).ready(main);