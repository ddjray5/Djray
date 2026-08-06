"use client";

import { useState } from "react";
import ReviewModal from "./ReviewModal";
import "../styles/testimonials.css";

const reviews = [
  {
    name: "Sarah",
    review:
      "DJ RAY created an unforgettable atmosphere. Every guest was on the dance floor all night.",
  },
  {
    name: "Michael",
    review:
      "Professional, stylish and energetic. Exactly the experience we wanted for our guests.",
  },
  {
    name: "Emily",
    review:
      "Exceptional music selection and perfect crowd reading. Highly recommended for premium events.",
  },
];

export default function Testimonials() {
  const [openReview, setOpenReview] = useState(false);

  return (
    <section className="testimonials">
      <div className="testimonials-title">
        <h2>TESTIMONIALS</h2>
        <p>What Clients Say</p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">★★★★★</div>

            <p className="review">
              "{item.review}"
            </p>

            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      <div className="review-button">
  {!openReview ? (
    <button
      className="watch-btn"
      onClick={() => setOpenReview(true)}
    >
      Write a Review
    </button>
  ) : (
    <div className="review-form">

      <h2>Leave a Review</h2>

      <input
        type="text"
        placeholder="Your Name"
      />

      <textarea
        placeholder="Your Review"
      />

      <button className="btn-gold">
        Send
      </button>

      <button
        className="watch-btn"
        onClick={() => setOpenReview(false)}
      >
        Close
      </button>

    </div>
  )}
</div>
    </section>
  );
}