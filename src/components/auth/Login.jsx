import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "./AuthLayout";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (!email) return alert("Please enter email");
    
    // OTP page ki navigate
    navigate("/otp", { state: { email } });
  };

  return (
    <AuthLayout>
      <h2>Sign in or create an account</h2>
      <p className="auth-subtitle">
        Use your email or Google account to continue to Stackly.
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="auth-button" onClick={handleContinue}>
        Continue with email
      </button>

      <div className="auth-divider">or</div>

      <button className="social-button google">
        Continue with Google
      </button>

      <p className="auth-terms">
        By continuing, you agree to receive updates from Stackly and confirm
        that you have read, understood, and agree to&nbsp;
        <a href="#">Terms & Conditions</a>,&nbsp;
        <a href="#">Licensing Agreement</a>, and&nbsp;
        <a href="#">Privacy Policy</a>.
      </p>

      <p className="auth-footer">
        New user? <Link to="/signup">Create account</Link>
      </p>
    </AuthLayout>
  );
}

export default Login;
