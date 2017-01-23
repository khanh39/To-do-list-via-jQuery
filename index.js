$(function() {
   $("#newEl").on("click",
   function(){
   var inputText= $("input").val();

   if(inputText == "")
   {alert("Invalid item name");}
   else
   {
     var el=  $("<li></li>").text(inputText);
     $(el).append("<button class='removeElement'>Remove</button>");

     $("#list").append(el);
            $("input").val("");
            $(".removeElement").on("click", function() {                $(this).parent().remove();
   })
}
})
})
