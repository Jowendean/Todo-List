//Check off todos when clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event) {
    //Give parent element jQuery element and remove
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    //Stop span click listener from infriging on other parent event listeners
    event.stopPropagation();
});

//Enter input for new todo
$("input[type='text']").keypress(function(event) {
    if(event.which === 13){
        //grab new todo from input
       var todoText =  $(this).val();
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus-square").click(function() {
    $("input[type='text']").fadeToggle();
});