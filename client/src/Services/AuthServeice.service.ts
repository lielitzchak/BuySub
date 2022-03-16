import { basic_url } from "./UserService.service";

export const singUp = async (user: any) => {
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  };
  return await fetch(`${basic_url}/signup`, options)
    .then((res) => res.json())
    .catch((er) => console.log(er));
};
