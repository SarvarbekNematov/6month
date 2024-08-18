import { createContext, useState } from "react";

const Context = createContext();
const Context_app = ({children}) => {
    const [token , setToken] = useState( JSON.parse(localStorage.getItem("token")) || false)
    const [state , setState] = useState( JSON.parse(localStorage.getItem("state")) || [])

    localStorage.setItem("token" , JSON.stringify(token))
    {
      state == [] ? "" : localStorage.setItem("state" , JSON.stringify(state))
    }
    
  return (
    <Context.Provider value={{token , setToken , state , setState}}>
        {children}
    </Context.Provider>
)
}

export {Context , Context_app}