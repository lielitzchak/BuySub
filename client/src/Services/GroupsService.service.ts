import { basic_url } from './UserService.service';


export const getGroupProducts = async (groupName : any) => {

  return await fetch(`${basic_url}/groups/products/${groupName}`)
  .then((res) => res.json())
  .catch((err) => console.log(err));
} 

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

export const joinGroup = async (groupDetailsToJoin: any,id:any) => {
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(groupDetailsToJoin),
      
    };
    return await fetch(`${basic_url}/groups/join/${id}`, options)
      .then((res) => res.json())
      .catch((er) => console.log(er));
};








 