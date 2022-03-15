// import React,{useState,createContext} from 'react';
// import { useContext } from 'react';

// const authContex = createContext();

// function AuthProvider({children}) {
//  const [user,setUser] = useState(null);
//   return (
//     <authContex.Provider value={{user,login,logout}}>
//        {children}
//     </authContex.Provider>
//   )
// }

// export const useAuth = () => {

//  return  useContext(authContex) 
// }