import { basic_url } from "./UserService.service";

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