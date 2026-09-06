const teamMembers = [
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


//trovare elemento team-list
const teamList = document.querySelector(".team-list");

teamMembers.forEach(member => {
  const { name, role, email, img } = member;
  const card = `
        <li class="col">
            <div class="text-center bg-black text-white pt-3 pb-1 shadow rounded-5">
              <img class="img-fluid rounded-1" 
              src="${img}"
              alt="${name}">
              <h3>${name}</h3> 
              <p>${role}</p>
              <p>${email}</p>
            </div>
        </li>
    `;
  teamList.innerHTML += card;
});

//add new member

const teamForm = document.querySelector(".team-form");

teamForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const email = document.getElementById("email").value.trim();
  const img = document.getElementById("img").value.trim();
  const member = { name, role, email, img };
  teamMembers.push(member);
  teamList.innerHTML += `
        <li class="col">
            <div class="text-center bg-black text-white pt-3 pb-1 shadow rounded-5">
              <img class="img-fluid rounded-1" 
              src="${img}"
              alt="${name}">
              <h3>${name}</h3> 
              <p>${role}</p>
              <p>${email}</p>
            </div>
        </li>
    `;
});
