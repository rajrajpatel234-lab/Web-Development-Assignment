import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../../components/auth/InputField";
import AuthButton from "../../components/auth/AuthButton";
import { signupUser } from "../../services/authService";
import "../../styles/auth.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signupUser({ name, email, password });
      navigate("/");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <InputField
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <AuthButton text="Register" onClick={handleSignup} />

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}
