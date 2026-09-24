"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const flx4Images = [
  "/market/ddjflx4/s-l1600.webp",
  "/market/ddjflx4/s-l1600 (3).webp",
  "/market/ddjflx4/s-l1600 (4).webp",
  "/market/ddjflx4/s-l1600 (5).webp",
  "/market/ddjflx4/s-l1600 (6).webp",
  "/market/ddjflx4/s-l1600 (12).webp",
];

const ddjsxImages = [
  "/market/ddjsx/J00916000001000-00-500x500.webp",
  "/market/ddjsx/J00916000001000-01-500x500.webp",
  "/market/ddjsx/J00916000001000-02-500x500.webp",
  "/market/ddjsx/J00916000001000-03-500x500.webp",
  "/market/ddjsx/J00916000001000-04-500x500.webp",
  "/market/ddjsx/J00916000001000-05-500x500.webp",
];

const ddj800Images = [
  "/market/ddj800/816dbPS8UVL.jpg",
  "/market/ddj800/DDJ-800_2.jpg",
  "/market/ddj800/DDJ-800-3.jpg",
  "/market/ddj800/DDJ-800-4.jpg",
  "/market/ddj800/IMG_4898.JPG",
];

const djBagImages = [
  "/market/djbag/51aRQ7HIjdL.jpg",
];

const ddj400Images = [
  "/market/ddj400/s-l1600.webp",
  "/market/ddj400/IMG_4703.jpg",
  "/market/ddj400/IMG_4704.jpg",
  "/market/ddj400/IMG_4706.jpg",
  "/market/ddj400/IMG_4707.jpg",
  "/market/ddj400/IMG_4708.jpg",
  "/market/ddj400/pioneer_ddj_400_1_3.jpg",
];

const herculesImages = [
  "/market/hercules/15196993_800.jpg",
  "/market/hercules/Inpulse500.jpg",
  "/market/hercules/filters_quality(90).webp",
  "/market/hercules/15197028_800.jpg",
  "/market/hercules/HCL-DJCTRL-INPULSE-500-4.jpg",
  "/market/hercules/djcontrolinpulse500_main3Square__73179.webp",
  "/market/hercules/ProductPageContent-DJCI500PurpleEdition-1_2000x2000_f7582d6a-071f-40eb-9a2e-7980f9d5736e.webp",
  "/market/hercules/filters_quality(90) (1).webp",
];

const macbookM1Images = [
  "/market/macbook-pro/macbook-pro-m1-2021.jpg",
  "/market/macbook-pro/macbook-pro-m1-2021-2.webp",
  "/market/macbook-pro/macbook-pro-m1-2021-3.jpg",
  "/market/macbook-pro/macbook-pro-m1-2021-4.jpg",
  "/market/macbook-pro/macbook-pro-m1-2021-5.png",
];

const xdjRxImages = [
  "/market/xdj-rx/xdj-rx-main.jpg",
  "/market/xdj-rx/xdj-rx-2.webp",
  "/market/xdj-rx/xdj-rx-3.jpg",
  "/market/xdj-rx/xdj-rx-4.jpg",
  "/market/xdj-rx/xdj-rx-5.jpg",
];

const xdjRrImages = [
  "/market/xdj-rr/xdj-rr-main.webp",
  "/market/xdj-rr/xdj-rr-2.webp",
  "/market/xdj-rr/xdj-rr-3.webp",
  "/market/xdj-rr/xdj-rr-4.jpeg",
  "/market/xdj-rr/xdj-rr-5.jpeg",
];

const ddjSx2Images = [
  "/market/ddjsx2/ddj-sx2-main.png",
  "/market/ddjsx2/ddj-sx2-2.jpg",
  "/market/ddjsx2/ddj-sx2-3.jpeg",
  "/market/ddjsx2/ddj-sx2-4.jpeg",
  "/market/ddjsx2/ddj-sx2-5.jpeg",
];

const hdjX5Images = [
  "/market/hdj-x5/hdj-x5-main.jpg",
  "/market/hdj-x5/hdj-x5-2.webp",
  "/market/hdj-x5/hdj-x5-3.jpg",
  "/market/hdj-x5/hdj-x5-4.webp",
  "/market/hdj-x5/hdj-x5-box.jpeg",
];

