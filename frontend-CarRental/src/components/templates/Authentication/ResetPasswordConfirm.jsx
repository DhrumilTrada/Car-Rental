import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { resetPasswordConfirm } from "../features/auth/authSlice";
import "./ResetPasswordConfirmPage.css";

export default function ResetPasswordConfirm() {
  const { uid, token } = useParams();
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      uid,
      token,
      new_password,
      re_new_password,
    };

    dispatch(resetPasswordConfirm(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/");
      toast.success("Your password was reset successfully.");
    }
  }, [isError, isSuccess, message, navigate, dispatch]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="box-effect p-5 text-center">
          <h1 className="mb-4">Drive Hex Car Rentals</h1>
          <p className="mb-4 text-muted">
            Enter and confirm your new password to reset your account password.
          </p>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="new_password"
              onChange={handleChange}
              value={new_password}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              name="re_new_password"
              onChange={handleChange}
              value={re_new_password}
              required
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-primary btn-lg">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
