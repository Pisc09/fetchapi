const BASE_URL = "https://jsonplaceholder.typicode.com/";
console.log(BASE_URL);

console.log(table);

async function callApi() {
  const response = await fetch(BASE_URL + "users");
  const data = await response.json();
  console.log(data);

  return data;
}
callApi();

async function showData() {
  for (let i = 0; i < users.length; i++) {
    const users = await callApi();
    const table = document.querySelectorAll("td");
    table[0].textContent = users.name;
    table[1].textContent = users.email;
    table[2].textContent = users.phone;
    table[3].textContent = users.website;
    table[4].textContent = users.address.zipcode;
  }
}
showData();
