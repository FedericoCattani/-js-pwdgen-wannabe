/* 
--------------------------PASSWORD GENERATOR--------------------------

1.Chiedi all’utente il suo nome;

2.Poi chiedi il suo cognome,

3.Poi chiedi il suo colore preferito;

4.Infine scrivi sulla pagina nomecognomecolorepreferito23.


a)Inserire nome dell'utente in una var;

b)Inserire cognome dell'utente in una var;

c)Inserire colore preferito dell'utente in una var;

d)Stampa pagina con nome, cognome, colore preferito, eta(?)'

*/


/*1.a)*/
const nameUser = prompt('Inserisci il tuo nome');

console.log(nameUser);


/*2.b)*/
const surnameUser = prompt('Inserisci il tuo cognome');

console.log(surnameUser);


/*3.c)*/
const favoriteColor = prompt('Inserisci il tuo colore preferito')

console.log(favoriteColor);



document.getElementById('login').innerHTML += nameUser + ' ' + surnameUser + ' ' + favoriteColor


