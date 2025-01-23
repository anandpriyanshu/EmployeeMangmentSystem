import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

export default function App() {

  const [user, setUser] = useState(null)


  const Authdata = useContext(AuthContext)
  console.log(Authdata.employees)

  const handleLogin = (email, password) => {
    if (email == "admin@com" && password == "123") {
      setUser('admin')


    } else if (email == "user@com" && password == "123") {
      setUser('employee')

    }
    else {
      alert("Invalid Credentials")
    }
  }

  // handleLogin('user@com', 123)




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}

    </>
  )
}
