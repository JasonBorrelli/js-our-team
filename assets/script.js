// Array iniziale dei membri del team di default
const initialTeamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];

// Recupero dati da localStorage se presenti, altrimenti uso l'array iniziale
let savedMembers = localStorage.getItem("teamMembers");                                // salvo i dati nel local storage
let teamMembers = savedMembers ? JSON.parse(savedMembers) : initialTeamMembers;       // recupero i dati dal local storage  

// Elementi del DOM
const teamList = document.querySelector(".team-list");          // elementi del team
const teamForm = document.querySelector(".team-form");        // form per aggiungere un nuovo membro

// Funzione per generare il markup HTML di una card
function createMemberCard(member) {
  const { name, role, email, img } = member;
  return `
    <li class="col">
        <div class="text-center bg-black text-white pt-3 pb-1 shadow rounded-5 ">
          <img class="img-fluid rounded-1 w-25  " 
               src="${img} " 
               alt="${name}">
          <h3 class="mt-2">${name}</h3> 
          <p class="mb-1">${role}</p>
          <p class="text-secondary">${email}</p>
        </div>
    </li>
  `;
}

// Funzione per renderizzare la lista completa dei membri
function renderTeamList() {                                             //  funzione per renderizzare la lista completa dei membri
  teamList.innerHTML = "";                                               // svuota la lista
  teamMembers.forEach(member => {                                         // scorre l'array dei membri
    teamList.innerHTML += createMemberCard(member);                        // aggiunge la card del membro alla lista
  });
}

// Render iniziale dei membri
renderTeamList();                                                        // renderizza la lista completa dei membri

// Gestione submit del form per aggiungere un nuovo membro
teamForm.addEventListener("submit", function (e) {                        //  gestisce l'evento submit del form
  e.preventDefault();                                                   // impedisce il refresh della pagina al submit del form

  const name = document.getElementById("name").value.trim();               // prendo i dati del form
  const role = document.getElementById("role").value.trim();             // prendo i dati del form
  const email = document.getElementById("email").value.trim();           // prendo i dati del form
  const img = document.getElementById("img").value.trim();               // prendo i dati del form

  if (!name || !role || !email || !img) {                   // controllo che i dati non siano vuoti
    return;                                                 // se i dati sono vuoti, non aggiungo il membro
  }

  const newMember = { name, role, email, img };              // creo un nuovo membro

  // Aggiunta del nuovo membro all'array in memoria          
  teamMembers.push(newMember);                                 // aggiungo il nuovo membro all'array

  // Salvataggio dell'array aggiornato in localStorage
  localStorage.setItem("teamMembers", JSON.stringify(teamMembers));         // salvo l'array aggiornato in localStorage

  // Aggiunta della nuova card alla lista nel DOM
  teamList.innerHTML += createMemberCard(newMember);                         // aggiungo la card del nuovo membro alla lista

  // Reset dei campi del form
  teamForm.reset();                                                        // reset del form
});



