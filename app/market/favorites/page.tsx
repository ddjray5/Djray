"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import "../market.css";

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
    status: "AVAILABLE",
    image: "/market/ddjflx4/s-l1600 (3).webp",
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
    status: "AVAILABLE",
    image: "/market/ddj800/DDJ-800-4.jpg",
  },
  {
    id: "bowers-wilkins-p3",
    brand: "Bowers & Wilkins",
    name: "Bowers Wilkins P3 first generation",
    condition: "USED Very good Japan",
    price: "AED 800",
    status: "AVAILABLE",
    image: "/market/bowerswilkins/tw-11134207-7r98o-lqog08lacb8891.jpeg",
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

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("djray-market-favorites");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch {}
  }, []);

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

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
    <main className="market-page">
      <section className="market-hero">
        <div className="market-hero-content">
          <span className="market-eyebrow">DJ RAY MARKET</span>
          <h1>MY FAVORITES</h1>
          <p>Your favorite DJ equipment and products.</p>
        </div>
      </section>

      <section style={{ padding: "50px 20px" }}>
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
                border: "1px solid #d1ad4a",
                background: "transparent",
                color: "#000",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              BACK TO MARKET
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
                                        : product.image
                          }
                          alt={product.name}
                          className={`product-real-image ${
                            product.id === "ddj-800"
                              ? "ddj800-market-image"
                              : ""
                          } ${
                            product.id === "dj-bag" &&
                            djBagImages[djBagImage].includes("61oZrjkTLLL.jpg")
                              ? "djbag-full-frame-image"
                              : ""
                          }`}
                        />

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
                      <FaHeart aria-hidden="true" />
                    </button>

                    <span
                      className={`product-status ${
                        product.status === "SOLD" ? "sold" : ""
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <div className="product-info">
                    <span className="product-brand">{product.brand}</span>

                    <h3>{product.name}</h3>

                    <p className="product-condition">
                      {product.condition}
                    </p>

                    <div className="product-bottom">
                      <strong>{product.price}</strong>

                      <Link href={`/market/${product.id}`}>
                        VIEW DETAILS
                      </Link>
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

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button
                type="button"
                onClick={() => router.push("/market")}
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  border: "1px solid #d1ad4a",
                  background: "transparent",
                  color: "#000",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                BACK TO MARKET
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
