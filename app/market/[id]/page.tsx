"use client";

import { use, useState } from "react";
import Link from "next/link";

const products = {
  "ddj-flx4": {
    name: "DDJ-FLX4",
    brand: "PIONEER DJ",
    condition: "Used Only 3 Times — Excellent Condition",
    price: "AED 1,100",
    description:
      "Pioneer DJ DDJ-FLX4 in excellent, near-new condition. Used only once and carefully maintained. A compact and professional 2-channel DJ controller, ideal for home practice, events, and live performances.",
    images: [
      "/market/ddjflx4/s-l1600.webp",
          "/market/ddjflx4/s-l1600 (3).webp",
      "/market/ddjflx4/s-l1600 (4).webp",
      "/market/ddjflx4/s-l1600 (5).webp",
      "/market/ddjflx4/s-l1600 (6).webp",
      "/market/ddjflx4/s-l1600 (12).webp",
    ],
  },
  "ddj-sx": {
    name: "DDJ-SX",
    brand: "PIONEER DJ",
    condition: "Used Only 3 Times — Excellent Condition",
    price: "AED 3,800",
    description:
      "Excellent condition Pioneer DJ DDJ-SX. Fully functional and ready to use. A powerful professional DJ controller, ideal for DJs looking for reliable performance and a solid setup.",
    images: [
      "/market/ddjsx/J00916000001000-00-500x500.webp",
      "/market/ddjsx/J00916000001000-01-500x500.webp",
      "/market/ddjsx/J00916000001000-02-500x500.webp",
      "/market/ddjsx/J00916000001000-03-500x500.webp",
      "/market/ddjsx/J00916000001000-04-500x500.webp",
      "/market/ddjsx/J00916000001000-05-500x500.webp",
    ],
  },
  "ddj-800": {
    name: "DDJ-800",
    brand: "PIONEER DJ",
    condition: "Used Only 3 Times — Excellent Condition",
    price: "AED 3,400",
    description:
      "Pioneer DJ DDJ-800 in excellent condition. A professional 2-channel DJ controller designed for powerful performance, flexible control, and reliable use for DJs and live events.",
    images: [
      "/market/ddj800/816dbPS8UVL.jpg",
      "/market/ddj800/DDJ-800-3.jpg",
      "/market/ddj800/DDJ-800_2.jpg",
      "/market/ddj800/IMG_4898.JPG",
    ],
  },
  "ddj-400": {
    name: "DDJ-400",
    brand: "PIONEER DJ",
    condition: "Used Only 3 Times — Excellent Condition",
    price: "AED 1,000",
    description:
      "Pioneer DJ DDJ-400 in excellent condition. A compact and professional 2-channel DJ controller, ideal for learning, practice, home setups, and live DJ performance.",
    images: [
      "/market/ddj400/pioneer_ddj_400_1_3.jpg",
      "/market/ddj400/IMG_4703.jpg",
            "/market/ddj400/IMG_4706.jpg",
      "/market/ddj400/IMG_4707.jpg",
      "/market/ddj400/IMG_4708.jpg",
      "/market/ddj400/s-l1600.webp",
    ],
  },

  "hercules-inpulse-500": {
    name: "Hercules DJControl Inpulse 500",
    brand: "HERCULES",
    condition: "Like New",
    price: "AED 1,000",
    description:
      "Hercules DJControl Inpulse 500 in like-new condition. A professional DJ controller with a solid build and powerful features, ideal for learning, practice, home setups, and live DJ performance.",
    images: [
      "/market/hercules/Inpulse500.jpg",
      "/market/hercules/15196993_800.jpg",
      "/market/hercules/filters_quality(90).webp",
      "/market/hercules/djcontrolinpulse500_main3Square__73179.webp",
      "/market/hercules/ProductPageContent-DJCI500PurpleEdition-1_2000x2000_f7582d6a-071f-40eb-9a2e-7980f9d5736e.webp",
      "/market/hercules/filters_quality(90) (1).webp",
    ],
  },
  "bowers-wilkins-p3": {
    name: "Bowers Wilkins P3 first generation",
    brand: "BOWERS & WILKINS",
    condition: "USED Very good Japan",
    price: "AED 800",
    description:
      "Bowers & Wilkins P3 first generation with excellent sound quality and a compact foldable design.\nPremium portable on-ear headphones with comfortable memory-foam earpads and removable cables.\nUsed in very good condition in Japan.",

    images: [
      "/market/bowerswilkins/bowers_wilkins_p3_blue_p3_mobile_portable_1466508060_1260238.jpg",
      "/market/bowerswilkins/tw-11134207-7r98o-lqog08lacb8891.jpeg",
      "/market/bowerswilkins/61sPe9GvBlL.jpg",
      "/market/bowerswilkins/images.avif",
      "/market/bowerswilkins/51y381plzCL.jpg",
      "/market/bowerswilkins/9a8cf85a.webp",
    ],
  },

  "dj-bag": {
    name: "DJ Bag",
    brand: "DJ RAY",
    condition: "Excellent Condition",
    price: "AED 200",
    description:
      "Labymos Multifunction Gig- Bag DJ Controller Carrying Case with Shoulder Strap for Pioneer DDJ-400 DJ Controller, DDJ-FLX4, Hercules DJControl Inpulse 500, SB3, and SB2. Protective Bag Polyester",
    images: [
      "/market/djbag/71KVhu51KGL.jpg",
      "/market/djbag/61U70MUsLfL.jpg",
          "/market/djbag/61oZrjkTLLL.jpg",
      "/market/djbag/71KVhu51KGL.jpg",
      "/market/djbag/71LQYW0GTbL.jpg",
      "/market/djbag/71bAkx8KwsL.jpg",
    ],
  },
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [currentImage, setCurrentImage] = useState(id === "ddj-flx4" ? 1 : 0);

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <main className="market-page">
        <section className="market-contact">
          <div>
            <h2>PRODUCT NOT FOUND</h2>
          </div>
          <Link href="/market" className="market-contact-button">
            BACK TO MARKET
          </Link>
        </section>
      </main>
    );
  }

  const images = product.images;
  return (
    <main className="market-page">
      <section className="product-detail">
        <Link href="/market" className="product-back">
          Back TO MARKET
        </Link>

        <div className="product-detail-gallery">
          <div className="product-main-photo">
            <button
              type="button"
              className="product-gallery-arrow product-gallery-arrow-left"
              style={{
                position: "absolute",
                left: "18px",
                right: "auto",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                width: "46px",
                height: "46px",
                border: "none",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.65)",
                color: "#fff",
                fontSize: "28px",
                cursor: "pointer",
                pointerEvents: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                lineHeight: 1,
              }}
              onClick={() =>
                setCurrentImage(
                  (currentImage - 1 + images.length) % images.length
                )
              }
              aria-label="Previous image"
            >
              <span style={{ display: "block", transform: "translateY(-2px)" }}>
                ‹
              </span>
            </button>

            <button
              type="button"
              className="product-gallery-arrow product-gallery-arrow-right"
              style={{
                position: "absolute",
                right: "18px",
                left: "auto",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                width: "46px",
                height: "46px",
                border: "none",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.65)",
                color: "#fff",
                fontSize: "28px",
                cursor: "pointer",
                pointerEvents: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                lineHeight: 1,
              }}
              onClick={() =>
                setCurrentImage((currentImage + 1) % images.length)
              }
              aria-label="Next image"
            >
              <span style={{ display: "block", transform: "translateY(-2px)" }}>
                ›
              </span>
            </button>

            <img
              src={images[currentImage]}
              alt={product.name}
              style={{ pointerEvents: "none" }}
            />
          </div>

          <div className="product-thumbnails">
            {images.map((image, index) => (
              <div
                className={`product-thumbnail ${
                  currentImage === index ? "active" : ""
                }`}
                key={image}
                onClick={() => setCurrentImage(index)}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-detail-info">
          <span className="product-detail-brand">{product.brand}</span>

          <h1>{product.name}</h1>

          <p className="product-detail-condition">{product.condition}</p>

          <p className="product-detail-description">
            {product.description}
          </p>

          <div className="product-detail-price">{product.price}</div>

          <a
            href={`https://wa.me/971554057288?text=${encodeURIComponent(
              `Hello, I'm interested in buying the ${product.name}.`
            )}`}
            className="product-buy-button"
            style={{
              background: "#facc15",
              borderColor: "#facc15",
              color: "#000",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(250, 204, 21, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
          >
            CONTACT TO BUY
          </a>
        </div>
      </section>
    </main>
  );
}
