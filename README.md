# 🤖 AI Code Review Platform  

An **AI-powered code review application** built with **React.js, Node.js, Express.js**, and **Google Gemini API**.  
This tool allows developers to paste or upload their code and get **instant AI-generated reviews, suggestions, and improvements** for better code quality.  

---

## 🚀 Features  
- 🔐 **Google Sign-In (Optional)** – Secure login for personalized experience.  
- 🤖 **AI-Powered Code Review** – Uses **Google Gemini API** to analyze code.  
- ⚡ **Full-Stack Application** – React.js frontend + Node.js/Express backend.  
- 📡 **RESTful API** – Backend API integrates with Google Gemini securely.  
- 📱 **Responsive UI** – Clean and user-friendly design with React.  
- 🔑 **Secure Configuration** – `.env` file for API keys and sensitive credentials.  

---

## 🛠 Tech Stack  
- **Frontend:** React.js, TailwindCSS/Material UI  
- **Backend:** Node.js, Express.js  
- **AI Model:** Google Gemini API  
- **Other Tools:** dotenv, axios, nodemon  

---

## ⚙️ Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/yourusername/code-review.git
cd code-review
2️⃣ Backend Setup
```bash
Copy
Edit
cd BackEnd
npm install
Create a .env file in the BackEnd folder:

env
Copy
Edit
API_KEY=your_google_gemini_api_key
PORT=5000
Start the server:

```bash
Copy
Edit
npm start
3️⃣ Frontend Setup
```bash
Copy
Edit
cd FrontEnd
npm install
npm start
🔑 Usage
Open the app in your browser.

Paste or upload your source code.

Click Review Code.

The system will return AI-generated feedback using Gemini API.

📸 Screenshots
(Add screenshots of your UI here for better presentation)

🚀 Deployment
Backend can be deployed on Render/Heroku.

Frontend can be deployed on Vercel/Netlify.

Make sure to configure .env properly with the Gemini API key.

📝 Future Improvements
📌 Add support for multiple programming languages.

📌 Provide detailed complexity analysis.

📌 Suggest automated fixes for common issues.


