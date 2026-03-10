<div align="center">



# 🔧 LocalFix — Service Booking Platform

**Connect instantly with trusted local service professionals.**  
Find electricians, plumbers, tutors, cleaners and more — vetted pros ready to help.

<div align="center">
<kbd>
<img width="1918" alt="LocalFix Screenshot" src="https://github.com/user-attachments/assets/08fbee7c-c3c8-41af-afc0-a7f672abad22" />
</kbd>
</div>


</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 About The Project

**LocalFix** is a full-stack service booking web platform that connects customers with skilled local professionals. Whether you need an electrician, plumber, tutor, or cleaning service — LocalFix makes it easy to search, compare, and book trusted pros in your area.

Built with a modern React frontend and Firebase backend, LocalFix supports three user roles: **Customers**, **Service Providers**, and **Admins** — each with a tailored dashboard experience.

---

## ✨ Features

### 👤 Customer
- 🔍 Search & filter services by category, location, and distance
- 📋 Browse verified provider profiles with ratings and reviews
- 📅 Book services with date and time selection
- 📦 Track upcoming and past bookings
- ⭐ Rate and review completed services

### 🛠️ Service Provider
- 📥 Receive and manage new job requests (Accept / Decline)
- 📊 View confirmed and completed jobs dashboard
- 👤 Manage public profile (bio, skills, experience, photos)
- 💬 Customer messaging and notifications

### 🔐 Admin
- 👥 Manage users (view, edit, remove)
- 🗂️ Manage service listings and categories
- 📈 Platform analytics overview

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React , React Router |
| **Styling** | Tailwind CSS |
| **Backend / DB** | Firebase (Firestore, Auth, Storage) |
| **State Management** | React Context API |
| **Build Tool** | Vite |
| **Deployment** | Vercel / GitHub Pages |

---

## 📁 Project Structure

```
LocalFix-Service-Booking-Platform/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── shared/
│   │   └── ui/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── BookingContext.jsx
│   ├── firebase/
│   │   └── firebase.config.js
│   ├── hooks/
│   ├── pages/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── provider/
│   │   ├── public/
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── ServiceDetails.jsx
│   │   │   └── ProviderProfile.jsx
│   │   └── user/
│   ├── routes/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── public/
├── .env.local
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🏁 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18+
- [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Firebase](https://firebase.google.com/) project set up

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/LocalFix-Service-Booking-Platform.git
   cd LocalFix-Service-Booking-Platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file in the root directory (see [Environment Variables](#-environment-variables))

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser 🎉




## 🗺️ Roadmap

- [x] Home page with search & category browse
- [x] Provider listing & profile pages
- [x] Booking flow (select service, date, time, address)
- [x] Customer bookings dashboard
- [x] Provider job management dashboard
- [x] Admin panel (user & service management)
- [ ] Real-time chat between customer & provider
- [ ] Push notifications for booking updates
- [ ] Payment gateway integration
- [ ] Mobile app (React Native)
- [ ] Map view for nearby providers



