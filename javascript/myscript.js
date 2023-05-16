// PROMPT PER CHIEDERE NOME 
let nome = prompt ("Qual è il tuo nome?")

// PROMPT PER CHIEDERE COGNOME 
let cognome = prompt ("Qual è il tuo cognome?")

// PROMPT PER CHIEDERE COLORE 
let colore = prompt ("Qual è il tuo colore preferito?")

// concatenazione stringhe
let password = nome + cognome + colore + 21 

// STAMPA PASSWORD SULLA PAGINA
document.getElementById("password").innerHTML= `La tua password è: ${password}`