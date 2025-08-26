# 📌 URL Shortener (MERN)

A simple **URL Shortener** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
It allows users to shorten long URLs, track click counts, and view/manage them in an **Admin Dashboard**.  

---

## 🚀 Features
- 🔗 Shorten long URLs into short codes  
- ⏩ Redirect short code → original URL  
- 📊 Track click counts for each short URL  
- 📋 Admin dashboard to view all shortened URLs  
- ⚡ Built with **MERN stack** (MongoDB, Express, React, Node.js)  

---

## 🛠️ Tech Stack
- **Frontend:** React + Vite + Axios  
- **Backend:** Node.js + Express + Mongoose  
- **Database:** MongoDB Atlas / Local MongoDB  
- **Deployment:** Render (backend) + Vercel (frontend)  

---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone Repo
```bash
git clone https://github.com/your-username/url-shortener-mern.git
cd url-shortener-mern
```

### 2️⃣ Backend
```bash
cd backend
cp .env.sample .env   # add MongoDB URI + BASE_URL
npm install
npm run dev
```
- Runs on `http://localhost:3000`

### 3️⃣ Frontend
```bash
cd ../frontend
npm install
npm run dev
```
- Runs on `http://localhost:5173`

---

## 🌍 API Endpoints
- `POST /api/shorten` → Create short URL  
- `GET /:code` → Redirect to original URL  
- `GET /api/urls` → List all URLs (admin)  

---

## 🖼️ Screenshots
**Home Page**  
![Home](assets/screenshots/home.png)

**Admin Page**  
![Admin](assets/screenshots/admin.png)

---

## 🚀 Deployment
- Backend → [Render](https://render.com)  
- Frontend → [Vercel](https://vercel.com)  
- Set environment variables (`MONGODB_URI`, `BASE_URL`)  

---

## 🎥 Demo Video
Record using `demo_autoplay.html` → save as `URL_Shortener_Demo_Shalu.mp4` (≈1 min).  
Steps:  
1. Open Home page → type long URL  
2. Shorten it → get short URL  
3. Open short URL → redirects  
4. Open Admin → shows click count  

---

## 📦 Submission Checklist
- ✅ Full MERN code (backend + frontend)  
- ✅ Docs (`README.md`, `DEPLOY.md`, `SUBMISSION.md`, `DEMO_SCRIPT.md`)  
- ✅ Screenshots (`assets/screenshots/`)  
- ✅ Demo HTML for easy recording  
- ✅ Video (`URL_Shortener_Demo_Shalu.mp4`)  

---

✨ Developed as an **Assignment Project** by **Shalu**.  
