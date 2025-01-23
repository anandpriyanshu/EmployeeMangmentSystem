import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

export default function App() {

  const [user, setUser] = useState(null)

  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const authdata = useContext(AuthContext)





  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {

      const userData = JSON.parse(loggedInUser)

      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [])

  const handleLogin = (email, password) => {
    if (email == "admin@com" && password == "123") {
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }))


    } else if (authdata) {
      const employee = authdata.employees.find((curr) => curr.email === email && curr.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employees', data: employee }))
      }


    }
    else {
      alert("Invalid Credentials")
    }
  }





  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}

    </>
  )
}
