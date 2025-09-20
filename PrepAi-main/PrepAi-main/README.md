# 🧠 PrepAI – AI-Powered Interview Preparation Platform

PrepAI is a full-stack web application that helps users prepare for technical interviews using generative AI. Built with the Gemini API, it allows users to customize interview sessions based on their target role, years of experience, and focus areas.
## ✨ Features

- 🧑‍💻 **User Authentication**: Register, log in, and manage user profiles (with profile image uploads).
- 🛠️ **Experience-Aware Question Generation**: Specify years of experience to tailor difficulty.
- 🧩 **Topic Customization**: Focus on specific concepts or technologies.
- 💬 **AI-Generated Questions & Explanations**: Generate realistic interview questions and in-depth explanations using Gemini API.
- 🖼️ **Profile Image Upload**: Upload temporary profile pictures for a personalized experience.

---

## 🚀 Tech Stack

### 🧩 Frontend
- React (Vite)
- Axios
- React Router
- TailwindCSS

### ⚙️ Backend
- Node.js + Express
- MongoDB Atlas
- Gemini API (Google AI)
- Multer (for file uploads)
- JWT Authentication
- CORS / dotenv


## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/prepai.git
cd prepai

SETUP ENV

MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development

