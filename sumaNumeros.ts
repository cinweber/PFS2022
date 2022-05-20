import * as rls from 'readline-sync';
let primerNumero : number = rls.questionInt ("Ingrese el primer numero:");
let segundoNumero : number = rls.questionInt ("Ingrese el segundo numero:");
let resultado : number;
resultado = 0
if (primerNumero < segundoNumero)
    for  (primerNumero; primerNumero<=segundoNumero; primerNumero++) {
        resultado = resultado + primerNumero;
} else 
if (primerNumero > segundoNumero)
    for (segundoNumero; segundoNumero<=primerNumero; segundoNumero++) {
        resultado = resultado + segundoNumero;
    }
    console.log ("La suma entre los dos numeros elegidos es:" , resultado);
