//liel keep going
export const basic_url =
  process.env.NODE_ENV === "production"
    ? "https://buy-sub.herokuapp.com/Api"
    : "http://localhost:11000/Api";
export const GetAllUsers = async (): Promise<any> => {
    return await fetch(`${basic_url}/users`)
      .then((res: any): Promise<any> => res.json().then((data: any) => data)) // not sure what i need to the second then function.
      .catch((er: any): void => console.log(er));
  
};
export const getUserById = async (id: any): Promise<any> => {
  return await fetch(`${basic_url}/users/${id}`)
    .then((res: any) => res.json().then((data: any) => data)) // not sure what i need to the second then function.
    .catch((er: any) => console.log(er));
};
export const addUser = async (user: any): Promise<any> => {
  let options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  };
  return await fetch(`${basic_url}/users`, options)
    .then((res: any) => res.json().then((data: any) => console.log(data))) // not sure what i need to the second then function.
    .catch((er: any) => console.log(er));

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
