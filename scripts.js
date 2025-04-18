const BASE_URL = fetch("https://jsonplaceholder.typicode.com/");

async function nameApi() {
  fetch(BASE_URL + "todos/");
  const response = await BASE_URL;
  const data = response;
  console.log(data);
}
nameApi();
