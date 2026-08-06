"use client";

import { useState } from "react";
import "../styles/booking-modal.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({
  isOpen,
  onClose,
}: BookingModalProps) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const sendBooking = () => {

    if (!name || !phone || !eventType) {
      alert("Please fill in all required fields.");
      return;
    }

    const text = `Hello DJ RAY,

Name:
${name}

Phone Number:
${phone}

Event Type:
${eventType}

Event Date:
${eventDate}

Message:
${message}`;

    const url =
      `https://wa.me/971554057288?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="booking-overlay" onClick={onClose}>

      <div
        className="booking-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <h2>BOOK NOW</h2>

        <div className="booking-field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="booking-field">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="booking-field">
          <label>Event Type</label>

          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value="">Select Event</option>
            <option>Luxury Wedding</option>
            <option>Club & Lounge</option>
            <option>Private Event</option>
            <option>Corporate Event</option>
            <option>Yacht Party</option>
            <option>Beach & Pool Party</option>
            <option>Birthday Party</option>
          </select>

        </div>

        <div className="booking-field">
          <label>Event Date</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>

        <div className="booking-field">
          <label>Message</label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="booking-buttons">

          <button onClick={sendBooking}>
            SEND BOOKING REQUEST
          </button>

          <button
            className="close-btn"
            onClick={onClose}
          >
            CLOSE
          </button>

        </div>

      </div>

    </div>
  );
}