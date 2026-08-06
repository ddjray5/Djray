"use client";
import { useState } from "react";

type ReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ReviewModal({
  isOpen,
  onClose,
}: ReviewModalProps) {
    const [success, setSuccess] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="booking-modal">

        <h2>Leave a Review</h2>

        {success ? (
  <div className="review-success">

  <div className="success-icon">✓</div>

  <h2>Thank You!</h2>

  <p>Your review has been sent successfully.</p>

  <button
  type="button"
  className="watch-btn"
  onClick={onClose}
>
  Close
</button>

</div>
) : (

       <form
  action="https://formsubmit.co/djrayofficial@gmail.com"
  method="POST"
>

  <label>Your Name</label>

  <input
    type="text"
    name="Name"
    placeholder="Enter your name"
    required
  />

  <label>Your Review</label>

  <textarea
    name="Review"
    placeholder="Write your review..."
    required
  />

  <div className="review-actions">

  <button type="submit" className="btn-gold">
    Send
  </button>

  <button
    type="button"
    className="watch-btn"
    onClick={onClose}
  >
    Close
  </button>

</div>

</form>
        )}

      </div>
    </div>
  );
}