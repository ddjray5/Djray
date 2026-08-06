"use client";

import "../styles/promo-modal.css";
import Image from "next/image";

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PromoModal({
  isOpen,
  onClose,
}: PromoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="promo-overlay" onClick={onClose}>
      <div
        className="promo-modal"
        onClick={(e) => e.stopPropagation()}
      >
       <Image
  src="/logo.png"
  alt="DJ RAY Logo"
  width={420}
  height={220}
  className="promo-logo"
/>


        <div className="promo-line"></div>

        <h3>PROMO VIDEO</h3>

        <p>COMING SOON</p>

        <button onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
}