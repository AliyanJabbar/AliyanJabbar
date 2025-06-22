# 🤖 AI Assistant Backend - FastAPI + OpenAI Agents + Gemini

This is the backend of an AI-powered assistant built with **FastAPI** and **Uvicorn**, using `uv` as a package manager. It integrates with **OpenAI Agents SDK** and **Google's Gemini model** to generate intelligent responses. The application is deployed seamlessly using the **Railway CLI**.

---

## 🚀 Features

- ⚡ Built with **FastAPI** and **Uvicorn**
- 🧠 Powered by **OpenAI Agents SDK**
- 🌐 Uses **Google Gemini API** for response generation
- 📦 Dependencies managed using [`uv`](https://github.com/charliermarsh/uv)
- ☁️ Deployed using [Railway](https://railway.app/) via CLI
- 🔐 CORS enabled for secure frontend-backend communication

---

## 📂 Project Structure

/Backend
├── main.py # FastAPI app entry point
├── requirements.txt # Dependencies managed by uv
├── .env # API keys and environment variables

## 🧪 Requirements

- Python 3.11+
- `uv` (instead of pip)
- OpenAI Agents SDK
- Gemini API key
- Uvicorn

## 🚀 Deployment on Railway

### 🛠 Step-by-Step Guide

> You must have the [`railway` CLI](https://docs.railway.app/cli/installation) installed.

### 1. Install Railway CLI (if not installed)

```bash
npm install -g @railway/cli
```

### 2. Login to Railway

```bash
railway login
```

### 3. Navigate into the Backend Folder

```bash
cd Backend
```

### 4. Initialize the project (if not yet)

```bash
railway init
```

### 5. Deploy the Project

```bash
railway up
```


### 6. For Public URL

```bash
railway domain
```

### 7. End Part

```bash
YOU ARE GOOD TO GO NOW 😁
```
