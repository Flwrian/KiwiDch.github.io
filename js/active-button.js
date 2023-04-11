let button = document.getElementById("send-button");
let text = document.getElementById("area-letter");
let mail = document.getElementById("mail-letter");
let reponse = document.getElementById("reponse-mail");

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
    }
    else {
        button.style.color = "#353535";
        button.disabled = true;
    }
  }

  text.addEventListener("input", () => {
    update_button(mail);
  })

  mail.addEventListener("input", () => {
    update_button(mail);
  })

function send_mail(){
    emailjs.sendForm('service_w3kior6', 'template_t1zq61g', "#mail-form")
                    .then(function() {
                        reponse.textContent = "The message has been sent"
                        text.value = "";
                        mail.value = "";
                        update_button();
                    }, function(error) {
                        reponse.textContent = "There was an error, try again"
                    });
  }


  mail.onkeydown = function(e) {    
    if (e.isComposing || e.key === 'Enter') {
      e.preventDefault();
    }
  } 