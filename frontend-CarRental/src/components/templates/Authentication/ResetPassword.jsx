import './ResetPasswordPage.css'; 
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from "../features/auth/authSlice"

export default function ResetPasswordPage() {
    const [formData, setFormData] = useState({
        "email": "",
    })

    const { email } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email
        }

        dispatch(resetPassword(userData))
    }
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate("/")
            toast.success("A reset password email has been sent to you.")
        }
    }, [isError, isSuccess, message
        , dispatch])

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="box-effect p-5 text-center">
          <h1 className="mb-4">Drive Hex Car Rentals</h1>
          <p className="mb-4 text-muted">
            Please enter your email address to receive a link to reset your password.
          </p>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-primary btn-lg">
            Send Reset Link
          </button>
        </div>
      </div>
    </div>
  );
}
