// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede


// Wayne Barnett	  Founder & CEO	         wayne-barnett-founder-ceo.jpg
// Angela Caroll	  Chief Editor	         angela-caroll-chief-editor.jpg
// Walter Gordon	  Office Manager	     walter-gordon-office-manager.jpg
// Angela Lopez	  Social Media Manager	 angela-lopez-social-media-manager.jpg
// Scott Estrada	  Developer	             scott-estrada-developer.jpg
// Barbara Ramos	  Graphic Designer	     barbara-ramos-graphic-designer.jpg


const staffMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    },

];

// variabile per le cards
let cardsEl = document.getElementById("cards");


for( let i = 0; i < staffMembers.length; i++){


    // creo il contenitore delle cards
    let newCardElement = document.createElement('div');
    cardsEl.append(newCardElement);
    newCardElement.classList.add('badge');


    // variabile per l'elemento corrente
    let person = staffMembers[i];

    // variabile del nome
    let nameEl = document.createElement('div');
    nameEl.innerText = person.name;
    nameEl.classList.add('name');

    // variabile del ruolo
    let roleEl = document.createElement('div');
    roleEl.innerText = person.role;
    roleEl.classList.add('role');
    // variabile per img
    let imgEl = document.createElement('img');
    imgEl.src = "img/" + person.img;
    imgEl.classList.add('img-style');

    
    
    newCardElement.append(imgEl);
    newCardElement.append(nameEl);
    newCardElement.append(roleEl);
}

