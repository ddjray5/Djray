"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaShoppingCart, FaHeart } from "react-icons/fa";
import "./market.css";

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
  "/market/ddj800/DDJ-800-3.jpg",
  "/market/ddj800/DDJ-800-4.jpg",
  "/market/ddj800/DDJ-800_2.jpg",
  "/market/ddj800/IMG_4898.JPG",
  "/market/ddj800/ddj-800-2ch-dj-controller-with-fx-for-rekordbox-dj-software.jpg",
];

const herculesImages = [
  "/market/hercules/Inpulse500.jpg",
  "/market/hercules/15196993_800.jpg",
  "/market/hercules/filters_quality(90).webp",
  "/market/hercules/15197028_800.jpg",
  "/market/hercules/HCL-DJCTRL-INPULSE-500-4.jpg",
  "/market/hercules/djcontrolinpulse500_main3Square__73179.webp",
  "/market/hercules/ProductPageContent-DJCI500PurpleEdition-1_2000x2000_f7582d6a-071f-40eb-9a2e-7980f9d5736e.webp",
  "/market/hercules/filters_quality(90) (1).webp",
];

const djBagImages = [
  "/market/djbag/51aRQ7HIjdL.jpg",
  "/market/djbag/61U70MUsLfL.jpg",
  "/market/djbag/61oZrjkTLLL.jpg",
  "/market/djbag/71KVhu51KGL.jpg",
  "/market/djbag/71LQYW0GTbL.jpg",
  "/market/djbag/71bAkx8KwsL.jpg",
]

const ddj400Images = [
  "/market/ddj400/IMG_4703.jpg",
  "/market/ddj400/IMG_4704.jpg",
  "/market/ddj400/IMG_4706.jpg",
  "/market/ddj400/IMG_4707.jpg",
  "/market/ddj400/IMG_4708.jpg",
  "/market/ddj400/pioneer_ddj_400_1_3.jpg",
  "/market/ddj400/s-l1600.webp",
];

const products = [

  {
    id: "ddj-400",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "DDJ-400",
    condition: "Used Only 4 Times\\nExcellent Condition",
    price: "AED 1,000",
    status: "AVAILABLE",
    description: "Pioneer DJ DDJ-400 in excellent condition. A compact and professional 2-channel DJ controller, ideal for learning, practice, home setups, and live DJ performance.",
    image: "/market/ddj400/pioneer_ddj_400_1_3.jpg",
  },

  {
    id: "ddj-flx4",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "DDJ-FLX4",
    condition: "Used Once\nExcellent Condition",
    price: "AED 1,100",
    status: "AVAILABLE",
    image: "/market/ddjflx4/s-l1600 (3).webp",
  },
  {
    id: "ddj-sx",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "DDJ-SX",
    condition: "Excellent Condition",
    price: "AED 3,800",
    status: "AVAILABLE",
    description: "Excellent condition Pioneer DJ DDJ-SX. Fully functional and ready to use. A powerful professional DJ controller, ideal for DJs looking for reliable performance and a solid setup.",
    image: "/market/ddjsx/J00916000001000-00-500x500.webp",
  },
  {
    id: "ddj-800",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "DDJ-800",
    condition: "Used Only 3 Times\nExcellent Condition",
    price: "AED 3,400",
    status: "AVAILABLE",
    image: "/market/ddj800/816dbPS8UVL.jpg",
  },
  {
    id: "bowers-wilkins-p3",
    category: "HEADPHONES",
    brand: "Bowers & Wilkins",
    name: "Bowers Wilkins P3 first generation",
    condition: "USED Very good Japan",
    price: "AED 800",
    status: "AVAILABLE",
    description: "Bowers Wilkins P3 first generation in very good used condition.",
    image: "/market/bowerswilkins/tw-11134207-7r98o-lqog08lacb8891.jpeg",
  },

  {
    id: "dj-bag",
    category: "DJ BAGS & CASES",
    brand: "DJ RAY",
    name: "DJ Bag",
    condition: "Excellent Condition",
    price: "AED 200",
    status: "AVAILABLE",
    description: "DJ Bag suitable for Pioneer DJ DDJ-400, DDJ-FLX4, Hercules DJControl Inpulse 500, SB3, and SB2.",
    image: "/market/djbag/51aRQ7HIjdL.jpg",
  },

  {
    id: "hercules-inpulse-500",
    category: "DJ EQUIPMENT",
    brand: "Hercules",
    name: "DJControl Inpulse 500",
    condition: "Like New",
    price: "AED 1,000",
    status: "AVAILABLE",
    image: "/market/hercules/Inpulse500.jpg",
  },
];

