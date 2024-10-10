import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Protected(props) {
    const { Component } = props
    const navigate = useNavigate() 
    useEffect(() => {
        let login = localStorage.getItem("user")
        if(!login){
          toast.warn("Login to proceed Booking.")
          navigate("/login")
        }
    })

  return (
    <div>
        <Component />
    </div>
  )
}

export default Protected