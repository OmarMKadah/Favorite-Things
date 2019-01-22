$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    console.log("hello");
    event.preventDefault();
    var blanks = ["food", "music", "film", "city", "place"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      console.log(userInput);
      $("." + blank).text(userInput).val();
    });

    $("#reciept").show();

  });
});
