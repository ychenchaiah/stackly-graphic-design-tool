import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./Auth.css";

function Signup() {
  return (
    <AuthLayout className="Signup">
      <h2>Create an account</h2>
      <p className="auth-subtitle">
        Create your account and start designing stunning visuals with ease
      </p>

      <input type="text" placeholder="Full name" />
      <select className="auth-select" >
        <option>Select your role</option>
        <option>Designer</option>
        <option>Business</option>
        <option>Student</option>
      </select>

      <button className="auth-button">Continue</button>

      <p className="auth-footer auth-footer-Signup">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </AuthLayout>
  );
}

export default Signup;
