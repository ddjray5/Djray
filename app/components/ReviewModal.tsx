"use client";

import { useState } from "react";
import { supabase } from "./utils/supabase";

type ReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ReviewModal({
  isOpen,
  onClose,
}: ReviewModalProps) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  // =====================================================
  // SUBMIT REVIEW
  // =====================================================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!review.trim()) {
      setErrorMessage("Please write your review.");
      return;
    }

    if (rating === 0) {
      setErrorMessage("Please select a star rating.");
      return;
    }

    setSubmitting(true);

    const { error } = await supabase
      .from("reviews")
      .insert([
        {
          name: name.trim(),
          rating: rating,
          message: review.trim(),
          approved: false,
        },
      ]);

    if (error) {
      console.error(
        "Error submitting review:",
        JSON.stringify(error, null, 2)
      );

      setErrorMessage(
        "Unable to submit your review. Please try again."
      );

      setSubmitting(false);
      return;
    }

    // ===================================================
    // SUCCESS
    // ===================================================

    setName("");
    setReview("");
    setRating(0);

    setSuccess(true);
    setSubmitting(false);
  };

  // =====================================================
  // CLOSE
  // =====================================================

  const handleClose = () => {
    setSuccess(false);
    setErrorMessage("");
    setName("");
    setReview("");
    setRating(0);

    onClose();
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="modal-overlay">
      <div className="booking-modal">

        {!success ? (
          <>
            {/* =================================================
                TITLE
            ================================================= */}

            <h2>Leave a Review</h2>

            {/* =================================================
                STAR RATING
            ================================================= */}

            <div className="review-rating">

              <label>Your Rating</label>

              <div className="review-stars">

                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={
                      star <= rating
                        ? "star active"
                        : "star"
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

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form onSubmit={handleSubmit}>

              {/* NAME */}

              <label>Your Name</label>

              <input
                type="text"
                name="Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                maxLength={80}
                required
              />

              {/* REVIEW */}

              <label>Your Review</label>

              <textarea
                name="Review"
                placeholder="Write your review..."
                value={review}
                onChange={(e) =>
                  setReview(e.target.value)
                }
                maxLength={500}
                required
              />

              {/* ERROR */}

              {errorMessage && (
                <p className="review-error">
                  {errorMessage}
                </p>
              )}

              {/* BUTTONS */}

              <div className="review-actions">

                <button
                  type="submit"
                  className="btn-gold"
                  disabled={submitting}
                >
                  {submitting
                    ? "SENDING..."
                    : "Send"}
                </button>

                <button
                  type="button"
                  className="watch-btn"
                  onClick={handleClose}
                  disabled={submitting}
                >
                  Close
                </button>

              </div>

            </form>
          </>
        ) : (

          /* =================================================
             SUCCESS
          ================================================= */

          <div className="review-success">

            <div className="success-icon">
              ✓
            </div>

            <h2>
              Thank You!
            </h2>

            <p>
              Your review has been submitted
              successfully.
            </p>

            <p className="review-pending-message">
              It will appear on the website
              after approval.
            </p>

            <button
              type="button"
              className="watch-btn"
              onClick={handleClose}
            >
              Close
            </button>

          </div>
        )}

      </div>
    </div>
  );
}