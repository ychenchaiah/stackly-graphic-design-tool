import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "./AuthLayout";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSignup = () => {
    if (!name || !role) return alert("Please fill all fields");

    // OTP page ki navigate
    navigate("/otp", { state: { email: "newuser@email.com" } });
  };

  return (
    <AuthLayout>
      <h2>Create an account</h2>
      <p className="auth-subtitle">
        Create your account and start designing stunning visuals with ease
      </p>

      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="auth-select"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select your role</option>
        <option>Designer</option>
        <option>Business</option>
        <option>Student</option>
      </select>

      <button className="auth-button" onClick={handleSignup}>
        Continue
      </button>

      <p className="auth-footer auth-footer-Signup">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </AuthLayout>
  );
}

export default Signup;
