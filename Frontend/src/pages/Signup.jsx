import { useState } from "react";
import axios from "axios";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/signup", { name, email, password });
      alert("Signup successful! Please login.");
    } catch (err) {
      alert("Signup failed");
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
