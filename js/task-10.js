// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.


// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>


// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должны иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const collectionControlsEl = document.querySelector("#controls");
const collectionInputEl = collectionControlsEl.firstElementChild;
const buttonCreateBoxesEl = document.querySelector('[data-create]');
const buttonDestroyBoxesEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

let boxSize = 30;

const inputValue = () => {
	let amount = collectionInputEl.value;
	collectionInputEl.value = "";
	createBoxes(amount);
} 

const createBoxes = amount => {
	for (let i = 1; i <= Number(amount); i += 1) {
		
		let newDiv = document.createElement('div');
		newDiv.style.backgroundColor = getRandomHexColor();
		newDiv.style.width = boxSize + "px";
		newDiv.style.height = boxSize + "px";
		newDiv.style.border = "1px solid black";
		newDiv.classList.add('new-box');
		boxSize += 10;
		boxesEl.append(newDiv);
	}
};

const removeBoxes = () => {
	const allNewBoxes = document.querySelectorAll('.new-box');
	for (const box of allNewBoxes) {
		boxesEl.removeChild(box);
		boxSize = 30;
	}
}

buttonCreateBoxesEl.addEventListener('click', inputValue);

buttonDestroyBoxesEl.addEventListener('click', removeBoxes);