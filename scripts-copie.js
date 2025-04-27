const BASE_URL = "https://jsonplaceholder.typicode.com/";
console.log(BASE_URL);

const dataUsers = "users/";

const h1 = document.querySelector("h1");

const divSearch = document.createElement("div");
const inputSearch = document.createElement("input");
const btnSearch = document.createElement("button");

divSearch.setAttribute("id", "contentSearch");

inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("placeholder", "Veuillez saisir un nom");

h1.insertAdjacentElement("afterend", divSearch);

btnSearch.textContent = "Rechercher";

divSearch.appendChild(inputSearch);
divSearch.appendChild(btnSearch);

const tbody = document.querySelector("tbody");
console.log(tbody);

function createTd(content) {
  const td = document.createElement("td");
  td.innerText = content;
  return td;
}

async function callApi() {
  const response = await fetch(BASE_URL + dataUsers);
  const data = await response.json();
  console.log(data);

  let users = data;
  console.log(users);

  showData(users);
  return data;
}

function showData(users) {
  console.log(users);
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);

    let tr = document.createElement("tr");

    tr.appendChild(createTd(`${i + 1}.`));
    tr.appendChild(createTd(users[i].name));
    tr.appendChild(createTd(users[i].email.toLowerCase()));
    tr.appendChild(createTd(users[i].phone));
    tr.appendChild(createTd(users[i].website));
    tr.appendChild(createTd(users[i].address.zipcode));

    tbody.appendChild(tr);
  }
}
callApi();

btnSearch.addEventListener("click", async () => {
  const searchValue = inputSearch.value;
  console.log("Valeur rechercher : ", searchValue);

  const urlName = `${BASE_URL}${dataUsers}?name=${searchValue}`;
  console.log("Valeur de l'url : ", urlName);

  const response = await fetch(urlName);
  const data = await response.json();
  console.log("Données recues: ", data);

  tbody.innerHTML = "";

  showData(data);
});
