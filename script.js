$(document).ready(function() {
  console.log("jQuery is ready!");
});
$(".paragraph1").text("Changed Text!");
$("#box1").css("background-color", "red");
$("h3").css("color", "blue");
$("#button1").click(function() {
    $("#paragraph2").hide();
});
$("#button2").click(function(){
    $("#paragraph2").show();
});
$("#button3").click(function(){
    $("#paragraph2").toggle();
});
$("#button4").click(function(){
    $("#img1").fadeIn();
});
$("#button5").click(function(){
    $("#img1").fadeOut();
});
$("#button6").click(function(){
    $("#img1").fadeToggle();
});
$("#button7").click(function(){
    $("#box2").slideUp();
});
$("#button8").click(function(){
    $("#box2").slideDown();
});
$("#button9").click(function(){
    $("#box2").slideToggle();
});


let counter = 1;
$("#button10").click(function() {
$("#list1").append("<li>Item " + counter + "</li>");
counter++;
});

$("#button11").click(function() {
$("#list1 li:last").remove();
});
$("#button12").click(function(){
    $("#list1").prepend("<li> Item " + counter + "</li>");
    counter++;
});

$("#button13").click(function(){
    $("#img2").attr("src", "image2.png");
});

$("#button14").click(function(){
    $("#link1").attr("href", "https://lms.astanait.edu.kz");
});

$("#name1").on("input", function(){
    let namev1 = $(this).val();
    $("#p3").text("Your name is: " + namev1);

});
$("#email1").on("input", function(){
    let emailv1 = $(this).val();
    $("#p4").text("Your e-mail is: "+emailv1);
});
$("#button15").click(function(){
    $("#box3").animate({
        left: "200px",
        width: "200px",
        height: "200px"
    }, 1000);
});

