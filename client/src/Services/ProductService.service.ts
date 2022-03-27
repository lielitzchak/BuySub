import { basic_url } from "./UserService.service";

export const getProductById = async (id: any): Promise<any> => {
  let options = {
    headers: {
       Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
    }
 }
 return await fetch(`${basic_url}/products/${id}`,options)
 .then((res: any) => res.json().then((data: any) => data))
 .catch((er: any) => console.log(er));
}

export const addProduct = async (productToAdd: any, groupName: any): Promise<any> => {
  let options = {
    method: "POST",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
     },
    body: JSON.stringify(productToAdd),
  };
  return await fetch(`${basic_url}/products/${groupName}`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const updateProduct = async (id:any , productToEdit:any): Promise<any> => {
    let options = {
      method: "PUT",
      headers: { 
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
       },
      body: JSON.stringify(productToEdit)
    };
    return await fetch(`${basic_url}/products/${id}`, options)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

export const updateQuentityProduct = async (id:any , productToEdit:any): Promise<any> => {
    let options = {
      method: "PUT",
      headers: { 
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
       },
      body: JSON.stringify(productToEdit)
    };
    return await fetch(`${basic_url}/products/quentity/${id}`, options)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };


export const deleteProduct = async (id:any, groupName:any): Promise<any> => {
    let options = {
      method: "DELETE",
      headers: { 
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
       },
    };
    return await fetch(`${basic_url}/products/${id}/${groupName}`, options)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

    