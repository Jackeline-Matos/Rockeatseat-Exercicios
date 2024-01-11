let firstNumberUser = prompt ("Digite o primeiro número");
let secondNumberUser = prompt ("Digite o segundo número");

function sum(number1, number2) {
    return alert (`A soma dos dois números é ${Number(number1) + Number(number2)}`)  
}

console.log(sum(firstNumberUser, secondNumberUser));




function subtraction(number1, number2) {
    return alert (`A subtracao dos dois números é ${Number(number1) - Number(number2)}`)  
}
console.log(subtraction(firstNumberUser, secondNumberUser));



function multiplication(number1, number2){
    return alert (`A multiplicacao dos dois números é ${Number(number1) * Number(number2)}`)  

}
console.log(multiplication(firstNumberUser, secondNumberUser));


function division(number1, number2){
    return alert (`A divisao dos dois números é ${Number(number1) / Number(number2)}`)  

}

console.log(division(firstNumberUser, secondNumberUser));


function remeinderDivision( number1, number2){
    return alert (`O resto da divisao do número 1 é ${(Number(number1)% 10).toFixed(1) }. O resto da divisao do número 2 é ${(Number(number2)% 10).toFixed(1) } `)  
}

console.log(remeinderDivision(firstNumberUser, secondNumberUser));

let soma = Number(firstNumberUser) + Number(secondNumberUser);

if(soma % 2  === 0){
    console.log( alert (`A Soma dos dois números é par `))

}else {
    console.log ( alert (`A Soma dos dois números é ímpar `))
}

if(Number(firstNumberUser) !== Number(secondNumberUser) ){
    console.log(alert (`Os números digitados sao diferentes `));
}else {
    console.log (alert (`Os números digitados sao iguais `))
}