import { useState } from "react";
import axios from "axios";


function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
    } catch (err) {
      alert("Login failed");
    }
  }

  return (
    <form className="auth-form" onSubmit={handleLogin}>
    <h2>Login</h2>
    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
    <button type="submit">Login</button>
  </form>
  );
}

export default Login;
