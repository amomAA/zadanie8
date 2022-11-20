"use strict";

let button = document.getElementById("start"); 
let popup = document.getElementById("popup");
let popupwrapper = document.getElementById("popupwrapper");
popupwrapper.style.display = "none";
popup.style.display = "none";
let exit = document.getElementById("exit");

function clear(){ 
    let namefield = document.getElementsByName("name");
    let email = document.getElementsByName("email");
    let message = document.getElementsByName("message");
    let agree = document.getElementsByName("agree");
    namefield[0].value = "";
    email[0].value = "";
    message[0].value = "";
    agree[0].checked = false;

}

window.addEventListener("DOMContentLoaded",  
    function (event) {
       button.addEventListener("click", function (event) {
           history.pushState(null, "", "form.html");

            window.addEventListener("popstate", (event) => {
            popup.style.display = "none";
            popupwrapper.style.display = "none";
            button.style.display = "block";  
            clear();
          });

           popup.style.display = "block"; 
           popupwrapper.style.display = "block";
           button.style.display = "none";
    });
});

formcarry({
    form: "t0fl132kd",
    element: "#my-form",
    onSuccess: function(response){
      clear();
      alert("Данные отправлены")
    },
    
    onError: function(error){
        clear();
      alert("Ошибка отправки данных")
    }
  });