export default function MarketPage() {
  const router = useRouter();
  const [flx4Image, setFlx4Image] = useState(1);
const [djBagImage, setDjBagImage] = useState(5);

  const [ddjsxImage, setDdjsxImage] = useState(0);
  const [ddj400Image, setDdj400Image] = useState(5);
  const [ddj800Image, setDdj800Image] = useState(0);
  const [herculesImage, setHerculesImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("DJ EQUIPMENT");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<(typeof products)[number][]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("djray-market-favorites");
      const parsed = saved ? JSON.parse(saved) : [];
      if (Array.isArray(parsed)) setFavorites(parsed);
    } catch (error) {
      console.error("LOAD FAVORITES ERROR:", error);
    }
  }, []);

  const toggleFavorite = (productId: string) => {
    setFavorites((current) => {
      const updated = current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId];

      localStorage.setItem(
        "djray-market-favorites",
        JSON.stringify(updated)
      );

      return updated;
    });
  };
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const normalize = (value: string) =>
      value
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    const query = normalize(searchQuery);

    if (!query) return true;

    return normalize(
      [
        product.name,
        product.brand,
        product.category,
        product.condition,
        product.id,
      ].join(" ")
    ).includes(query);
  });
  const [cartBounce, setCartBounce] = useState(false);
  const [flyingCart, setFlyingCart] = useState<{
    image: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  } | null>(null);
  const cartButtonRef = useRef<HTMLButtonElement>(null);

  const addToCart = (
    product: (typeof products)[number],
    buttonElement: HTMLButtonElement
  ) => {
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

      setCartCount(updatedCart.length);
      setCartBounce(true);

      const buttonRect = buttonElement.getBoundingClientRect();
      const cartRect = cartButtonRef.current?.getBoundingClientRect();

      if (cartRect) {
        setFlyingCart({
          image: product.image,
          startX: buttonRect.left + buttonRect.width / 2,
          startY: buttonRect.top + buttonRect.height / 2,
          endX: cartRect.left + cartRect.width / 2,
          endY: cartRect.top + cartRect.height / 2,
        });
      }

      window.setTimeout(() => setFlyingCart(null), 1100);
      window.setTimeout(() => setCartBounce(false), 700);

    } catch (error) {
      console.error("ADD TO CART ERROR:", error);
    }
  };

  const openCart = () => {
    const saved = localStorage.getItem("djray-market-cart");
    const cart = saved ? JSON.parse(saved) : [];

    setCartItems(Array.isArray(cart) ? cart : []);
    setCartOpen(true);
  };

  return (
    <main className="market-page">



      <nav className="market-new-navbar" aria-label="Market Categories">
        <div className="market-new-categories">
          {[
            "DJ EQUIPMENT",
            "HEADPHONES",
            "MACBOOKS",
            "DJ BAGS & CASES",
            "DJ ACCESSORIES",
            "SPEAKERS & AUDIO",
            "MICROPHONES",
          ].map((category) => (
            <button
              key={category}
              type="button"
              className={`market-new-category ${activeCategory === category ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(category);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="market-new-actions">
          <button
            type="button"
            className="market-new-action"
            aria-label="Search"
            title="Search"
            onClick={() => setSearchOpen((open) => !open)}
          >
            <span style={{ fontSize: "32px", lineHeight: 1 }}>⌕</span>
          </button>

          <button
            type="button"
            className="market-new-action"
            aria-label="Favorites"
            title="Favorites"
            onClick={() => router.push("/market/favorites")}
          >
            <FaHeart aria-hidden="true" />
          </button>

          <button
            ref={cartButtonRef}
            type="button"
            className={`market-new-action ${cartBounce ? "cart-bounce" : ""}`}
            aria-label="Shopping Cart"
            title="Shopping Cart"
            onClick={(event) => {
              event.stopPropagation();
              openCart();
            }}
          >
            🛒
            {cartCount > 0 && (
              <span className="market-cart-count">{cartCount}</span>
            )}
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div className="market-search-panel">
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="SEARCH PRODUCTS..."
            autoFocus
          />
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSearchOpen(false);
            }}
          >
            CLOSE
          </button>
        </div>
      )}

      <section className="market-hero">
        <div className="market-hero-content">
          <span className="market-eyebrow">DJ RAY MARKET</span>
          <h1>{activeCategory}</h1>
          <p>
            Carefully selected DJ equipment available from DJ RAY.
          </p>
        </div>
      </section>

      <section className="market-products">
        <div className="market-section-heading">
        </div>

        <div className="products-grid">
          {(searchQuery.trim() ? filteredProducts : filteredProducts.filter((product) => product.category === activeCategory)).map((product) => (
            <article
              className="product-card"
              key={product.id}
              onClick={() => router.push(`/market/${product.id}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  router.push(`/market/${product.id}`);
                }
              }}
            >
              <div className="product-image">
                {product.image ? (
                  <>
                                  <button
                type="button"
                className={`market-card-favorite ${favorites.includes(product.id) ? "active" : ""}`}
                aria-label={favorites.includes(product.id) ? "Remove from Favorites" : "Add to Favorites"}
                title={favorites.includes(product.id) ? "Remove from Favorites" : "Add to Favorites"}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleFavorite(product.id);
                }}
              >
                <FaHeart aria-hidden="true" />
              </button>

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
                    className={`product-real-image ${product.id === "ddj-800" ? "ddj800-market-image" : ""} ${product.id === "dj-bag" && djBagImages[djBagImage].includes("61oZrjkTLLL.jpg") ? "djbag-full-frame-image" : ""}`}
                  />
                  {(product.id === "ddj-sx" || product.id === "ddj-400" || product.id === "hercules-inpulse-500" || product.id === "dj-bag") && (
                    <>
                      <button
                        type="button"
                        className="market-gallery-arrow market-gallery-arrow-left"
                        aria-label="Previous image"
                        onClick={() =>
                          product.id === "hercules-inpulse-500"
                              ? setHerculesImage((current) => (current - 1 + herculesImages.length) % herculesImages.length)
                              : product.id === "dj-bag"
                                ? setDjBagImage((current) => (current - 1 + djBagImages.length) % djBagImages.length)
                                : product.id === "ddj-400"
                                ? setDdj400Image((current) => (current - 1 + ddj400Images.length) % ddj400Images.length)
                                : setDdjsxImage((current) => (current - 1 + ddjsxImages.length) % ddjsxImages.length)
                        }
                      >
                        <span>‹</span>
                      </button>

                      <button
                        type="button"
                        className="market-gallery-arrow market-gallery-arrow-right"
                        aria-label="Next image"
                        onClick={() =>
                          product.id === "hercules-inpulse-500"
                              ? setHerculesImage((current) => (current + 1) % herculesImages.length)
                              : product.id === "dj-bag"
                                ? setDjBagImage((current) => (current + 1) % djBagImages.length)
                                : product.id === "ddj-400"
                                ? setDdj400Image((current) => (current + 1) % ddj400Images.length)
                                : setDdjsxImage((current) => (current + 1) % ddjsxImages.length)
                        }
                      >
                        <span>›</span>
                      </button>
                    </>
                  )}

                  {product.id === "ddj-800" && (
                    <>
                      <button
                        type="button"
                        className="market-gallery-arrow market-gallery-arrow-left"
                        aria-label="Previous image"
                        onClick={() =>
                          setDdj800Image((current) =>
                            (current - 1 + ddj800Images.length) % ddj800Images.length
                          )
                        }
                      >
                        <span>‹</span>
                      </button>
                      <button
                        type="button"
                        className="market-gallery-arrow market-gallery-arrow-right"
                        aria-label="Next image"
                        onClick={() =>
                          setDdj800Image((current) =>
                            (current + 1) % ddj800Images.length
                          )
                        }
                      >
                        <span>›</span>
                      </button>
                    </>
                  )}

                  {product.id === "ddj-flx4" && (
                    <>
                      <button
                        type="button"
                        className="market-gallery-arrow market-gallery-arrow-left"
                        aria-label="Previous image"
                        onClick={() =>
                          setFlx4Image((current) =>
                            (current - 1 + flx4Images.length) % flx4Images.length
                          )
                        }
                      >
                        <span>‹</span>
                      </button>
                      <button
                        type="button"
                        className="market-gallery-arrow market-gallery-arrow-right"
                        aria-label="Next image"
                        onClick={() =>
                          setFlx4Image((current) =>
                            (current + 1) % flx4Images.length
                          )
                        }
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
                  addToCart(product, event.currentTarget);
                }}
              >
                ADD TO CART
              </button>
            </article>
          ))}
        </div>
      </section>

      {cartOpen && (
        <div
          className="market-cart-overlay"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="market-cart-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="market-cart-header">
              <h2>YOUR CART</h2>

            </div>

            <div className="market-cart-items">
              {cartItems.length === 0 ? (
                <p className="market-cart-empty">YOUR CART IS EMPTY</p>
              ) : (
                cartItems.map((item) => (
                  <div className="market-cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} onClick={() => router.push(`/market/${item.id}`)} style={{cursor:"pointer"}} />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.price}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = cartItems.filter(
                          (cartItem) => cartItem.id !== item.id
                        );
                        setCartItems(updated);
                        setCartCount(updated.length);
                        localStorage.setItem(
                          "djray-market-cart",
                          JSON.stringify(updated)
                        );
                      }}
                      aria-label={`Remove ${item.name}`}
                      style={{
                        display: "inline-block",
                        width: "auto",
                        height: "auto",
                        border: "1px solid red",
                        color: "red",
                        background: "transparent",
                        padding: "5px 9px",
                        borderRadius: "3px",
                        fontSize: "10px",
                        lineHeight: "1",
                        fontWeight: 600
                      }}
                    >
                      REMOVE
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="market-cart-total">
              <span>TOTAL</span>
              <strong>
                AED{" "}
                {cartItems.reduce(
                  (total, item) =>
                    total + Number(item.price.replace(/[^0-9.]/g, "")),
                  0
                ).toLocaleString()}
              </strong>
            </div>
          </div>
        </div>
      )}

      {flyingCart && (
        <img
          src={flyingCart.image}
          alt=""
          className="market-flying-cart"
          style={{
            ["--cart-start-x" as string]: `${flyingCart.startX - 35}px`,
            ["--cart-start-y" as string]: `${flyingCart.startY - 35}px`,
            ["--cart-end-x" as string]: `${flyingCart.endX - 35}px`,
            ["--cart-end-y" as string]: `${flyingCart.endY - 35}px`,
          }}
          onAnimationEnd={() => setFlyingCart(null)}
        />
      )}

      <div className="market-brand">
        <img
          src="/logo2.png"
          alt="DJ RAY"
          className="market-logo-small"
        />
        <img
          src="/logo.png"
          alt="DJ RAY MARKET"
          className="market-logo-large"
        />
      </div>

      <section className="market-contact">
        <div className="market-contact-content">
          <span>LOOKING FOR SOMETHING?</span>
          <h2>CONTACT DJ RAY</h2>
          <p>
            If you are looking for specific DJ equipment, contact us and
            we&apos;ll let you know what is currently available.
          </p>

          <div className="market-contact-links">
            <a href="https://wa.me/971554057288" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="tel:+971554057288" aria-label="Phone">
              <FaPhoneAlt />
            </a>
            <a href="mailto:ddjray5@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

