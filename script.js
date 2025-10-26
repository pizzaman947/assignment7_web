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
$("#button16").click(function() {
    $("#box4")
      .animate({ left: "200px" }, 1000)        
      .animate({ top: "200px" }, 1000)        
      .animate({ width: "50px", height: "50px" }, 1000) 
      .animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 1000); 
  });
$("#button17").click(function() {
    $("#box5").animate({
      left: "300px",      
      top: "150px",       
      width: "200px",     
      height: "200px",     
      opacity: 0.3        
    }, 1000);              
  });

// for my final
 $(".title").click(function() {
    $(this).next(".content").slideToggle(400);
    $(".content").not($(this).next()).slideUp();  
  });
