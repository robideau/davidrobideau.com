var main = function() {
	
	$('#about').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("About Me");
    });
    $('#about').mouseout(function() {
    	var $this = $('#selector-text');
    	$this.data('initialText', $this.text());
    	$this.text("");
    });

    $('#projects').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("Projects");
    });
    $('#projects').mouseout(function() {
    	var $this = $('#selector-text');
    	$this.data('initialText', $this.text());
    	$this.text("");
    });

    $('#contact').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("Contact");
    });
    $('#contact').mouseout(function() {
    	var $this = $('#selector-text');
    	$this.data('initialText', $this.text());
    	$this.text("");
    });

    $('#rift').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("MusicShelf");
    });
    $('#rift').mouseout(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("");
    });

    $('#rover').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("Rover");
    });
    $('#rover').mouseout(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("");
    });

    $('#cpu').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("MIPS CPU");
    });
    $('#cpu').mouseout(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("");
    });

    $('#essay').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("Essays");
    });
    $('#essay').mouseout(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("");
    });

    $('#oilchange').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("Oil Change");
    });
    $('#oilchange').mouseout(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("");
    });

    $('#microsurgery').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("VR Microsurgery Training");
    });
    $('#microsurgery').mouseout(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("");
    });

    $('#ethics').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("IEEE Ethics Essay");
    });
    $('#ethics').mouseout(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("");
    });

    $('#cumul').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("Cumulative Education Reflection");
    });
    $('#cumul').mouseout(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("");
    });

    $('#gened').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("General Education Reflection");
    });
    $('#gened').mouseout(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("");
    });


    $('#jumbotron').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("Home");
    });
    $('#jumbotron').mouseout(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("");
    });

};

$(document).ready(main);