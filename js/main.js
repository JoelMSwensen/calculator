
$( document ).ready(function() {
$("input").click(function(){



   $(this).css("background-color","#7FDBFF");
   setTimeout(function(){
     // toggle back after 1 second
     $("input").css("background-color","#001f3f");
   },250);



 });
});

var x = " ";
var y;
var answer;
var display;
$( document ).ready(function() {


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

    // }else if($(this).attr("value") === "*" || "/" || "+" || "-"){
    //
    //     display = $(this).attr("value");
    //   $("#text").html(display);
    // };
    });
});
