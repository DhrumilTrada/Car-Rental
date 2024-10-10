import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activate, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import "./ActivationPage.css";

export default function ActivationPage() {
  const { uid, token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      uid,
      token,
    };
    dispatch(activate(userData));
    toast.success("Your account has been activated! You can login now");
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/login");
    }

    dispatch(reset());
  }, [isError, isSuccess, navigate, dispatch]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="box-effect p-5 text-center">
          <h1 className="mb-4">Drive Hex Car Rentals</h1>
          <p className="mb-4 text-muted">
            To complete your registration, please click the button below to
            activate your account. This ensures access to all our car rental
            services.
          </p>
          <button onClick={handleSubmit} className="btn btn-primary btn-lg">
            Activate Account
          </button>
        </div>
      </div>
    </div>
  );
}
