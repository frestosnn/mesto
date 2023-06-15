function showInputError(formEl, inputEl, errorMessage) {
  //функция добавления ошибки, принимает конкретную форму и инпут в этой форме, а так же текст ошибки (это объект в JS)
  const errorElement = formEl.querySelector(`.${inputEl.id}-error`); //ищем место, где будет текст ошибки
  inputEl.classList.add('popup__input_type_error'); //добавляем инпуту стили, то есть красный бордер
  errorElement.textContent = errorMessage; //текст ошибки = встренному тексту ошибок JS
  errorElement.classList.add('popup__error_visible'); //добавляем ему стили
}

function hideInputError(formEl, inputEl) {
  //функция прячущая ошибку, принимает конкретную форму и инпут в этой форме
  const errorElement = formEl.querySelector(`.${inputEl.id}-error`); //ищем место в HTML где будет текст ошибки
  inputEl.classList.remove('popup__input_type_error'); //из инпута удаляем класс ошибки, то есть красный бордер
  errorElement.classList.remove('popup__error_visible'); //удаляем стили ошибки
  errorElement.textContent = ''; //очищаем текст ошибки
}

function isValid(formEl, inputEl) {
  //функция проверяющая валидность данных
  if (!inputEl.validity.valid) {
    //если в инпуте в объекте validity ключ valid === false
    showInputError(formEl, inputEl, inputEl.validationMessage); //то вызываем функцию показать ошибку в конкретной форме в этом инпуте
  } else {
    //если valid === true, то спрятать ошибку в конкретной форме в этом инпуте
    hideInputError(formEl, inputEl);
  }
}

//эти две функции работают так: перебираем все формы на странице и для каждой формы по очереди вызывается функция setEventListners. Эта функция в свою очередь перебирает в одной форме все инпуты (то есть, в конкретной форме1 перебирает её инпуты например инпут1 инпут2 инпут3 инпут4) и проверяет валидность данных инпутов. Но из-за того, что enableValidation ищет все формы на странице и применяет метод forEach, то далее после проверки формы1, идет проверка формы2 и т.д.. И для формы2 весь цикл повторяется(то есть, уже в форме2 ищутся её конкретные инпуты - инпут1 инпут2 инпут3 с помощью функции setEventListners)

function setEventListeners(formEl) {
  //функция для проверки корректности инпутов
  const inputList = Array.from(formEl.querySelectorAll('.popup__input')); //находим все инпуты в определенной форме
  inputList.forEach(function (inputEl) {
    //для каждого инпута добавляем слушатель
    inputEl.addEventListener('input', () => {
      //функция isValid проверяем валидный ли код в каждом конкретном инпуте (то есть, для всех инпутов по очереди) в одной форме
      isValid(formEl, inputEl);
    });
  });
}

function enableValidation() {
  //функция собирающая со строницы все формы
  const formList = Array.from(document.querySelectorAll('.popup__form')); //ищем все формы и делаем их массивом
  formList.forEach(function (formEl) {
    //для каждой формы вызываем функцию setEventListners
    setEventListeners(formEl);
  });
}

enableValidation();
