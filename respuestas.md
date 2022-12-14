## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Son espacios en la memoria en dónde podemos guardar información. Son como cajitas, de cualquier tipo de información o datos.Entre los qué están:
    1) Caracteres
    2) Strings
    3) Números
    4) Booleanos (True o False)
    5) Funciones, ejecutar funciones con ciertos argumentos. Eso depende del lenguaje y los tipos de datos que soporte el lenguaje.

**Respuesta del profesor**

Cajitas (espacios en memoria) dónde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Podemos usar diferentes opciones para crear variables:
    * Var (la forma más antigua, presenta fallas)
    * Let (Nos permite cambiar el valor de nuestras variables en el futuro)
    * Const (No nos permite cambiar el valor en el futuro)

Ejemplo: 
        let nombre  = 'Karen'
        (Declarar)  = (Inicializar)  
        nombre      = 'Lizeth'
        (Reinicializar)

**Respuesta del profesor**

Declarar es cuando le decimos a JS que vamos a crear una variables con tal nombre. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

El simbolo que nos permite sumar y concatenar es igual y es +

Ejemplo: 
    Let suma 2 + 2
    suma = 4
    Let sumaString "Hola " + "Karen"
    sumaString = "Hola Karen"

**Respuesta del profesor** 

El operador que nos permite sumar o concatenar es +. Este operador  nos permite sumar números cuando lo usamos con números. Pero cuando los usamos con strings lo que hace es unir (concatenar) ambos strings.


### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: **String**
- Apellido: **String**
- Nombre de usuario en Platzi: **String**
- Edad: **Números**
- Correo electrónico: **String**
- Mayor de edad: **Booleanos**
- Dinero ahorrado: **Números**
- Deudas: **Números**

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Karen';
let apellido = 'Patiño';
let username = 'karen.patino.devia';
let edad = 26;
let mail = 'karen.patino.devia@gmail.com'
let esMayorDeEdad = True;
let dineroAhorrado = $ 0;
let deudas = $ 0;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

Son la forma en la que encapsulamos(guardar o ponerlo dentro de una burbuja) bloques de código reutilizable (ejecutable) en el futuro. 

**Respuesta del profesor**

Las funciones nos permiten encapsular (guardar) bloques de código para reutilizarlos y ejecutarlos en el futuro.

- ¿Cuándo me sirve usar una función en mi código?

Nos sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrían ser paárametros o argumentos) que podemos encapsular para reutilizar más de una vez en el futuro. 

También nos sirve para ordenar y mejorar la legibilidad de nuestro código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Las funciones reciben parámetros, pero cuando las vamos a ejecutar ya no estamos recibiendo parámetros de una función ahora estamos enviando argumentos a nuestra función.

Ejemplo:
    function nombreCompleto(nombre, apellido) {
        return nombre + ' ' + apellido
    }
    (Lo que esta dentro de los {} son los parámetros de la función)
    nombreCompleto('Karen', 'Patiño')
    (Lo qué esta dentro de los () son los argumentos que se enviana la función)

**Respuesta del profesor**

Las funciones reciben parámetros cuando las estamos creando. Y les enviamos argumentos cuando las ejecutamos. 

### 2️⃣ Convierte el siguiente código en una función, pero cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Karen Lizeth";
const lastname = "Patiño Devia";
const completeName = name + lastname;
const username = "KarenLii";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");

function saludo(name, lastname, ) {
    const completeName = nombreCompleto(name, lastname);
    const username = "KarenLii"; 

    console.log("Mi nombre es " + completeName + "pero prefiero que me digas" + username + ".");
}

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

Son la forma en que ejecutamos un bloque de código u otro dependiendo de una condición o validación.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    * If (else y else if): Nos permite hacer algo parecido a la condicional switch, pero en if no siempre tenemos que hacer esta validación con la misma variable.
    * Switch: El condicional switch nos permite agregar una variable que queramos validar y después por medio de casos (case), empezar a preguntar si esa condición o variable cumple con esta condición. 

**Respuesta del profesor** 

El condicional if (con sus complementos else y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condicional. En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?

Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales. 

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertDuo":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else (tipoDeSuscripcion == 'ExpertDuo') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

Es la forma de ejecutar unos mismos bloques de código, hasta que se cumpla algún condición.

**Respuesta del profesor**

Es la forma de ejecutar un bloque de código hasta que se cumpla cierta condición.

- ¿Qué tipos de ciclos existen en JavaScript?

While, do while y for.

    * Do while: Automáticamente nos obliga a definir que pasa al principio y al final de cada ejecución de código en nuestro ciclo. 
    * For: Automaticamente nos pide que inicialicemos una variable, que definamos algún momento en que nuestro ciclo debe terminar (la validación como tal); y además alguan variable que deba cambiar.

- ¿Qué es un ciclo infinito y por qué es un problema?

Es cuando nuestra condición o validación para terminar de ejecutar nuestros ciclos nunca se cumple. Por lo tanto, los ciclos se siguen, se siguen, se siguen... ejecutando hasta que nuestro navegador o dónde estemos ejecutando nuestro js, dice: "No más, llegué al límite, ya no puedo más" (Totear nuestro navegador o código js)

**Respuesta del profesor**

Es cuando la validación de nuestros condicionales nunca se cumple y termina toteando (dañando) la aplicación (e.j. cuando el navegador ya no puede más de tanta ejecución de ese bloque de código).

- ¿Puedo mezclar ciclos y condicionales?

Sí. Los ciclos son una especie de condicional, solamente que se va a estar y estar ejecutando, hasta que esa condicional fallé. Pero tener un condicional ahí, que nos ayudé a parar la ejecución de nuestro código no nos impide tener otros condicionales. Por ejemplo, imagínate que tenemos una lista del 0 al 10, y queremos ejecutar una cosa cuando el número sea para y otra cuando sea impar.
Primero debemos ejecutar nuestro código, crear una variable, que empiece en 0 y decirle que para que el ciclo se ejecute y la variable i.
Y al final de cada ejecución +1.
Eso hace que se imprima nuestra lista de números.

**Respuesta del profesor**

Sí, aunque los ciclos son una especie de condicionales, nada nos impide agregar más condicionales dentro del ciclo.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
let i = 0:

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--
}

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
> 💡 Pista: puedes usar la función prompt de JavaScript.

let respuesta = prompt('¿Cuánto es 2 + 2?'); 

let respuesta;

while (respuesta != '4') {
    let pregunta = prompt ('Cuánto es 2 + 2')
    respuesta = pregunta;
}

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

Es una lista de elementos. Las listas son conjuntos de elementos.
Ejemplo:
    const array = [1, 'jaja', true, false];

- ¿Qué es un objeto?

Es una lista de elementos, pero cada elemento tiene un nombre clave.
Ejemplo:
    const obj = {
        nombre = 'Sebas',
        edad = 27
    };

- ¿Cuándo es mejor usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir). Mientras que un objeto cuando los nombre de cada elemento son importante para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Sí. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades. 

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

fuction imprimirPrimerElementoArray(arr) {
    console.log(obj.lala)
    console.log(arr[0])
}
imprimirPrimerElementoArray(['Vino', 'Galletas'])

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
imprimirElementoPorElemento('Buñelos', 'Natilla', 'Masato')

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
