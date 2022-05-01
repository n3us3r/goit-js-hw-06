// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).


// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categoriesEl = document.querySelector("#categories");

const categoriesChildrenEl = categoriesEl.children;

const categoriesChildrenLengthEl = categoriesChildrenEl.length;
console.log(`Number of categories: ${categoriesChildrenLengthEl}`);

for(let i = 0; i < categoriesChildrenLengthEl; i += 1) {
	console.log(`Category: ${categoriesChildrenEl[i].firstElementChild.textContent}`);
	console.log(`Elements: ${categoriesChildrenEl[i].lastElementChild.children.length}`);
}