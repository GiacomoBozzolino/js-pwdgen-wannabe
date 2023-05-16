// PROMPT PER CHIEDERE NOME 
let nome = prompt ("Qual è il tuo nome?")
console.log(nome)
// PROMPT PER CHIEDERE COGNOME 
let cognome = prompt ("Qual è il tuo cognome?")
console.log(cognome)
// PROMPT PER CHIEDERE COLORE 
let colore = prompt ("Qual è il tuo colore preferito?")
console.log(colore)
// concatenazione stringhe
let password = nome + cognome + colore + 21 
console.log(password)
// STAMPA PASSWORD SULLA PAGINA
document.getElementById("password").innerHTML= `La tua password è: ${password}`