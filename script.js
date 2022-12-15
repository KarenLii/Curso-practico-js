// h1 { color: red }
// .clasp { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const clasp = document.querySelector('.clasp');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log(input.value);

console.log({
    h1,
    p,
    clasp,
    pid,
    input
});

// h1.innerHTML = 'Bazinga <br> Of: Sheldon Cooper';

// h1.innerText = 'Bazinga <br> Of: Sheldon Cooper';

// h1.getAttribute Nos ayuda a leer alguna de los elementos o atributos que tenga nuestro elemento 

// console.log(h1.getAttribute('class'));

// h1.setAttribute sirve para modificar esa clase

// h1.setAttribute('class', 'rojo');

h1.classList.add('azul');
h1.classList.remove('verde');

// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value= "Mario Mendoza";

const img = document.createElement('img');
img.setAttribute('src', 'https://i.imgur.com/PfA0M2o.gif');

console.log(img);

pid.innerHTML = "";
pid.append(img);



