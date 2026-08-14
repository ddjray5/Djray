"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { supabase } from "../components/utils/supabase";

import "../styles/testimonials.css";

type Review = {
  id: number;
  created_at: string;
  name: string;
  rating: number;
  message: string;
  approved: boolean;
};

export default function Testimonials() {
  // =====================================================
  // REVIEWS
  // =====================================================

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef<HTMLElement | null>(null);

  // =====================================================
  // REVIEW MODAL
  // =====================================================

  const [openReview, setOpenReview] = useState(false);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // =====================================================
  // LOAD APPROVED REVIEWS
  // =====================================================

  const fetchApprovedReviews = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading reviews:", error);
      setReviews([]);
      setLoading(false);
      return;
    }

    setReviews(data || []);
    setLoading(false);
  };

  // =====================================================
  // INITIAL LOAD
  // =====================================================

  useEffect(() => {
    fetchApprovedReviews();
  }, []);

  // =====================================================
  // TESTIMONIALS SCROLL REVEAL
  // =====================================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("testimonials-visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // =====================================================
  // OPEN REVIEW MODAL
  // =====================================================

  const openReviewModal = () => {
    setSubmitMessage("");
    setOpenReview(true);

    document.body.style.overflow = "hidden";
  };

  // =====================================================
  // CLOSE REVIEW MODAL
  // =====================================================

  const closeReviewModal = () => {
    setOpenReview(false);

    document.body.style.overflow = "";

    setSubmitMessage("");
  };

  // =====================================================
  // SUBMIT REVIEW
  // =====================================================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setSubmitMessage("Please enter your name.");
      return;
    }

    if (!message.trim()) {
      setSubmitMessage("Please write your review.");
      return;
    }

    if (rating === 0) {
      setSubmitMessage("Please select a star rating.");
      return;
    }

    setSubmitting(true);
    setSubmitMessage("");

    const { error } = await supabase
      .from("reviews")
      .insert([
        {
          name: name.trim(),
          rating,
          message: message.trim(),
          approved: false,
        },
      ]);

    if (error) {
      console.error(
        "Error submitting review:",
        JSON.stringify(error, null, 2)
      );

      setSubmitMessage(
        "Unable to submit your review. Please try again."
      );

      setSubmitting(false);
      return;
    }

    // ===================================================
    // SUCCESS
    // ===================================================

    setName("");
    setMessage("");
    setRating(0);

    setSubmitMessage(
      "Thank you! Your review has been submitted and is awaiting approval."
    );

    setSubmitting(false);

    // Keep modal open for a moment so the user sees success
    setTimeout(() => {
      closeReviewModal();
    }, 2200);
  };

  // =====================================================
  // CLEAN UP BODY SCROLL
  // =====================================================

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // =====================================================
  // REVIEW MODAL
  // =====================================================

  const reviewModal =
    openReview && typeof document !== "undefined"
      ? createPortal(
          <div
            className="review-modal-overlay"
            onClick={closeReviewModal}
          >
            <div
              className="review-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}

              <button
                type="button"
                className="review-modal-close"
                onClick={closeReviewModal}
                aria-label="Close review form"
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

              <p className="review-modal-subtitle">
                Share your experience with DJ RAY
              </p>

              {/* =================================================
                  STAR RATING
              ================================================= */}

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

              {/* =================================================
                  FORM
              ================================================= */}

              <form onSubmit={handleSubmit}>
                {/* NAME */}

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  maxLength={80}
                  required
                />

                {/* MESSAGE */}

                <textarea
                  placeholder="Your Review"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  rows={5}
                  maxLength={500}
                  required
                />

                {/* SUBMIT MESSAGE */}

                {submitMessage && (
                  <p
                    className={
                      submitMessage.startsWith("Thank you")
                        ? "review-success"
                        : "review-error"
                    }
                  >
                    {submitMessage}
                  </p>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="modal-submit-btn"
                  disabled={submitting}
                >
                  {submitting
                    ? "SUBMITTING..."
                    : "SEND REVIEW"}
                </button>
              </form>
            </div>
          </div>,
          document.body
        )
      : null;

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section
      ref={sectionRef}
      className="testimonials-section"
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="testimonials-header">

        <span className="section-kicker">
          TESTIMONIALS
        </span>

        {/* ===== TESTIMONIALS TITLE DIVIDER ===== */}

        <div className="testimonials-title-divider">
          <span className="testimonials-title-divider-diamond"></span>
        </div>

        <h2>
          What Clients Say
        </h2>

      </div>


      {/* =================================================
          REVIEWS
      ================================================= */}

      <div className="testimonials-grid">

        {loading ? (

          <div className="testimonials-loading">
            Loading reviews...
          </div>

        ) : reviews.length === 0 ? (

          <div className="testimonials-empty">

            <div className="empty-stars">
              ★★★★★
            </div>

            <p>
              Be the first to share your experience with DJ RAY.
            </p>

          </div>

        ) : (

          reviews.map((item) => (

            <article
              className="testimonial-card"
              key={item.id}
            >

              {/* QUOTE */}

              <div className="quote-mark">
                “
              </div>


              {/* STARS */}

              <div className="stars">

                {Array.from(
                  { length: 5 },
                  (_, index) => (

                    <span key={index}>
                      {index < item.rating
                        ? "★"
                        : "☆"}
                    </span>

                  )
                )}

              </div>


              {/* MESSAGE */}

              <p className="review">
                “{item.message}”
              </p>


              {/* NAME */}

              <h3>
                {item.name}
              </h3>


              {/* DATE */}

              <small className="review-date">
                {new Date(
                  item.created_at
                ).toLocaleDateString()}
              </small>

            </article>

          ))

        )}

      </div>


      {/* =================================================
          WRITE A REVIEW BUTTON
      ================================================= */}

      <div className="review-button-wrapper">

        <button
          type="button"
          className="write-review-btn"
          onClick={openReviewModal}
        >
          WRITE A REVIEW
        </button>

      </div>


      {/* ===== TESTIMONIALS BOTTOM DIVIDER ===== */}

      <div className="testimonials-section-divider testimonials-section-divider-bottom">
        <span className="testimonials-section-divider-diamond"></span>
      </div>


      {/* =================================================
          REVIEW MODAL
          IMPORTANT:
          Rendered directly inside BODY using Portal
      ================================================= */}

      {reviewModal}

    </section>
  );
}