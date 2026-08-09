"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const [mounted, setMounted] = useState(false);

  /*
   * =====================================================
   * CLIENT MOUNT
   * =====================================================
   */

  useEffect(() => {
    setMounted(true);
  }, []);

  /*
   * =====================================================
   * STOP BACKGROUND SCROLL
   * =====================================================
   */

  useEffect(() => {
    if (!openReview) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openReview]);

  /*
   * =====================================================
   * SUBMIT REVIEW
   * =====================================================
   */

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !review.trim() || rating === 0) {
      return;
    }

    console.log({
      name,
      review,
      rating,
    });

    setName("");
    setReview("");
    setRating(0);
    setOpenReview(false);
  };

  /*
   * =====================================================
   * REVIEW MODAL
   *
   * IMPORTANT:
   * The modal is rendered directly into document.body.
   * This prevents parent transforms from clipping it.
   * =====================================================
   */

  const reviewModal =
    openReview && mounted
      ? createPortal(
          <div
            className="review-modal-overlay"
            onClick={() => setOpenReview(false)}
          >
            <div
              className="review-modal"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}

              <button
                type="button"
                className="review-modal-close"
                onClick={() => setOpenReview(false)}
                aria-label="Close"
              >
                ×
              </button>


              {/* ICON */}

              <div className="review-modal-icon">
                ★
              </div>


              {/* TITLE */}

              <h2>
                WRITE A REVIEW
              </h2>


              {/* SUBTITLE */}

              <p className="review-modal-subtitle">
                Share your experience with DJ RAY
              </p>


              {/* STAR RATING */}

              <div className="review-modal-stars">

                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={
                      star <= rating ? "active" : ""
                    }
                    onClick={() => setRating(star)}
                    aria-label={`${star} star${
                      star > 1 ? "s" : ""
                    }`}
                  >
                    ★
                  </button>
                ))}

              </div>


              {/* FORM */}

              <form onSubmit={handleSubmit}>

                {/* NAME */}

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />


                {/* REVIEW */}

                <textarea
                  placeholder="Your Review"
                  value={review}
                  onChange={(e) =>
                    setReview(e.target.value)
                  }
                  rows={5}
                />


                {/* SEND */}

                <button
                  type="submit"
                  className="modal-submit-btn"
                >
                  SEND REVIEW
                </button>

              </form>

            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      {/* =====================================================
          TESTIMONIALS SECTION
      ===================================================== */}

      <section className="testimonials-section">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="testimonials-header">

          <span className="section-kicker">
            TESTIMONIALS
          </span>

          <div className="gold-line"></div>

          <h2>
            What Clients Say
          </h2>

        </div>


        {/* =====================================================
            REVIEWS
        ===================================================== */}

        <div className="testimonials-grid">

          {reviews.map((item, index) => (
            <div
              className={`testimonial-card ${
                index === 2
                  ? "featured-review"
                  : ""
              }`}
              key={index}
            >

              <div className="quote-mark">
                “
              </div>

              <div className="stars">
                ★★★★★
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <h3>
                {item.name}
              </h3>

            </div>
          ))}

        </div>


        {/* =====================================================
            WRITE REVIEW BUTTON
        ===================================================== */}

        <div className="review-button-wrapper">

          <button
            type="button"
            className="write-review-btn"
            onClick={() => setOpenReview(true)}
          >
            WRITE A REVIEW
          </button>

        </div>

      </section>


      {/* =====================================================
          MODAL
          Rendered outside Testimonials section
      ===================================================== */}

      {reviewModal}

    </>
  );
}