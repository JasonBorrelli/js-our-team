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
let savedMembers = localStorage.getItem("teamMembers");
let teamMembers = savedMembers ? JSON.parse(savedMembers) : initialTeamMembers;

// Elementi del DOM
const teamList = document.querySelector(".team-list");
const teamForm = document.querySelector(".team-form");

// Funzione per generare il markup HTML di una card
function createMemberCard(member) {
  const { name, role, email, img } = member;
  return `
    <li class="col">
        <div class="text-center bg-black text-white pt-3 pb-1 shadow rounded-5">
          <img class="img-fluid rounded-1" 
               src="${img}" 
               alt="${name}">
          <h3 class="mt-2">${name}</h3> 
          <p class="mb-1">${role}</p>
          <p class="text-secondary">${email}</p>
        </div>
    </li>
  `;
}

// Funzione per renderizzare la lista completa dei membri
function renderTeamList() {
  teamList.innerHTML = "";
  teamMembers.forEach(member => {
    teamList.innerHTML += createMemberCard(member);
  });
}

// Render iniziale dei membri
renderTeamList();

// Gestione submit del form per aggiungere un nuovo membro
teamForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const email = document.getElementById("email").value.trim();
  const img = document.getElementById("img").value.trim();

  if (!name || !role || !email || !img) {
    return;
  }

  const newMember = { name, role, email, img };

  // Aggiunta del nuovo membro all'array in memoria
  teamMembers.push(newMember);

  // Salvataggio dell'array aggiornato in localStorage
  localStorage.setItem("teamMembers", JSON.stringify(teamMembers));

  // Aggiunta della nuova card alla lista nel DOM
  teamList.innerHTML += createMemberCard(newMember);

  // Reset dei campi del form
  teamForm.reset();
});



