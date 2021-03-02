
 var modal = document.getElementById('id01');
    
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 function myFunction() {
    var x = document.getElementById("navigation");
    if (x.className === "header_menu_buttons") {
        x.className += " responsive";
    } else {
        x.className = "header_menu_buttons";
    }
}