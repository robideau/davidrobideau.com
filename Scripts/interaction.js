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

    $('#essay').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("IEEE Ethics Discussion");
    });
    $('#essay').mouseout(function() {
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