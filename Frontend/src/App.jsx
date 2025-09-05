import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState(() => {
    // agar localStorage me user hai toh usko set kar do
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`);
  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() { 
    try {
      const token = localStorage.getItem("token");
  
      const response = await axios.post(
        "http://localhost:3000/ai/get-review",
        { code },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  -   setReview(response.data);
  +   setReview(response.data.review);  //  bas string ko store karo
    } catch (err) {
      console.error(err);
      alert("You must be logged in to get review!");
    }
  }
  

  // Agar user login nahi hai toh Login + Signup form dikhao
if (!user) {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <Login setUser={setUser} />
        <Signup />
      </div>
    </div>
  );
}


  // Agar user login hai toh editor + review section dikhao
  return (
    <main>
      <h2 style={{ color: "white" }} >Hi, {user.name}</h2>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              backgroundColor: '#1e1e1e', // dark background
              color: '#ffffff',           // make text white
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div onClick={reviewCode} className="review">
          Review
        </div>
      </div>
      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </main>
  );
}

export default App;
