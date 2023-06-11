/*const handler = async() =>{
    const resp = await fetch('https://reqres.in/api/users/');
    const data = await resp.json();
    const users = data.data.map(({email, first_name, last_name, avatar}) =>({
        email, 
        first_name, 
        last_name, 
        avatar,
    }));
    for(let i = 0; i < users.length; i ++){
        render(users[i]);
    }
}


const rootElem = document.querySelector('#root');
function render(user){
const div = document.createElement('div');
const imgElem = document.createElement('img');
const pElem = document.createElement('p');
const aElem = document.createElement('a');

imgElem.src = user.avatar;
pElem.innerText = `${user.first_name} ${user.last_name}`;
aElem.href = user.email;
aElem.innerText = user.email;

div.append(imgElem, pElem, aElem);
rootElem.append(div);

}



handler();





// доработать getUser таким образом, чтобы он делал запрос по новой ссылку 
// и выводил в консоль массив из объектов
// у каждого объекта должны быть свойства id, first_name, last_name, avatar, email

// используя метод render отрисуйте данные каждого пользователя из массива users
    // из render уберите email*/



 //----------------------------------------------------------------------------   
/*написать приложение, которое позволяет загрузить и отобразить данные про коктейли. 

ссылка на API (выдает данные про 25 коктейлей) https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a


каждая карточка должна содержать картинку, наименование коктейля и рецепт. */

const handler = async() =>{
    const resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    const data = await resp.json();
    const coctails = data.drinks.map(({strDrink/*Na*/,strDrinkThumb/*im*/ ,strInstructions/*rec*/ }) =>({
        strDrink,
        strDrinkThumb,
        strInstructions,
    }));
    for(let i = 0; i < coctails.length; i ++){
        render(coctails[i]);
    }
}


const rootElem = document.querySelector('#root');
function render(coctail){
const div = document.createElement('div');
const divText = document.createElement('div');
const imgElem = document.createElement('img');
const pElem = document.createElement('p');
const hElem = document.createElement('h2');
const pIngr = document.createElement('p');

divText.className = 'content';
imgElem.src = coctail.strDrinkThumb;
pElem.innerText = `${coctail.strInstructions}`;
hElem.innerText = coctail.strDrink;

divText.append(hElem, pElem);
div.append(imgElem, divText);
rootElem.append(div);

}



handler();

