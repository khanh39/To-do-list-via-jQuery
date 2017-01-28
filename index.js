$(function() {
   $("#newEl").on("click",
   function(){
   var inputText= $("input").val();		//Assigns user input to a variaBle

   if(inputText == "")		//Ensure that the user entered something before adding a task
   {alert("Invalid item name");}
   else
   {
     var el=  $("<li></li>").text(inputText);		//Creates a new list element with the user's input
     $(el).append("<button class='removeElement'>Remove</button>");		//Adds the new list element to the end of the task list

     $("#list").append(el);
            $("input").val("");
            $(".removeElement").on("click", function() {                $(this).parent().remove();		//Removes a task from the list by referencing its list element from the parent list
   })
}
})
})
