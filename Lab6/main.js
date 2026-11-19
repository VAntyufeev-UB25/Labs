document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("reg_form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Отменяем перезагрузку страницы

        // 1. Удаляем старые ошибки, если они были
        let oldErrors = document.querySelectorAll(".error-text");
        oldErrors.forEach(error => error.remove());
        
        let errorFields = document.querySelectorAll(".error");
        errorFields.forEach(field => field.classList.remove("error"));

        let hasError = false;

        // 2. Получаем поля, которые есть в твоей форме
        let nameInput = document.querySelector("#username");
        let emailInput = document.querySelector("#email");
        let passwordInput = document.querySelector("#password");
        let phoneInput = document.querySelector("#phone");
        let agreementInput = document.querySelector("input[name='agreement']");

        // 3. Проверяем обязательные текстовые поля
        let fields = [nameInput, emailInput, passwordInput, phoneInput];

        fields.forEach((field) => {
            if (field.value.trim() === "") {
                let span = document.createElement("span");
                span.className = "error-text";
                span.innerText = "Заполните поле";
                // Вставляем ошибку после инпута
                field.insertAdjacentElement("afterend", span);
                // Красим рамку в красный (класс error из твоего CSS)
                field.parentElement.classList.add("error");
                hasError = true;
            }
        });

        // 4. Проверяем чекбокс (согласие)
        if (agreementInput && !agreementInput.checked) {
            let span = document.createElement("span");
            span.className = "error-text";
            span.innerText = "Необходимо согласие";
            // Вставляем ошибку в конец блока с чекбоксом
            agreementInput.closest('.checkbox-group').appendChild(span);
            hasError = true;
        }

        // 5. Если всё заполнено — выводим результат
        if (!hasError) {
            // Создаем или находим блок для вывода
            let resultDiv = document.querySelector(".result");
            if (!resultDiv) {
                resultDiv = document.createElement("div");
                resultDiv.className = "result";
                resultDiv.style.marginTop = "20px";
                resultDiv.style.fontSize = "14px";
                resultDiv.style.lineHeight = "1.6";
                form.after(resultDiv); // Вставляем после формы
            }

            // Получаем данные для вывода
            let nameVal = nameInput.value;
            let emailVal = emailInput.value;
            let phoneVal = phoneInput.value;
            
            // Для пароля выведем звездочки для безопасности
            let passVal = "*".repeat(passwordInput.value.length);

            // Выводим данные
            resultDiv.innerHTML = `
                <strong>Имя:</strong> ${nameVal}<br>
                <strong>Email:</strong> ${emailVal}<br>
                <strong>Телефон:</strong> ${phoneVal}<br>
                <strong>Пароль:</strong> ${passVal}<br>
                <strong>Согласие:</strong> Да
            `;

            // Очищаем форму
            this.reset();
        }
    });
});