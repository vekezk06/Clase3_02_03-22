import { Suma } from './Ejercicio.js'
import { Suma } from 'Ejercicio2.js'

let num1;
let num2;

let btnEj1 = document.getElementById('Ejercicio1');
let btnEj2 = document.querySelector('#Ejercicio2');
let Resultado1 = document.getElementById('ResEj1')

function LeerDatos(){
    num1 = Number(prmpt('Ingrese Numero 1'));
    num2 = Number(prompt('Ingrese Numero 2'));
}
import { Suma } from './suma.js'
import { Resta } from './resta.js'
import { Multiplicacion } from './multiplicacion.js'
import { Division } from './division.js'

console.log(Suma(5,4))
console.log(Resta(5-4))
console.log(Multiplicacion(5*4))
console.log(Division(5/4))

btnEj1.addEventListener('click', () => {
    LeerDatos()
    console.log(Suma(num1, num2))
    console.log(`La suma es ${suma()}
} ) 