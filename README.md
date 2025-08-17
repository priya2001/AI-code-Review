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
git clone https://github.com/priya2001/code-review.git
cd code-review

```shell
git clone https://github.com/priya2001/chat-app-react-nodejs
cd chat-app-react-nodejs
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd server
yarn
cd ..
cd public
yarn
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
yarn start
```

Done! Now open localhost:3000 in your browser.



