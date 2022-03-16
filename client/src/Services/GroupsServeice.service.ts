import { basic_url } from './UserService.service';

export const addGroup = async (newGroup: any,id:any) => {
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newGroup),
      
    };
    return await fetch(`${basic_url}/groups/${id}`, options)
      .then((res) => res.json())
      .catch((er) => console.log(er));
  };








  export const logIn = async (user: any) => {
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
      
    };
    return await fetch(`${basic_url}/login`, options)
      .then((res) => res.json())
      .catch((er) => console.log(er));
  };

  export const logOut = async (id: any) => {
    return await fetch(`${basic_url}/logout/${id}`)
      .then((res) => res.json())
      .catch((er) => console.log(er));
  };
