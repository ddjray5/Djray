"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../styles/booking-modal.css";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
};

export default function BookingModal({
  isOpen,
  onClose,
  selectedService = "",
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (selectedService) {
      setEventType(selectedService);
    }
  }, [selectedService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    if (!name || !phone || !eventType || !eventDate) {
      alert("Please fill in all required fields.");
      return;
    }

    const text = `
DJ RAY BOOKING REQUEST

Name:
${name}

Phone Number:
${phone}

Event Type:
${eventType}

Event Date:
${eventDate}

Message:
${message || "No additional message."}
`;

    const whatsappUrl = `https://wa.me/971554057288?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return createPortal(
    <div className="booking-overlay" onClick={onClose}>
      <div
        className="booking-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE X */}
        <button
          type="button"
          className="booking-modal-close"
          onClick={onClose}
          aria-label="Close booking form"
        >
          ×
        </button>

        {/* TITLE */}
        <h2 className="booking-title">
          BOOK NOW
        </h2>

        {/* NAME */}
        <div className="booking-field">
          <label htmlFor="booking-name">
            Name
          </label>

          <input
            id="booking-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* PHONE */}
        <div className="booking-field">
          <label htmlFor="booking-phone">
            Phone Number
          </label>

          <input
            id="booking-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* EVENT TYPE */}
        <div className="booking-field">
          <label htmlFor="booking-event">
            Event Type
          </label>

          <select
            id="booking-event"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value="">
              Select Event
            </option>

            <option value="Wedding">
              Wedding
            </option>

            <option value="Private Event">
              Private Event
            </option>

            <option value="Corporate Event">
              Corporate Event
            </option>

            <option value="Club & Lounge">
              Club & Lounge
            </option>

            <option value="Yacht Party">
              Yacht Party
            </option>

            <option value="VIP Event">
              VIP Event
            </option>

            <option value="Festival">
              Festival
            </option>

            <option value="Birthday Party">
              Birthday Party
            </option>
          </select>
        </div>

        {/* EVENT DATE */}
        <div className="booking-field">
          <label htmlFor="booking-date">
            Event Date
          </label>

          <input
            id="booking-date"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>

        {/* MESSAGE */}
        <div className="booking-field">
          <label htmlFor="booking-message">
            Message
          </label>

          <textarea
            id="booking-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
        </div>

        {/* BUTTONS */}
        <div className="booking-buttons">

          <button
            type="button"
            className="booking-send"
            onClick={handleSubmit}
          >
            SEND
          </button>

          <button
            type="button"
            className="booking-close"
            onClick={onClose}
          >
            CLOSE
          </button>

        </div>

      </div>
    </div>,
    document.body
  );
}