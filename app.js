//this function works for hover

// $(".toggleButton").hover(
//   function () {
//     $(this).css({ background: "#6c757d" });
//   },
//   $(".toggleButton").hover(function () {
//     $(this).css({ background: "#343a40" });
//   })
// );

function updateOutput() {
  $("iframe")
    .contents()
    .find("html")
    .html(
      "<html><head><style type = 'text/css'>" +
        $("#cssPanel").val() +
        "</style></head><body>" +
        $("#htmlPanel").val() +
        "</body></html>"
    );

  //This code is to run javascript in the iframe
  document
    .getElementById("outputPanel")
    .contentWindow.eval($("#javascriptPanel").val());

}

//This code manage the highlighted class buttons
$(".toggleButton").hover(
  function () {
    $(this).addClass("highlightedButton");
  },
  function () {
    $(this).removeClass("highlightedButton");
  }
);

$(".toggleButton").click(function () {
  $(this).toggleClass("active");

  $(this).removeClass("highlightedButton");

  //This code controll the css/javascript pannel. We put the id attribute into a variable.

  let panelId = $(this).attr("id") + "Panel";

  $("#" + panelId).toggleClass("hidden");

  //This codes helps split the panel into 4parts
  let numberOfActivePanels = 4 - $(".hidden").length;

  $(".panel").width($(window).width() / numberOfActivePanels - 10);

  updateOutput();
});

//This code set the HTML textarea =to the height of the window - height of the textarea
$(".panel").height($(window).height() - $("#header").height() - 15);

//This code set the output iframe
$(".panel").width($(window).width() / 2 - 10);

//This code recieve html content into the output iframe
//$("iframe").contents().find("html").html($("#html".valueOf()));
/*Am commenting out and replacing the above code with a function. We call the function when page starts */

//The function allows input to be accept from HTML and updated instantly in the output panel i.e iframe panel
//Am having a bug here
// $("textarea").on("change keyup paste", function () {
//   $("iframe")
//     .contents()
//     .find("html")
//     .html(
//       "<html><head><style type = 'test/css'>" +
//         $("#cssPanel").val() +
//         "</style></head><body>" +
//         $("#htmlPanel").val() +
//         "</body></html>"
//     );
// });

//We call the function again on page reload
$("textarea").on("change keyup paste", function () {
  updateOutput();
});

//Google how to run javascript securely in iframe
