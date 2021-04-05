const loginModal = document.querySelector('#id01');
const registrationModal = document.querySelector('#id02');


window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == registrationModal) {
        registrationModal.style.display = "none";
    }
}

function myFunction() {
    let x = document.getElementById("navigation");
    if (x.className === "header_menu_buttons") {
        x.className += " responsive";
    } else {
        x.className = "header_menu_buttons";
    }
}


//   function show_hide_password(target){

  //   var input = document.getElementById('password-input');
  //   if (input.getAttribute('type') == 'password') {
  //     target.classList.add('view');
  //     input.setAttribute('type', 'text');
  //   } else {
  //     target.classList.remove('view');
  //     input.setAttribute('type', 'password');
  //   }
  //   return false;
  // }

//   function myFunction() {
//     var x = document.getElementById("myInput");
//     if (x.type === "password") {
//         x.type = "text";
//     } else {
//         x.type = "password";
//     }
// }






