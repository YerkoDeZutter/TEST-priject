var option = $(".option");
var answers = $(".answer");

$(".option").click(function(evt){
  var pressed = evt;

  var clickObj = jQuery.inArray( evt.target, option )

  console.log(clickObj)

  answers.fadeOut( "slow", function() {
    // Animation complete
  });

  var imgC = clickObj + 1

  $("img").attr("src", "img/komi" + imgC.toString() + ".gif");

  $(answers[clickObj]).fadeIn( "slow", function() {
    // Animation complete
  });



})
