var global;
var global1, global2;
var global3 = 4;

var soyUnaVariableGlobal;
let soyUnaVariableLocal;
const soyUnaConstante = 'Su valor, nunca cambia';

var persona = {
    nombre: 'Leonel Messi',
    edad:18,
    sexo:'M',
    dpi:748399393,
    caminar: function(){
        console.log(`Estoy caminando ${this.nombre}`);
    }
}

var arreglo = [1,2,3,'4',5,'6'];


function suma(){
    persona.caminar();

    let val1 = document.getElementById('num1').value;
    let val2 = document.getElementById('num2').value;
    let result = parseInt(val1) + parseInt(val2);
    document.getElementById('result').value = result;
}



let foo = 42;    // foo ahora es un número
foo     = 'bar'; // foo ahora es un string
foo     = true;  // foo ahora es un booleano