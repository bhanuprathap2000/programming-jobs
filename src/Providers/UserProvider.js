import React, {useState, createContext } from 'react';
import {auth } from "../firebase/config"
export const UserContext = createContext(null);

function UserProvider({ children }) {
    
    const [user, setUser] = useState(null)
  
    auth.onAuthStateChanged(user => {

        setUser(user);

     })

    return (
        <UserContext.Provider value={user}>{children }</UserContext.Provider>
    )
}

export default UserProvider
