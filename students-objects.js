/*Creare un oggetto che descriva uno studente, con le seguenti proprietà: 
nome, cognome e età.

Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

Creare un array di oggetti di studenti.

Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente
inserendo nell’ordine: nome, cognome e età.*/

//Dichiaro una variabile oggetto "Studente" che contiene le informazioni dello studente
var student = {
    name: "Massimo",
    surname: "Pericolo",
    age: "28",
};

//Con un ciclo "for in" printo solamente i valori delle chiavi dell'oggetto "Studente"
for (var key in student) {
    console.log(student[key]);
};

//Dichiaro i prompt che l'utente utilizzerà per aggiungere i dati di un nuovo studente
var studentName = prompt("Inserisci il nome dello studente");
var studentSurname = prompt("Inserisci il cognome dello studente");
var studentAge = prompt("Inserisci l'età dello studente");

//Avverto l'utente qualora inserisse dei caratteri di testo al posto dei numeri 
if (isNaN(studentAge)) {
    alert("Sono ammessi solo numeri");
    parseInt(prompt("Inserisci l'età dello studente utilizzando solo numeri"))
};

//Creo un'array di oggetti corrispondenti a diversi studenti
var students = [
    student1 = {
        name: "Guè",
        surname: "Pequeno",
        age: "41",
    },
    student2 = {
        name: "Fabio",
        surname: "Marracash",
        age: "40",
    },
    student3 = {
        name: "Jake",
        surname: "La Furia",
        age: "42",
    },
    student4 = {
        name: studentName,
        surname: studentSurname,
        age: studentAge,
    }
];

//Ciclo l'array ed estraggo solo i primi due valori di ogni singolo oggetto
for (var i = 0; i < students.length; i++) {
    console.log(students[i]['name']);
    console.log(students[i]['surname']);
}

//Printo anche il terzo valore, ma solo quello del nuovo studente aggiunto dall'utente
console.log(students[3]['age']);
