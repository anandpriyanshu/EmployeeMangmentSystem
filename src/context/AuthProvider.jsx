import React, { createContext, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { useState } from 'react'

export const AuthContext = createContext()
export default function AuthProvider({ children }) {

    // localStorage.clear()
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees, admin } = getLocalStorage()

        setUserData({ employees, admin })
    }, [])



    return (
        <div>

            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
