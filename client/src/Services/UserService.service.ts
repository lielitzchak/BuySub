//liel keep going
export const basic_url =
  process.env.NODE_ENV === "production"
    ? "https://buy-sub.herokuapp.com/Api"
    : "http://localhost:11000/Api";
export const GetAllUsers = async (): Promise<any> => {
    return await fetch(`${basic_url}/users`)
      .then((res): Promise<any> => res.json().then((data) => data)) // not sure what i need to the second then function.
      .catch((er): void => console.log(er));
};
export const getUserById = async (id: any) => {
  return await fetch(`${basic_url}/users/${id}`)
    .then((res) => res.json().then((data) => data)) // not sure what i need to the second then function.
    .catch((er) => console.log(er));
};
export const addUser = async (user: any) => {
  let options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  };
  return await fetch(`${basic_url}/users`, options)
    .then((res) => res.json())
    .catch((er) => console.log(er));
};

// export async function GetAllUsers() {
//   try {
//     return await fetch(basic_url)
//       .then((res) => res.json().then((data) => data)) // not sure what i need to the second then function.
//       .catch((er) => console.log(er));
//   } catch {}
// }
// export async function GetAllUsers() {
//   try {
//     return await fetch(basic_url)
//       .then((res) => res.json().then((data) => data)) // not sure what i need to the second then function.
//       .catch((er) => console.log(er));
//   } catch {}
// }
