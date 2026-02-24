🍋 Little Lemon React Frontend

A modern React-based frontend implementation of the Little Lemon Restaurant website.
This project focuses on component-based architecture, routing, and clean UI structure using React.
🚀 Project Overview

This application represents the frontend for a restaurant website, including:

🏠 Homepage layout

📅 Booking page UI

⭐ Specials section

💬 Customer testimonials

📍 About/Chicago section

🧭 Navigation & Footer components

🌐 Client-side routing using React Router

The project demonstrates clean component separation and reusable UI architecture.

🛠 Tech Stack

React

React Router DOM

JavaScript (ES6+)

CSS

Create React App
📁 Project Structure
src/
│
├── assets/             # Images and static assets
├── components/         # Reusable components
│   ├── Header.js
│   ├── Nav.js
│   ├── Main.js
│   ├── HomePage.js
│   ├── BookingPage.js
│   ├── Specials.js
│   ├── CustomersSay.js
│   ├── Chicago.js
│   └── Footer.js
│
├── styles/             # Styling files
├── App.js              # Main application wrapper
└── index.js

🔄 Routing Structure

The application uses BrowserRouter for client-side routing.

Main layout structure:
<Router>
  <Header />
  <Nav />
  <Main />
  <Footer />
</Router>

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/ki3ki/littlelemonreact.git
cd littlelemonreact
2️⃣ Install dependencies
npm install
3️⃣ Run development server
npm start
App will run on:
http://localhost:3000

🎯 Features Demonstrated

Component-based architecture

React functional components

Clean separation of layout and content

Basic routing

Organized project structure

Modular styling

📌 Future Improvements

Connect to backend API (Django / FastAPI)

Implement booking form submission

Add state management (Context API or Redux)

Add authentication flow

Deploy to Netlify or Vercel

Add unit testing


