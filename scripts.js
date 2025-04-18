const BASE_URL = "https://jsonplaceholder.typicode.com/";
console.log(BASE_URL);

let usersName;

async function nameApi() {
  const response = await fetch(BASE_URL + "users/");
  const data = await response.json();
  console.log(data);
  usersName = data;
  console.log(usersName);
  return data;
}
nameApi();
