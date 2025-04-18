const BASE_URL = "https://jsonplaceholder.typicode.com/";
console.log(BASE_URL);

const tbody = document.querySelector("tbody");
console.log(tbody);

async function callApi() {
  const response = await fetch(BASE_URL + "users/");
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

    const tdName = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdPhone = document.createElement("td");
    const tdWebsite = document.createElement("td");
    const tdZipCode = document.createElement("td");

    tdName.innerText = users[i].name;
    tr.appendChild(tdName);

    tdEmail.innerText = users[i].email.toLowerCase();
    tr.appendChild(tdEmail);

    tdPhone.innerText = users[i].phone;
    tr.appendChild(tdPhone);

    tdWebsite.innerText = users[i].website;
    tr.appendChild(tdWebsite);

    tdZipCode.innerText = users[i].address.zipcode;
    tr.appendChild(tdZipCode);

    tbody.appendChild(tr);
  }
}
callApi();
