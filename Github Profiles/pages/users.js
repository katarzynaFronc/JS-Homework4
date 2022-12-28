import baseUrl from "../utils/baseUrl.js";

export default async function Users() {
  const users = await getUsers();
  console.log(users);
}

async function getUsers() {
  const response = await fetch(`${baseUrl}/users`);
  const users = await response.json();
  console.log(baseUrl);

  return users.results;
}
