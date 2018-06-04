$(document).ready(function() {
  console.log("I EXIST!!!!!");
  $("form#flavors").submit(function(event) {
    event.preventDefault();

    var blanks = ["ice1", "ice2", "ice3", "ice4", "ice5"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

  });
console.log("I SCREAM");
  $("#icecream").show();




});
});
