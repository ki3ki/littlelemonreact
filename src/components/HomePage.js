import React from 'react';
import '../styles/layout.css';
import heroImg from '../assets/hero-image.jpg';
import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.svg';
import lemonDessert from '../assets/lemon-dessert.jpg';


function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="reserve-btn">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Delicious food" />
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <button className="menu-btn">Online Menu</button>
        </div>

        <div className="cards">
          <div className="card">
            <img src={greekSalad} alt="Greek Salad" />
            <div className="card-content">
              <div className="card-header">
                <h4>Greek salad</h4>
                <span>$12.99</span>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <p>Order a delivery 🚚</p>
            </div>
          </div>

          <div className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <div className="card-content">
              <div className="card-header">
                <h4>Bruschetta</h4>
                <span>$5.89</span>
              </div>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <p>Order a delivery 🚚</p>
            </div>
          </div>

          <div className="card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className="card-content">
              <div className="card-header">
                <h4>Lemon Dessert</h4>
                <span>$5.00</span>
              </div>
              <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <p>Order a delivery 🚚</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Customer Testimonials</h2>
        <p>Feedback will appear here...</p>
      </section>

      <section>
        <h2>About Us</h2>
        <p>About Little Lemon, Chicago...</p>
      </section>
    </>
  );
}

export default HomePage;
