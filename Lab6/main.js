document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("reg_form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

  
        let oldErrors = document.querySelectorAll(".error-text");
        oldErrors.forEach(error => error.remove());
        
        let errorFields = document.querySelectorAll(".error");
        errorFields.forEach(field => field.classList.remove("error"));

        let hasError = false;

        
        let nameInput = document.querySelector("#username");
        let emailInput = document.querySelector("#email");
        let passwordInput = document.querySelector("#password");
        let phoneInput = document.querySelector("#phone");
        let agreementInput = document.querySelector("input[name='agreement']");

  
        let fields = [nameInput, emailInput, passwordInput, phoneInput];

        fields.forEach((field) => {
            if (field.value.trim() === "") {
                let span = document.createElement("span");
                span.className = "error-text";
                span.innerText = "Заполните поле";
            
                field.insertAdjacentElement("afterend", span);
                // Красим рамку в красный (класс error из твоего CSS)
                field.parentElement.classList.add("error");
                hasError = true;
            }
        });


        if (agreementInput && !agreementInput.checked) {
            let span = document.createElement("span");
            span.className = "error-text";
            span.innerText = "Необходимо согласие";
     
            agreementInput.closest('.checkbox-group').appendChild(span);
            hasError = true;
        }


        if (!hasError) {
  
            let resultDiv = document.querySelector(".result");
            if (!resultDiv) {
                resultDiv = document.createElement("div");
                resultDiv.className = "result";
                resultDiv.style.marginTop = "20px";
                resultDiv.style.fontSize = "14px";
                resultDiv.style.lineHeight = "1.6";
                form.after(resultDiv);
            }

            // Получаем данные для вывода
            let nameVal = nameInput.value;
            let emailVal = emailInput.value;
            let phoneVal = phoneInput.value;
            

            let passVal = "*".repeat(passwordInput.value.length);

  
            resultDiv.innerHTML = `
                <strong>Имя:</strong> ${nameVal}<br>
                <strong>Email:</strong> ${emailVal}<br>
                <strong>Телефон:</strong> ${phoneVal}<br>
                <strong>Пароль:</strong> ${passVal}<br>
                <strong>Согласие:</strong> Да
            `;

          
            this.reset();
        }
    });
});