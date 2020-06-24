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

// Choose Your Size //
$('.chooseSizeLarge').on('click', function(){
    $('.chooseSizeLarge .active').removeClass('active');
    $(this).addClass('active');
});

$('.chooseSizeSmall').on('click', function(){
    $('.chooseSizeSmall .active').removeClass('active');
    $(this).addClass('active');
});

// For the music selector //
//Defining variable based on unique ID
$(document).ready(function() {

  $('#selection').on('change', function() {
    change($(this).val());
  });

});


function change(sourceUrl) {
  var audio = document.getElementById("player");
  var source = document.getElementById("wav_src");

  audio.pause();

  if (sourceUrl) {
    source.src = sourceUrl;
    audio.load();
    audio.play();
  }
}
