// For select a size //
var addclass = 'color';
var $cols = $('.divs').click(function(e) {
    $cols.removeClass(addclass);
    $(this).addClass(addclass);
});



// For the biscuit selector //
$(function(){
    var $output = $('#output');
    //$('#selectlist img').each(function(i, el){
    //        $(this).addClass('img' + i);
    //    });
    $('#selectlist img').click(function(){
               $output.append($(this).clone());
        });

    $output.on('click','img',function(){
       $(this).remove();
    });
});


// For the music selector //
var audio = document.getElementById("songs");
audio.play();

var audio = $("#songs")[0];
audio.play();

var audio = $("#songs")[0];
$("nav a").mouseenter(function() {
  audio.play();
});


// variables
var aLoops = []; // sound loops
// initialization
addEvent(window, 'load', function (event) {
    // load music files
    aLoops[0] = new Audio('greensleeves.wav');
    aLoops[0].volume = 1.0;
    aLoops[1] = new Audio('somewhere_over_the_rainbow.wav');
    aLoops[1].volume = 1.0;
    aLoops[2] = new Audio('la_vie_en_rose.wav');
    aLoops[2].volume = 1.0;
    false);
    aLoops[0].play();
});

// all the buttons
var aBtns = document.querySelectorAll('#songs li');
// onmouseover event handler
addEvent(aBtns, 'mouseover', function (event) {
    aLoops[1].currentTime = 0;
    aLoops[1].play(); // play click sound
});
// onmouseout event handler
addEvent(aBtns, 'mouseout', function (event) {
    aLoops[1].currentTime = 0;
    aLoops[1].pause(); // play click sound
});
// onclick event handler
addEvent(aBtns, 'click', function (event) {
    aLoops[2].currentTime = 0;
    aLoops[2].play(); // play click sound
});
