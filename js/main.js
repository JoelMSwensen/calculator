
var x = " ";
var y;
var answer;
var display;
$( document ).ready(function() {
  
  //   if($(this).attr("value") === "*" || "/" || "+" || "-"){
  //     display = $(this).attr("value");
  //   $("#text").html(display);
  // };
    $("input").click(function(){
    if($(this).attr("value") === "C"){
      x = " ";
    $("#text").html(x);
    } else if($(this).attr("value") === "="){
    answer = eval(x);
    $("#text").html(answer);
    }else{
    x += $(this).attr("value");
    $("#text").html(x);
      };
    });
});

// if($(this).attr("value") === "*" || "/" || "+" || "-"){
//   x += $(this).attr("value");
// }
