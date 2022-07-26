// changeur de thème
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

//  toggle  btn
$(document).ready(function(){
    $("moon").click(function(){
        $("suns").toggle();
    });
});