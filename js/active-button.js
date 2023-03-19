let button = document.getElementById("send-button");
let text = document.getElementById("area-letter");
let mail = document.getElementById("mail-letter");

function validateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
      return true;
    } else {  
      return false;
    }
  
  }

  function update_button() {
    if(validateEmail(mail) && text.value.length >= 10){
        button.style.color = "#e2e2e2";
        button.disabled = false;
        console.log("ok");
    }
    else {
        button.style.color = "#353535";
        button.disabled = true;
        console.log("non ok");
    }
  }

  text.addEventListener("input", () => {
    update_button(mail);
  })

  mail.addEventListener("input", () => {
    update_button(mail);
  })
