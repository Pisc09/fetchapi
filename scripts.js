const BASE_URL = "https://jsonplaceholder.typicode.com/";
console.log(BASE_URL);

async function nameApi() {
  const response = await fetch(BASE_URL + "users/1");
  const data = await response.json();
  console.log(data);
  return data;
}
nameApi();