const jblLive770Images = [
  "/market/jbl-live-770/jbl-live-770-2.webp",
  "/market/jbl-live-770/jbl-live-770-main.avif",
  "/market/jbl-live-770/jbl-live-770-3.webp",
  "/market/jbl-live-770/jbl-live-770-4.webp",
  "/market/jbl-live-770/jbl-live-770-box.jpg",
];

const products = [
  {
    id: "ddj-400",
    brand: "Pioneer DJ",
    name: "DDJ-400",
    condition: "Used Only 4 Times Excellent Condition",
    price: "AED 1,000",
    status: "AVAILABLE",
    image: "/market/ddj400/s-l1600.webp",
  },
  {
    id: "ddj-flx4",
    brand: "Pioneer DJ",
    name: "DDJ-FLX4",
    condition: "Used Once Excellent Condition",
    price: "AED 1,100",
    status: "SOLD",
    image: "/market/ddjflx4/s-l1600 (3).webp",
  },
  {
    id: "ddj-sb3",
    brand: "Pioneer DJ",
    name: "DDJ-SB3",
    condition: "Like New",
    price: "AED 900",
    status: "SOLD",
    image: "/market/ddjsb3/PioneerDJControllersDDJ-SB32 (1).webp",
  },
  {
    id: "ddj-sx",
    brand: "Pioneer DJ",
    name: "DDJ-SX",
    condition: "Excellent Condition",
    price: "AED 3,800",
    status: "AVAILABLE",
    image: "/market/ddjsx/J00916000001000-00-500x500.webp",
  },
  {
    id: "ddj-800",
    brand: "Pioneer DJ",
    name: "DDJ-800",
    condition: "Used Only 3 Times Excellent Condition",
    price: "AED 3,400",
    status: "SOLD",
    image: "/market/ddj800/DDJ-800-4.jpg",
  },
  {
    id: "ddj-1000",
    brand: "Pioneer DJ",
    name: "DDJ-1000",
    condition: "Like New · 4 Channels",
    price: "AED 3,500",
    status: "SOLD",
    image: "/market/ddj1000/ddj-1000-main.jpg",
  },
  {
    id: "flx6-gt",
    brand: "Pioneer DJ",
    name: "FLX6 GT",
    condition: "Excellent Condition",
    price: "AED 2,800",
    status: "AVAILABLE",
    image: "/market/flx6gt/DDJ-FLX6-GT_1.jpg",
  },
  {
    id: "flx10",
    brand: "Pioneer DJ",
    name: "FLX10",
    condition: "Excellent Condition\nWith Flight Cace",
    price: "AED 6,000",
    status: "SOLD",
    image: "/market/flx10/ddj-flx10_3.png",
    className: "flx10-favorites-image",
  },
  {
    id: "bowers-wilkins-p3",
    brand: "Bowers & Wilkins",
    name: "Bowers Wilkins P3 first generation",
    condition: "USED Very good Japan",
    price: "AED 800",
    status: "AVAILABLE",
    image: "/market/bowerswilkins/bowers_wilkins_p3_blue_p3_mobile_portable_1466508060_1260238.jpg",
  },
  {
    id: "hdj-x5",
    brand: "Pioneer DJ",
    name: "HDJ-X5",
    condition: "Excellent Condition · With Box",
    price: "AED 350",
    status: "SOLD",
    image: "/market/hdj-x5/hdj-x5-main.jpg",
  },
  {
    id: "jbl-live-770",
    brand: "JBL",
    name: "Live 770NC Headphones",
    condition: "Like New · With Box",
    price: "AED 350",
    status: "SOLD",
    image: "/market/jbl-live-770/jbl-live-770-2.webp",
  },
  {
    id: "dj-bag",
    brand: "DJ RAY",
    name: "DJ Bag",
    condition: "Excellent Condition",
    price: "AED 200",
    status: "AVAILABLE",
    image: "/market/djbag/51aRQ7HIjdL.jpg",
  },
  {
    id: "dj-stand",
    brand: "Hercules",
    name: "DJ Stand",
    condition: "Excellent Condition",
    price: "AED 200",
    status: "AVAILABLE",
    image: "/market/stand/18063212_800.jpg",
  },
  {
    id: "pioneer-dm-40d",
    brand: "Pioneer DJ",
    name: "DM-40D 4-Inch Desktop Monitor Speakers",
    condition: "Black · 4-Inch Desktop Monitor Speakers",
    price: "AED 600",
    status: "SOLD",
    image: "/market/dm40d/dm-40d-main.jpg",
  },
  {
    id: "pioneer-dm-50d-white",
    brand: "Pioneer DJ",
    name: "DM-50D 5-Inch Active Monitor Speaker – White",
    condition: "White Finish · 5-Inch Active Monitor Speaker",
    price: "AED 750",
    status: "SOLD",
    image: "/market/dm50dw/dm-50dw-main.webp",
  },
  {
    id: "macbook-pro-2012",
    brand: "Apple",
    name: "MacBook Pro 13-inch 2012",
    condition: "Good Condition",
    price: "AED 650",
    status: "AVAILABLE",
    image: "/market/macbook-pro/macbook-pro-2012-front.webp",
  },
  {
    id: "macbook-pro-m1-2021",
    brand: "Apple",
    name: "MacBook Pro M1 16-inch 2021",
    condition: "Good Condition",
    price: "AED 4,000",
    status: "AVAILABLE",
    image: "/market/macbook-pro/macbook-pro-m1-2021.jpg",
  },
  {
    id: "xdj-rx",
    brand: "Pioneer DJ",
    name: "XDJ RX",
    condition: "Excellent Condition",
    price: "AED 3,500",
    status: "SOLD",
    image: "/market/xdj-rx/xdj-rx-main.jpg",
  },
  {
    id: "xdj-rr",
    brand: "Pioneer DJ",
    name: "XDJ RR",
    condition: "Excellent Condition · Like New",
    price: "AED 4,000",
    status: "SOLD",
    image: "/market/xdj-rr/xdj-rr-main.webp",
  },
  {
    id: "ddj-sx2",
    brand: "Pioneer DJ",
    name: "DDJ-SX2",
    condition: "Good Condition",
    price: "AED 2,600",
    status: "SOLD",
    image: "/market/ddjsx2/ddj-sx2-main.png",
  },
  {
    id: "hercules-inpulse-500",
    brand: "Hercules",
    name: "DJControl Inpulse 500",
    condition: "Like New",
    price: "AED 1,000",
    status: "AVAILABLE",
    image: "/market/hercules/Inpulse500.jpg",
  },
];

