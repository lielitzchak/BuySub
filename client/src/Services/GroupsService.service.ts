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

export const getGroupInfo = async (groupName: any): Promise<any> => {

  let options = {
    headers: {
       Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
    }
 }

  return await fetch(`${basic_url}/groups/groupInfo/${groupName}`,options)
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

////////////////////////////////////////////////////////////////////////
export const updateGroup = async (id:any , groupToEdit:any): Promise<any> => {
  let options = {
    method: "PUT",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
     },
    body: JSON.stringify(groupToEdit),
  };
  return await fetch(`${basic_url}/groups/${id}`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
////////////////////////////////////////////////////////////////////////


export const adminRemoveMember = async (id:any,groupName: any): Promise<any> => {
  let options = {
    method: "PUT",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
     },
  };
  return await fetch(`${basic_url}/groups/admin/removeMember/${id}/${groupName}`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const adminAddMember = async (groupName: any,userEmail: any): Promise<any> => {
  let options = {
    method: "POST",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
     },
    body: JSON.stringify(userEmail),
  };
  return await fetch(`${basic_url}/groups/admin/adminAddMember/${groupName}`, options)
    .then((res) => res.json())
    .catch((er) => console.log(er));
};

export const adminAddAdmin = async (id: any): Promise<any> => {
  let options = {
    method: "POST",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
     },
  };
  return await fetch(`${basic_url}/groups/admin/adminAddAdmin/${id}`, options)
    .then((res) => res.json())
    .catch((er) => console.log(er));
};


export const adminRemoveAdmin = async (id:any): Promise<any> => {
  let options = {
    method: "PUT",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
     },
  };
  return await fetch(`${basic_url}/groups/admin/adminRemoveAdmin/${id}`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const exitGroup = async (id:any, groupName:any): Promise<any> => {
  let options = {
    method: "PUT",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
     },
  };
  return await fetch(`${basic_url}/groups/admin/exitGroup/${id}/${groupName}`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
