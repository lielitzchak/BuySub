export const basic_url = process.env.NODE_ENV === "production" ? "https://buy-sub.herokuapp.com/Api":"http://localhost:11000/Api";

export const GetAllUsers = async (): Promise<any> => {  
  let options = {
    headers: {
       Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
    }
 }

  return await fetch(`${basic_url}/users`,options)
    .then((res: any): Promise<any> => res.json().then((data: any) => data))
    .catch((er: any): void => console.log(er));
};

export const getUserById = async (id: any): Promise<any> => {
  let options = {
    headers: {
       Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
    }
 }

  return await fetch(`${basic_url}/users/${id}`,options)
    .then((res: any) => res.json().then((data: any) => data))
    .catch((er: any) => console.log(er));
};

export const addUser = async (user: any): Promise<any> => {
  const options = {
    method: "POST",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
    },
    body: JSON.stringify(user),
  };

  return await fetch(`${basic_url}/users`, options)
    .then((res: any) => res.json().then((data: any) => console.log(data)))
    .catch((er: any) => console.log(er));
};

export const updateUser = async (id: string, updatedUserInfo: any): Promise<any> => {
  try {
    const options = {
      method: "PUT",
      headers: { 
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
      },
      body: JSON.stringify(updatedUserInfo),
    };
    return await fetch(`${basic_url}/users/${id}`, options)
      .then((res) => res.json().then((data) => data))
      .catch((err) => console.log(err));
  } catch{}
};

export const changeUserPassword = async (id: string, updatedUserPassword: any): Promise<any> => {
  try {
    const options = {
      method: "PUT",
      headers: { 
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
      },
      body: JSON.stringify(updatedUserPassword),
    };
    return await fetch(`${basic_url}/users/password/${id}`, options)
      .then((res) => res.json().then((data) => data))
      .catch((err) => console.log(err));
  } catch{}
};

export const deleteSingleUser = async (id: any) => {
  try {
    const options = {
      method: "DELETE",
      headers: { 
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
      }
    };
    return await fetch(`${basic_url}/users/${id}`, options)
      .then((res) => res.json().then((data) => console.log(data)))
      .catch((er) => console.log(er));
  } catch {}
};
