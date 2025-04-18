const BASE_URL = "https://jsonplaceholder.typicode.com/";
console.log(BASE_URL);

let usersName;
let showUsers;
const h2 = document.querySelector("h2");

async function callApi() {
  const response = await fetch(BASE_URL + "users/1");
  const data = await response.json();
  //   console.log(data);
  console.log("test");

  usersName = data;
  console.log(usersName);
  return usersName;
}
callApi();

callApi().then((usersName) => {
  showUsers = usersName;
  console.log(showUsers);
  h2.append(usersName.name);
});
