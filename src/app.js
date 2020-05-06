$(document).ready(function() {
    $("#btn").click(function() {
        $.ajax({
        //url: 'http://api.joind.in/v2.1/talks/10889',
        url: 'http://localhost:5000/api/feature',
        data: {
        format: 'json'
        },
        error: function() {
        $('#feature').html('<p>An error has occurred</p>');
        },
        dataType: 'jsonp',
        success: function(data) {
        $("#feature").removeClass('is-danger')
        $("#feature").addClass('is-link')
        $( "#feature" ).html("Hello" + '</br><b>'+ "World" +'</b>');
        },
        type: 'GET'
        })
        })
})