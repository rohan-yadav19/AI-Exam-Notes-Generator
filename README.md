# 🚀 OneClickNotes – AI Exam Notes Generator

OneClickNotes is an AI-powered exam preparation platform that helps students generate structured, exam-oriented notes from a given topic in just one click.

The application uses **Google Gemini AI** to generate simplified notes, important questions, revision content, sub-topics, diagrams, charts, and other exam-focused material based on the student's class level and exam type.

---

## 📌 Features

### 🤖 AI-Powered Notes Generation
- Generate notes using Google Gemini AI.
- Enter a topic and get structured exam-oriented content.
- Simplifies complex concepts into easy-to-understand explanations.
- Generates content based on the selected class level and exam type.

### 📚 Exam-Oriented Content
- Important concepts and sub-topics.
- Priority-wise sub-topics.
- Exam importance indicators.
- Short-answer questions.
- Long-answer questions.
- Diagram-based questions.
- Revision-friendly content.

### 🔄 Revision Mode
- Generate concise content specifically for quick revision.
- Helps students revise important concepts before exams.

### 📊 AI-Generated Visual Content
- AI-generated diagram suggestions.
- Chart-related content.
- Visual learning support for important topics.

### 🔐 Authentication
- User registration and login.
- JWT-based authentication.
- Google authentication using Firebase.
- Secure HTTP-only authentication cookies.

### 👤 User Management
- User profile management.
- Personalized notes.
- Generated notes are associated with the logged-in user.

### 💳 Credit-Based AI Usage
- Users receive AI generation credits.
- Each note generation consumes credits.
- Prevents unlimited API usage.
- Displays remaining credits to the user.

### 💰 Subscription / Payment
- Stripe integration for credit-based plans.
- Users can purchase additional credits.
- Secure payment workflow.

### 📝 Saved Notes
- Generated notes are stored in MongoDB.
- Users can access their previously generated notes.
- Notes are associated with individual user accounts.

### 📱 Responsive UI
- Responsive design for desktop, tablet, and mobile devices.
- Clean and simple student-focused interface.
- Built using React and Tailwind CSS.

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router
- Redux / Redux Toolkit
- Firebase Authentication

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Cookie-based authentication

## AI

- Google Gemini API
- Gemini Interactions API

## Payment

- Stripe

## Deployment

- Render
- MongoDB Atlas
- Firebase

---

# 🏗️ Project Architecture

```text
                    ┌──────────────────────┐
                    │       User           │
                    │   Web Application    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    React Frontend    │
                    │      + Vite          │
                    └──────────┬───────────┘
                               │
                         Axios Requests
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Express Server    │
                    │      Node.js         │
                    └──────────┬───────────┘
                               │
               ┌───────────────┼────────────────┐
               │               │                │
               ▼               ▼                ▼
       ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
       │  MongoDB     │ │ Gemini API   │ │   Stripe     │
       │   Atlas      │ │     AI       │ │   Payments   │
       └──────────────┘ └──────────────┘ └──────────────┘
               │
               ▼
       ┌──────────────────┐
       │ User + Notes Data│
       └──────────────────┘
       
