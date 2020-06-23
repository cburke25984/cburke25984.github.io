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
//Defining variable based on unique ID

var audio1 = document.getElementById("greensleevesSong");
var audio2 = document.getElementById("overTheRainbowSong");
var audio3 = document.getElementById("laVieEnRoseSong");

//Example of an HTML Audio/Video Method

function playAudio() {
  audio1.play();
}
function playAudio() {
  audio2.play();
}
function playAudio() {
  audio3.play();
}
