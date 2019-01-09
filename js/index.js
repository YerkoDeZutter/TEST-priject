var option = $(".option");
var answers = $(".answer");

$(".option").click(function(evt){
  var pressed = evt;

  var clickObj = jQuery.inArray( evt.target, option )

  console.log(clickObj)

  answers.fadeOut( "slow", function() {
    // Animation complete
  });

  $(answers[clickObj]).fadeIn( "slow", function() {
    // Animation complete
  });



})
