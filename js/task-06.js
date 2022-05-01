// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputContentEl = document.querySelector("#validation-input");

const onInputValidation = (event) => {
	if (Number(event.target.dataset.length) === event.currentTarget.value.length) {
		inputContentEl.classList.add("valid");
		inputContentEl.classList.remove("invalid");
	} else {
		inputContentEl.classList.add("invalid");
		inputContentEl.classList.remove("valid");
	}
}

inputContentEl.addEventListener('blur', onInputValidation);