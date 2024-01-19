var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var tagCount = {};

for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    tagCount[tag] = (tagCount[tag] || 0) + 1;
}

console.log("Задача 1: Подсчет тегов в массиве");
console.log(tagCount);


var array1 = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76];
var array2 = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];
var commonElements = [];

for (var i = 0; i < array1.length; i++) {
    var element = array1[i];
    if (array2.includes(element) && !commonElements.includes(element)) {
        commonElements.push(element);
    }
}

console.log("Задача 2: Поиск общих элементов в двух массивах");
console.log(commonElements);
