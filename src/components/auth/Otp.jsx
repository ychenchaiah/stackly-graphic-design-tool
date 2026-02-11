import AuthLayout from "./AuthLayout";
import { useLocation } from "react-router-dom";
import "./Auth.css";

function Otp() {
  const location = useLocation();
  const email = location.state?.email || "your email";

  return (
    <AuthLayout>
      <h2>We emailed you a code</h2>
      <p className="auth-subtitle">
        Enter the 6-digit code sent to <b>{email}</b>
      </p>

      <div className="otp-boxes">
        {[...Array(6)].map((_, i) => (
          <input key={i} maxLength="1" className="otp-input" />
        ))}
      </div>

      <button className="auth-button">Continue</button>

      <p className="auth-footer auth-footer-otp">
        Didn’t get the code? <span className="resend">Resend</span>
      </p>
    </AuthLayout>
  );
}

export default Otp;
