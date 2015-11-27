var main = function() {
	
	$('#about').mouseover(function() {
        var $this = $('#selector-text');
        $this.data('initialText', $this.text());
        $this.text("About");
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

};

$(document).ready(main);