export default function FavoritesPage() {
  const router = useRouter();

  const [flx4Image, setFlx4Image] = useState(1);
  const [djBagImage, setDjBagImage] = useState(0);
  const [ddjsxImage, setDdjsxImage] = useState(0);
  const [ddj400Image, setDdj400Image] = useState(6);
  const [ddj800Image, setDdj800Image] = useState(0);
  const [herculesImage, setHerculesImage] = useState(1);
  const [macbookM1Image, setMacbookM1Image] = useState(0);
  const [xdjRxImage, setXdjRxImage] = useState(0);
  const [xdjRrImage, setXdjRrImage] = useState(0);
  const [ddjSx2Image, setDdjSx2Image] = useState(0);
  const [hdjX5Image, setHdjX5Image] = useState(0);
  const [jblLive770Image, setJblLive770Image] = useState(0);

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("djray-market-favorites");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const normalized = [...new Set(parsed)];
          setFavorites(normalized);
          localStorage.setItem("djray-market-favorites", JSON.stringify(normalized));
        }
      }
    } catch {}
  }, []);

  const favoriteProducts = products
    .filter((product) => favorites.includes(product.id))
    .sort((a, b) => Number(a.status === "SOLD") - Number(b.status === "SOLD"));

  const removeFavorite = (productId: string) => {
    setFavorites((current) => {
      const updated = current.filter((id) => id !== productId);
      localStorage.setItem(
        "djray-market-favorites",
        JSON.stringify(updated)
      );
      return updated;
    });
  };

  const addToCart = (product: (typeof products)[number]) => {
    try {
      const saved = localStorage.getItem("djray-market-cart");
      const cart = saved ? JSON.parse(saved) : [];

      const updatedCart = Array.isArray(cart)
        ? [...cart.filter((item) => item?.id !== product.id), product]
        : [product];

      localStorage.setItem(
        "djray-market-cart",
        JSON.stringify(updatedCart)
      );
    } catch (error) {
      console.error("ADD TO CART ERROR:", error);
    }
  };

  return (
    <main className="market-favorites-page">
      <button
        type="button"
        className="favorites-back-button"
        onClick={() => router.push("/market")}
      >
        BACK
      </button>

      <section className="market-hero">
        <div className="market-hero-content">
          <img
            className="market-favorites-page-logo"
            src="/dj-ray-market-text-logo.png"
            alt="DJ RAY MARKET"
          />
          <h1 style={{ fontSize: "46px" }}>MY FAVORITES</h1>
          <p>Your favorite DJ equipment and products.</p>
        </div>
      </section>

      <section className="market-products" style={{ padding: "50px 20px" }}>
        {favoriteProducts.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                marginTop: "20px",
                fontSize: "15px",
                letterSpacing: "1px",
              }}
            >
              YOUR FAVORITES ARE EMPTY
            </p>

            <button
              type="button"
              onClick={() => router.push("/market")}
              style={{
                display: "inline-block",
                marginTop: "28px",
                padding: "12px 24px",
                border: "1px solid rgba(0,0,0,0.35)",
                background: "transparent",
                color: "#000",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              BACK
            </button>
          </div>
        ) : (
          <>
            <div className="products-grid">
              {favoriteProducts.map((product) => (
                <article
                  className="product-card"
                  key={product.id}
                >
                  <div
                    className="product-image"
                    onClick={(event) => {
                      if ((event.target as HTMLElement).closest("button")) return;
                      router.push(`/market/${product.id}`);
                    }}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        router.push(`/market/${product.id}`);
                      }
                    }}
                  >
                    {product.image ? (
                      <>
                        <img
                          src={
                            product.id === "ddj-flx4"
                              ? flx4Images[flx4Image]
                              : product.id === "ddj-sx"
                                ? ddjsxImages[ddjsxImage]
                                : product.id === "ddj-800"
                                  ? ddj800Images[ddj800Image]
                                  : product.id === "ddj-400"
                                    ? ddj400Images[ddj400Image]
                                    : product.id === "hercules-inpulse-500"
                                      ? herculesImages[herculesImage]
                                      : product.id === "dj-bag"
                                        ? djBagImages[djBagImage]
                                      : product.id === "macbook-pro-m1-2021"
                                        ? macbookM1Images[macbookM1Image]
                                      : product.id === "xdj-rx"
                                        ? xdjRxImages[xdjRxImage]
                                      : product.id === "xdj-rr"
                                        ? xdjRrImages[xdjRrImage]
                                      : product.id === "ddj-sx2"
                                        ? ddjSx2Images[ddjSx2Image]
                                      : product.id === "hdj-x5"
                                        ? hdjX5Images[hdjX5Image]
                                      : product.id === "jbl-live-770"
                                        ? jblLive770Images[jblLive770Image]
                                        : product.image
                          }
                          alt={product.name}
                          style={
                            product.id === "flx6-gt"
                              ? { transform: "scale(0.88)", transformOrigin: "center center" }
                              : product.id === "flx10"
                                ? { transform: "scale(0.72)", transformOrigin: "center center" }
                                : undefined
                          }
                          className={`product-real-image ${
                            product.id === "ddj-800"
                              ? "ddj800-market-image"
                              : ""
                          } ${
                            product.id === "bowers-wilkins-p3"
                              ? "bowers-p3-favorites-image"
                              : ""
                          } ${
                            product.id === "flx6-gt"
                              ? "flx6-gt-favorites-image"
                              : product.id === "flx10"
                                ? "flx10-favorites-image"
                                : ""
                          } ${
                            product.id === "xdj-rr"
                              ? "xdj-rr-favorites-image"
                              : ""
                          } ${
                            product.id === "ddj-sx2"
                              ? "ddj-sx2-favorites-image"
                              : product.id === "hdj-x5"
                                ? "hdj-x5-favorites-image"
                                : product.id === "jbl-live-770"
                                  ? "jbl-live-770-favorites-image"
                                  : ""
                          } ${
                            product.id === "dj-bag" &&
                            djBagImages[djBagImage].includes("61oZrjkTLLL.jpg")
                              ? "djbag-full-frame-image"
                              : product.id === "ddj-sb3"
                                ? "ddjsb3-market-image"
                                : ""
                          }`}
                        />

                        {(product.id === "macbook-pro-m1-2021" || product.id === "xdj-rx" || product.id === "xdj-rr" || product.id === "ddj-sx2" || product.id === "hdj-x5" || product.id === "jbl-live-770") && (
                          <>
                            <button
                              type="button"
                              className="market-gallery-arrow market-gallery-arrow-left"
                              aria-label="Previous image"
                              onClick={(event) => {
                                event.stopPropagation();
                                if (product.id === "xdj-rx") {
                                  setXdjRxImage((current) => (current - 1 + xdjRxImages.length) % xdjRxImages.length);
                                } else if (product.id === "xdj-rr") {
                                  setXdjRrImage((current) => (current - 1 + xdjRrImages.length) % xdjRrImages.length);
                                } else if (product.id === "ddj-sx2") {
                                  setDdjSx2Image((current) => (current - 1 + ddjSx2Images.length) % ddjSx2Images.length);
                                } else if (product.id === "hdj-x5") {
                                  setHdjX5Image((current) => (current - 1 + hdjX5Images.length) % hdjX5Images.length);
                                } else if (product.id === "jbl-live-770") {
                                  setJblLive770Image((current) => (current - 1 + jblLive770Images.length) % jblLive770Images.length);
                                } else {
                                  setMacbookM1Image((current) => (current - 1 + macbookM1Images.length) % macbookM1Images.length);
                                }
                              }}
                            >
                              <span>‹</span>
                            </button>
                            <button
                              type="button"
                              className="market-gallery-arrow market-gallery-arrow-right"
                              aria-label="Next image"
                              onClick={(event) => {
                                event.stopPropagation();
                                if (product.id === "xdj-rx") {
                                  setXdjRxImage((current) => (current + 1) % xdjRxImages.length);
                                } else if (product.id === "xdj-rr") {
                                  setXdjRrImage((current) => (current + 1) % xdjRrImages.length);
                                } else if (product.id === "ddj-sx2") {
                                  setDdjSx2Image((current) => (current + 1) % ddjSx2Images.length);
                                } else if (product.id === "hdj-x5") {
                                  setHdjX5Image((current) => (current + 1) % hdjX5Images.length);
                                } else if (product.id === "jbl-live-770") {
                                  setJblLive770Image((current) => (current + 1) % jblLive770Images.length);
                                } else {
                                  setMacbookM1Image((current) => (current + 1) % macbookM1Images.length);
                                }
                              }}
                            >
                              <span>›</span>
                            </button>
                          </>
                        )}

                      </>
                    ) : (
                      <div className="product-image-placeholder">
                        <span>{product.brand}</span>
                        <strong>{product.name}</strong>
                      </div>
                    )}

                    <button
                      type="button"
                      className="market-product-favorite active"
                      aria-label="Remove from Favorites"
                      title="Remove from Favorites"
                      onClick={(event) => {
                        event.stopPropagation();
                        removeFavorite(product.id);
                      }}
                    >
                      <svg className="card-heart-icon" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                      </svg>
                    </button>

                  </div><div className="product-info favorites-product-info">
                    <span className="product-brand">{product.brand}</span>

                    <h3>{product.name}</h3>

                    <p className="product-condition">
                      {product.condition}
                    </p>

                    <div className="product-bottom">
                      <strong>{product.price}</strong>
                      <span className={`product-availability ${product.status === "SOLD" ? "sold" : ""}`}>
                        {product.status}
                      </span>

                    </div>
                  </div>

                  <button
                    type="button"
                    className="market-add-to-cart"
                    onClick={(event) => {
                      event.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    ADD TO CART
                  </button>
                </article>
              ))}
            </div>

          </>
        )}
      </section>
    </main>
  );
}
