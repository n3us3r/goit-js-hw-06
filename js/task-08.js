/*{ 
<form class="login-form">
	<label>
		Email
		<input type="email" name="email" />
	</label>
	<label>
		Password
		<input type="password" name="password" />
	</label>
	<button type="submit">Login</button>
</form>

1. Обработка отправки формы form.login-form должна быть по событию submit.
2. При отправке формы страница не должна перезагружаться.
3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
4. Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. }*/


const loginFormEl = document.querySelector(".login-form");

const onFormSubmitClick = (event) => {
event.preventDefault();

// const { elements: { email, password} } = event.currentTarget;

const formElements = event.currentTarget.elements;
const formElementsEmail = formElements.email;
const formElementsPassword = formElements.password;

if(formElementsEmail.value === "" || formElementsPassword.value === "") {
	alert("Please fill all fields");
}
// if(email.value === "" || password.value === "") {
// 	alert("Please fill all fields");
// }

const submitResult = {
[formElementsEmail.name]: formElementsEmail.value,
[formElementsPassword.name]: formElementsPassword.value,
}
// const submitResult = {
// [email.name]: email.value,
// [password.name]: password.value,
// }
console.log(submitResult);
event.currentTarget.reset();
}

loginFormEl.addEventListener('submit', onFormSubmitClick);
