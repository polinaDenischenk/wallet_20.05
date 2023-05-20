let units = document.querySelectorAll('.unit')

console.log(units[1].getAttribute('stroke-dasharray'));

// unit.setAttridute('stroke-dsasharray', '5 3' )

console.log(units[1].getAttribute('stroke-dasharray'));
let product = 2000;
let fastFood = 1480;
let sport = 4000;
let drink = 500;

let spending = {
    product : 2000,
    fastFood : 1480,
    sport : 4000,
    drink : 500
}

let sum = 0;

for(key in spending){
    console.log(spending[key]);
    sum = sum + spending[key];
}

console.log('Сумма' , sum);

let percentArr = [];

for(let key in spending){
    percentArr.push(spending[key] / sum * 100);
}

console.log(percentArr);

let percentAccumulation = 0;

for (let i = 0; i< units.length; i++){
    units[i].setAttribute('stroke-dsaharray', "${percentArr[i]} 100")
    if(percentArr[i - 1]){
        percentAccumulation += percentArr[i - 1];
    }
    console.log('накопитель', percentAccumulation);
    units[i].setAttribute('strke-dashoffest', -percentAccumulation);
}

let purcashe = {};
let purcasheArray = [];
// let btn = form.addBtn = [];
let tbody = document.querySelector('#tbody');
let categories = document.querySelectorAll('.legend__price');

console.log(categories);

// btn.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     purcashe.name = form.name.value;
//     purcashe.ptice = form.price.value;
//     purcashe.categoRY = form.selectCategory.options[form.selectCategory.selectedIndex].innerText;
//     console.log(purcashe);
//     purcasheArray.push(purcashe);
//     console.log(purcasheArray)
//     tbody.insertAdjacentHTML('beforeend',

//     // <tr class= "purcashe__item purcashe__row" data-category= "product" >
//     //     <td class="purcashes__td">${purcashe.name}</td>
//     //     <td class="purcashes__td">${purcashe.category}</td>
//     //     <td class="purcashes__td">${purcashe.price}</td>
//     //     <td class="purcashes__td"><i class="purcashes__item-del fa-solid fa-xmark"></i></td>
//     // </tr>
//     )
//     form.reset();
// });

// tbody.addEventListener('click', (evt => {
//     if(evt.target.classList.contains('purcashes__item-del')){
//         evt.target.closets('tr').remove();
//     }
// }))

// console.log(form.selectCategory.options)