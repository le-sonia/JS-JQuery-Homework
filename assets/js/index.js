// Exercise 1 JavaScript
function stringConcat() {
    var best = "best ";
    var designers = "designers ";
    var bestDesigners = "The " + best + designers + "eat pizza every day.";
    console.log(bestDesigners);
}
stringConcat();



// Exercise 4 JavaScript
function addingNumbers(a,b) {
    return a+b;
}

console.log(addingNumbers(13,6));



// Exercise 5 JavaScript
function convertSeconds(minutes){
    return minutes * 60;
}
console.log(convertSeconds(20));



// Exercise 1 JQuery
$(document).ready(function(){

    $("#clicker").click(function(){
        $("#secret").fadeIn(2000);

    })

    $("#slide").click(function(){
        $("#secretSlide").slideDown(2000);

    })

    $("#changeText").click(function(){
        $("#secretFadeToggle").fadeToggle("slow","linear");

    })

})



// Exercise 2 JQuery
// Call say("Hi!") to have your computer say hi!
// This only works on recent versions of Safari
// and Chrome at the moment.
function say(text) {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);  
  }
  
  $(document).ready(function(){

    $("#greet").click(function(){
        say("Hello " + $("#name").val() + "!");
    })

  })



  
// Exercise 3 JQuery
  $("#slideParagraph").click(function(){
    $(".secret").slideUp(2000);

})
