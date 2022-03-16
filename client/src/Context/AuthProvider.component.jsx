import { createContext, useEffect, useState } from "react"
import jwt_decode from 'jwt-decode'

export const authContext = createContext();
export default function AuthProvider({ children }) {
  let [auth, setAuth] = useState({})

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.getItem("jwtToken")
      let tokenDecoded = jwt_decode(token)
      setAuth(tokenDecoded)      
    }
  }, [])
  
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  )
}
