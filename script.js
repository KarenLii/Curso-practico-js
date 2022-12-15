const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#botonCal')

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    //console.log(event);
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResul.innerText ="Resultado: " + sumaInputs;
}

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    //console.log(event);
    //event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResul.innerText ="Resultado: " + sumaInputs;
}





















// console.log(h1);

// console.log(input.value);

// console.log({
    // h1,
    // p,
    // clasp,
    // pid,
    // input
// });

// h1.innerHTML = 'Bazinga <br> Of: Sheldon Cooper';

// h1.innerText = 'Bazinga <br> Of: Sheldon Cooper';

// h1.getAttribute Nos ayuda a leer alguna de los elementos o atributos que tenga nuestro elemento 

// console.log(h1.getAttribute('class'));

// h1.setAttribute sirve para modificar esa clase

// h1.setAttribute('class', 'rojo');

// h1.classList.add('azul');
// h1.classList.remove('verde');

// h1.classList.toggle('verde');
// h1.classList.contains('verde');

// input.value= "";

// const img = document.createElement('img');
// img.setAttribute('src', 'https://i.imgur.com/PfA0M2o.gif');

// console.log(img);

// pid.innerHTML = "";
// pid.append(img);




