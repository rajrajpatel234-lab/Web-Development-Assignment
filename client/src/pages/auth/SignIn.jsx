import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../../components/auth/InputField";
import AuthButton from "../../components/auth/AuthButton";
import { loginUser } from "../../services/authService";
import "../../styles/auth.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginUser({ email, password });
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <AuthButton text="Login" onClick={handleLogin} />

      <p>
        New user? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
