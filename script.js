$(document).ready(function() {
    $('#myForm').submit(function(event) {
        event.preventDefault();
        
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var note1 = parseFloat($('#note1').val());
        var note2 = parseFloat($('#note2').val());
        
        var average = (note1 + note2) / 2;
        
        $('#result').html('La moyenne de ' + firstName + ' ' + lastName + ' est de ' + average.toFixed(2) + '/20');
        $('#result').show();
    });
});
