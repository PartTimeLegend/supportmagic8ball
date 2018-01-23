var words = [
    'Ignore ticket',
'Close ticket without comment',
'Assign ticket to random deparment',
'Fix it',
'Blame vendor',
'Blame Tibor',
'Raise another ticket',
'I don\'t have access'
    ];

    var getRandomWord = function () {
      return words[Math.floor(Math.random() * words.length)];
    };
$(function() {$('.eball').mouseenter(function(){
    $('.textbox').html(getRandomWord());
    });

});
