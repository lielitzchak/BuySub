import { basic_url } from "./UserService.service";

export const getGroupProducts = async (groupName: any): Promise<any> => {

  let options = {
    headers: {
       Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
    }
 }

  return await fetch(`${basic_url}/groups/products/${groupName}`,options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const addGroup = async (newGroup: any, id: any): Promise<any> => {
  let options = {
    method: "POST",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
     },
    body: JSON.stringify(newGroup),
  };
  return await fetch(`${basic_url}/groups/${id}`, options)
    .then((res) => res.json())
    .catch((er) => console.log(er));
};

export const joinGroup = async (groupDetailsToJoin: any,id: any): Promise<any> => {
  let options = {
    method: "POST",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
     },
    body: JSON.stringify(groupDetailsToJoin),
  };
  return await fetch(`${basic_url}/groups/join/${id}`, options)
    .then((res) => res.json())
    .catch((er) => console.log(er));
};
