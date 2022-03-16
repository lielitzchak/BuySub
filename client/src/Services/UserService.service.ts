export const basic_url =
  process.env.NODE_ENV === "production"
    ? "https://buy-sub.herokuapp.com/Api"
    : "http://localhost:11000/Api";
export const GetAllUsers = async (): Promise<any> => {
  return await fetch(`${basic_url}/users`)
    .then((res: any): Promise<any> => res.json().then((data: any) => data))
    .catch((er: any): void => console.log(er));
};
export const getUserById = async (id: any): Promise<any> => {
  return await fetch(`${basic_url}/users/${id}`)
    .then((res: any) => res.json().then((data: any) => data))
    .catch((er: any) => console.log(er));
};
export const addUser = async (user: any): Promise<any> => {
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  };
  return await fetch(`${basic_url}/users`, options)
    .then((res: any) => res.json().then((data: any) => console.log(data)))
    .catch((er: any) => console.log(er));
};

export const updateUser = async (id: string, newUser: any): Promise<any> => {
  try {
    let oldUser: any;
    await fetch(`${basic_url}/users/${id}`)
      .then((res: any) => res.json().then((data: any) => (oldUser = data)))
      .catch((er: any) => console.log(er));
    const options = {
      method: "PUT",
      body: JSON.stringify(newUser),
    };
    return await fetch(`${basic_url}/${id}`, options)
      .then((res) => res.json().then((data) => data))
      .catch((er) => console.log(er));
  } catch {}
};
export const deleteSingleUser = async (id: any) => {
  try {
    const options = {
      method: "DELETE",
    };
    return await fetch(`${basic_url}/users/${id}`, options)
      .then((res) => res.json().then((data) => console.log(data)))
      .catch((er) => console.log(er));
  } catch {}
};
