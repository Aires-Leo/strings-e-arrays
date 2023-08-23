/*Exercício de interpretação de códigos

1) 

let array
console.log('a. ', array)
// a. undefined

array = null
console.log('b. ', array)
// b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c. 11

let i = 0
console.log('d. ', array[i])
//d. 3

array[i+1] = 19
console.log('e. ', array)
//e. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19

const valor = array[i+6]
console.log('f. ', valor)
//f. 9


2)
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

SUBI NUM ÔNIBUS EM MIRROCOS 27  

Exercício de escrita de código
1)

const email = prompt("Qual seu e-mail?")
const nome = prompt("Qual seu nome de usuário")
console.log(`O, e-mail ${email} foi cadastrado com sucesso`)
console.log(`Seja bem-vinda(o), ${nome}`)

2) 

const comidasFavoritas = ["lasanha", "pipoca", "brigadeiro", "xis", "pizza"]
console.log(comidasFavoritas)

const mudanca = prompt("Qual sua comida favoita?")
comidasFavoritas[1] = mudanca
console.log(comidasFavoritas)
console.log(`Suas comidas favoritas são: 
${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}
`)

3)
*/
const listaDeTarefas = []
const tarefa1 = prompt("Tarefa a fazer nº1:")
const tarefa2 = prompt("Tarefa a fazer nº2:")
const tarefa3 = prompt("Tarefa a fazer nº3:")
console.log(listaDeTarefas)


