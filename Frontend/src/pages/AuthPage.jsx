import Login from "./Login";
import Signup from "./Signup";

function AuthPage({ setUser }) {
  return (
    <div className="auth-container">
      {/* Left side → Login */}
      <Login setUser={setUser} />

      {/* Right side → Signup */}
      <Signup />
    </div>
  );
}

export default AuthPage;
