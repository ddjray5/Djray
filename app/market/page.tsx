"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaShoppingCart, FaHeart, FaRegHeart } from "react-icons/fa";
import "./market-clean.css";

const flx4Images = [
  "/market/ddjflx4/s-l1600.webp",
  "/market/ddjflx4/s-l1600 (3).webp",
  "/market/ddjflx4/s-l1600 (4).webp",
  "/market/ddjflx4/s-l1600 (5).webp",
  "/market/ddjflx4/s-l1600 (6).webp",
];

const ddjsxImages = [
  "/market/ddjsx/J00916000001000-00-500x500.webp",
  "/market/ddjsx/J00916000001000-01-500x500.webp",
  "/market/ddjsx/J00916000001000-02-500x500.webp",
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
];

const djBagImages = [
  "/market/djbag/51aRQ7HIjdL.jpg",
  "/market/djbag/61U70MUsLfL.jpg",
  "/market/djbag/61oZrjkTLLL.jpg",
  "/market/djbag/71KVhu51KGL.jpg",
  "/market/djbag/71LQYW0GTbL.jpg",
  "/market/djbag/71bAkx8KwsL.jpg",
]

const standImages = [
  "/market/stand/18063212_800.jpg",
  "/market/stand/17760973_800.jpg",
  "/market/stand/18063217_800.jpg",
  "/market/stand/18063232_800.jpg",
  "/market/stand/18063262_800.jpg",
];

const macbookImages = [
  "/market/macbook-pro/macbook-pro-2012-front.webp",
  "/market/macbook-pro/macbook-pro-2012-top.jpeg",
  "/market/macbook-pro/macbook-pro-2012-angle.jpeg",
  "/market/macbook-pro/macbook-pro-2012-side.avif",
  "/market/macbook-pro/macbook-pro-2012-laptop.jpg",
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

const ddj400Images = [
  "/market/ddj400/IMG_4706.jpg",
  "/market/ddj400/IMG_4707.jpg",
  "/market/ddj400/IMG_4708.jpg",
  "/market/ddj400/pioneer_ddj_400_1_3.jpg",
  "/market/ddj400/s-l1600.webp",
];

export const products = [

  {
    id: "ddj-400",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "DDJ-400",
    condition: "Used Only 4 Times\nExcellent Condition",
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
    status: "SOLD",
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
    id: "ddj-sx2",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "DDJ-SX2",
    condition: "Good Condition",
    price: "AED 2,600",
    status: "SOLD",
    description: "Pioneer DJ DDJ-SX2 in good condition. A professional 4-channel DJ controller with Serato integration and performance pads.",
    image: "/market/ddjsx2/ddj-sx2-main.png",
  },
  {
    id: "xdj-rx",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "XDJ RX",
    condition: "Excellent Condition",
    price: "AED 3,500",
    status: "SOLD",
    description: "Pioneer DJ XDJ RX in excellent condition. A professional all-in-one DJ system with standalone playback and mixer controls.",
    image: "/market/xdj-rx/xdj-rx-main.jpg",
  },
  {
    id: "xdj-rr",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "XDJ RR",
    condition: "Excellent Condition · Like New",
    price: "AED 4,000",
    status: "SOLD",
    description: "Pioneer DJ XDJ RR in excellent, like-new condition. A compact all-in-one DJ system with standalone playback and mixer controls.",
    image: "/market/xdj-rr/xdj-rr-main.webp",
  },
  {
    id: "ddj-sb3",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "DDJ-SB3",
    condition: "Like New",
    price: "AED 900",
    status: "SOLD",
    description: "Pioneer DJ DDJ-SB3 in like-new condition. A compact and reliable 2-channel DJ controller, ideal for beginners, home setups, practice, and live DJ performance.",
    image: "/market/ddjsb3/PioneerDJControllersDDJ-SB32 (1).webp",
  },

  {
    id: "ddj-800",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "DDJ-800",
    condition: "Used Only 3 Times\nExcellent Condition",
    price: "AED 3,400",
    status: "SOLD",
    image: "/market/ddj800/816dbPS8UVL.jpg",
  },
  {
    id: "ddj-1000",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "DDJ-1000",
    condition: "Like New\n4 Channels",
    price: "AED 3,500",
    status: "SOLD",
    description: "Pioneer DJ DDJ-1000 in near-new condition. A professional 4-channel DJ controller with full-size jog wheels, club-style controls, and rekordbox integration.",
    image: "/market/ddj1000/ddj-1000-main.jpg",
  },
  {
    id: "flx6-gt",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "FLX6 GT",
    condition: "Excellent Condition",
    price: "AED 2,800",
    status: "AVAILABLE",
    description: "Pioneer DJ DDJ-FLX6-GT in excellent condition. A professional 4-channel DJ controller with a sleek design and powerful features, ideal for DJs, live performances, events, and home setups. Fully functional and ready to use.",
    image: "/market/flx6gt/DDJ-FLX6-GT_1.jpg",
  },

  {
    id: "flx10",
    category: "DJ EQUIPMENT",
    brand: "Pioneer DJ",
    name: "FLX10",
    condition: "Excellent Condition\nWith Flight Cace",
    price: "AED 6,000",
    status: "SOLD",
    description: "Pioneer DJ DDJ-FLX10 in excellent condition, including Fly Case. A professional 4-channel DJ controller designed for powerful performance, events, live setups, and professional DJs.",
    image: "/market/flx10/ddj-flx10_3.png",
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
    image: "/market/bowerswilkins/bowers_wilkins_p3_blue_p3_mobile_portable_1466508060_1260238.jpg",
  },

  {
    id: "hdj-x5",
    category: "HEADPHONES",
    brand: "Pioneer DJ",
    name: "HDJ-X5",
    condition: "Excellent Condition · With Box",
    price: "AED 350",
    status: "SOLD",
    description: "Pioneer DJ HDJ-X5 headphones in excellent condition, with the original box included.",
    image: "/market/hdj-x5/hdj-x5-main.jpg",
  },

  {
    id: "jbl-live-770",
    category: "HEADPHONES",
    brand: "JBL",
    name: "Live 770NC Headphones",
    condition: "Like New · With Box",
    price: "AED 350",
    status: "SOLD",
    description: "JBL Live 770NC headphones in like-new condition, with the original box included.",
    image: "/market/jbl-live-770/jbl-live-770-2.webp",
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
    id: "magma-ctrl-case-mc-707",
    category: "DJ BAGS & CASES",
    brand: "Magma",
    name: "CTRL Case XDJ-AZ/XZ",
    condition: "DJ Controller Case · Black",
    price: "AED 400",
    status: "SOLD",
    description: "Magma CTRL Case XDJ-AZ/XZ protective carrying case for Pioneer XDJ-AZ/XZ DJ systems.",
    image: "/market/bags-hero.webp",
  },

  {
    id: "dj-stand",
    category: "DJ ACCESSORIES",
    brand: "Hercules",
    name: "DJ Stand",
    condition: "Excellent Condition",
    price: "AED 200",
    status: "AVAILABLE",
    description: "Adjustable Hercules DJ stand for controllers and laptops, suitable for home setups, practice, and live performances.",
    image: "/market/stand/18063212_800.jpg",
  },
  {
    id: "pioneer-dm-40d",
    category: "DJ ACCESSORIES",
    brand: "Pioneer DJ",
    name: "DM-40D 4-Inch Desktop Monitor Speakers",
    condition: "Black · 4-Inch Desktop Monitor Speakers",
    price: "AED 600",
    status: "SOLD",
    description: "Pioneer DJ DM-40D 4-inch desktop monitor speakers in black, suitable for DJ setups, home studios, and desktop listening.",
    image: "/market/dm40d/dm-40d-main.jpg",
  },
  {
    id: "pioneer-dm-50d-white",
    category: "DJ ACCESSORIES",
    brand: "Pioneer DJ",
    name: "DM-50D 5-Inch Active Monitor Speaker – White",
    condition: "White Finish · 5-Inch Active Monitor Speaker",
    price: "AED 750",
    status: "SOLD",
    description: "Pioneer DJ DM-50D 5-inch active monitor speakers in white, designed for DJ setups, home studios, and desktop listening.",
    image: "/market/dm50dw/dm-50dw-main.webp",
  },
  {
    id: "besign-lsx6n-laptop-stand",
    category: "DJ ACCESSORIES",
    brand: "BESIGN",
    name: "LSX6N Laptop Stand",
    condition: "Ergonomic Adjustable Notebook Riser · Silver",
    price: "AED 100",
    status: "SOLD",
    description: "BESIGN LSX6N ergonomic adjustable laptop stand, compatible with Air, Pro, Dell, HP, Lenovo, and other 25.4–39.62cm laptops.",
    image: "/market/besign-lsx6n/lsx6n-main.jpg",
  },

  {
    id: "macbook-pro-2012",
    category: "MACBOOKS",
    brand: "Apple",
    name: "MacBook Pro 13-inch 2012",
    condition: "Good Condition",
    price: "AED 650",
    status: "AVAILABLE",
    description: "Apple MacBook Pro 13-inch (2012) with 8GB RAM, 128GB SSD, and original charger included.",
    image: "/market/macbook-pro/macbook-pro-2012-front.webp",
  },

  {
    id: "macbook-pro-m1-2021",
    category: "MACBOOKS",
    brand: "Apple",
    name: "MacBook Pro M1 16-inch 2021",
    condition: "Good Condition",
    price: "AED 4,000",
    status: "AVAILABLE",
    description: "Apple MacBook Pro M1 16-inch (2021) with 16GB RAM, 512GB SSD, and original charger included.",
    image: "/market/macbook-pro/macbook-pro-m1-2021.jpg",
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
  const [djBagImage, setDjBagImage] = useState(0);
  const [standImage, setStandImage] = useState(0);
  const [macbookImage, setMacbookImage] = useState(0);
  const [macbookM1Image, setMacbookM1Image] = useState(0);
  const [xdjRxImage, setXdjRxImage] = useState(0);
  const [xdjRrImage, setXdjRrImage] = useState(0);
  const [ddjSx2Image, setDdjSx2Image] = useState(0);
  const [hdjX5Image, setHdjX5Image] = useState(0);
  const [jblLive770Image, setJblLive770Image] = useState(0);

  const [ddjsxImage, setDdjsxImage] = useState(0);
  const [ddj400Image, setDdj400Image] = useState(3);
  const [ddj800Image, setDdj800Image] = useState(0);
  const [herculesImage, setHerculesImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("DJ EQUIPMENT");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<(typeof products)[number][]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("djray-market-favorites");
      const parsed = saved ? JSON.parse(saved) : [];
      if (Array.isArray(parsed)) {
        const normalized = [...new Set(parsed)];
        setFavorites(normalized);
        localStorage.setItem("djray-market-favorites", JSON.stringify(normalized));
      }
    } catch (error) {
      console.error("LOAD FAVORITES ERROR:", error);
    }
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("djray-market-cart");
      const parsed = saved ? JSON.parse(saved) : [];
      setCartCount(Array.isArray(parsed) ? parsed.length : 0);
    } catch (error) {
      console.error("LOAD CART COUNT ERROR:", error);
      setCartCount(0);
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
        product.id.replace(/-/g, " "),
        `ddj ${product.id}`,
      ].join(" ")
    ).includes(query);
  }).sort((a, b) => Number(a.status === "SOLD") - Number(b.status === "SOLD"));
  const displayedProducts = showAllProducts || searchQuery.trim()
    ? filteredProducts
    : filteredProducts.filter((product) => product.category === activeCategory);
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
    try {
      const saved = localStorage.getItem("djray-market-cart");
      const cart = saved ? JSON.parse(saved) : [];
      const items = (Array.isArray(cart) ? cart : [])
        .map((item) => {
          const productId = item?.id === "macbook-pro-2012" && item?.name === "MacBook Pro M1 16-inch 2021"
            ? "macbook-pro-m1-2021"
            : item?.id;
          const currentProduct = products.find((product) => product.id === productId);
          return currentProduct ? { ...item, ...currentProduct } : item;
        })
        .sort(
        (a, b) => Number(a.status === "SOLD") - Number(b.status === "SOLD")
        );
      setCartItems(items);
      setCartCount(items.length);
      localStorage.setItem("djray-market-cart", JSON.stringify(items));
    } catch (error) {
      console.error("OPEN CART ERROR:", error);
      setCartItems([]);
      setCartCount(0);
    }
    router.push("/market/cart");
  };

  return (
    <main className="market-page">
      <div className="market-controls-root" aria-label="DJ RAY Market controls">
        <header className="mobile-clean-nav">
          <img
            className="market-navbar-logo"
            src="/dj-ray-market-text-logo.png"
            alt="DJ RAY MARKET"
          />
          <div>
            <button type="button" aria-label="Search" onClick={() => setSearchOpen((open) => !open)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7.5" /><path d="m16 16 5 5" /></svg></button>
            <button type="button" aria-label="Favorites" onClick={() => router.push("/market/favorites")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
              </svg>
              {favorites.length > 0 && <b aria-label={`${favorites.length} favorites`}>{favorites.length}</b>}
            </button>
            <button ref={cartButtonRef} type="button" className={cartBounce ? "cart-bounce" : ""} aria-label="Cart" onClick={openCart}>🛒{cartCount > 0 && <b>{cartCount}</b>}</button>
          </div>
        </header>

        <div className="mobile-clean-categories">
          {["DJ EQUIPMENT", "HEADPHONES", "MACBOOKS", "DJ BAGS & CASES", "DJ ACCESSORIES"].map((category) => (
            <button key={category} type="button" className={activeCategory === category ? "active" : ""} onClick={() => { setActiveCategory(category); setShowAllProducts(false); setSearchQuery(""); }}>{category}</button>
          ))}
        </div>

        {searchOpen && (
          <div className="market-search-panel">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="SEARCH PRODUCTS..."
              autoFocus
            />
            <button className="search-close"
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

      </div>

      <section className="market-mobile-clean" aria-label="DJ RAY Market mobile">

        <section className={`mobile-clean-hero ${activeCategory === "HEADPHONES" ? "headphones-hero" : activeCategory === "MACBOOKS" ? "macbooks-hero" : activeCategory === "DJ BAGS & CASES" ? "bags-hero" : activeCategory === "DJ ACCESSORIES" ? "accessories-hero" : ""}`}>
          <div>
            <small>YOUR SETUP, A MUSIC STANDARD</small>
            <h1>{activeCategory === "DJ EQUIPMENT" ? <>DISCOVER<br />DJ EQUIPMENT<br />THAT INSPIRES</> : activeCategory}</h1>
            <p>{activeCategory === "HEADPHONES" ? "Professional headphones selected for performance, comfort, and sound." : "Carefully selected DJ gear, ready for your next set."}</p>
            <button type="button" onClick={() => document.getElementById("mobile-products")?.scrollIntoView({ behavior: "smooth" })}>SHOP COLLECTION →</button>
          </div>
        </section>

        <div className="mobile-clean-benefits"><span>◇ 100% AUTHENTIC PRODUCTS</span><span>▣ SECURE PAYMENT</span><span>♧ SUPPORT IN ARABIC & ENGLISH</span></div>

        <section className="mobile-clean-products" id="mobile-products">
          <div className="mobile-clean-heading">
            <span>{showAllProducts ? "ALL PRODUCTS" : activeCategory}</span>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setShowAllProducts(true);
                document.getElementById("mobile-products")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              VIEW ALL →
            </button>
          </div>
          <div className="mobile-clean-grid">
            {displayedProducts.map((product) => (
              <article key={product.id} className="mobile-clean-card" onClick={() => router.push(`/market/${product.id}`)}>
                <button type="button" className={favorites.includes(product.id) ? "liked" : ""} aria-label="Favorite" onClick={(event) => { event.stopPropagation(); toggleFavorite(product.id); }}>
                  <svg className="card-heart-icon" viewBox="0 0 24 24" fill={favorites.includes(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                  </svg>
                </button>
                <img className={product.id === "dj-bag" ? "dj-bag-market-image" : product.id === "hercules-inpulse-500" ? "hercules-market-image" : product.id === "flx10" ? "flx10-market-image" : product.id === "xdj-rr" ? "xdj-rr-market-image" : product.id === "ddj-sx2" ? "ddj-sx2-market-image" : product.id === "hdj-x5" ? "hdj-x5-market-image" : product.id === "jbl-live-770" ? "jbl-live-770-market-image" : ""} src={product.image} alt={product.name} />
                <div>
                  <small>{product.brand}</small>
                  <h2>{product.name}</h2>
                  <p className="mobile-clean-condition">{product.condition.replace(/\n/g, " ")}</p>
                  <div className="mobile-clean-bottom">
                    <strong>{product.price}</strong>
                    <span className={product.status === "SOLD" ? "sold" : ""}>{product.status}</span>
                  </div>
                  <button
                    type="button"
                    className="mobile-clean-add-to-cart"
                    onClick={(event) => {
                      event.stopPropagation();
                      addToCart(product, event.currentTarget);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>



      <nav className="market-new-navbar" aria-label="Market Categories">
        <img
          className="market-navbar-logo"
          src="/dj-ray-market-text-logo.png"
          alt="DJ RAY MARKET"
        />
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
                setShowAllProducts(false);
                setSearchQuery("");
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
            <FaRegHeart aria-hidden="true" />
          </button>

          <button 
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

      <section className="market-hero">
        <div className="market-hero-content">
          <span className="market-eyebrow">DJ RAY MARKET</span>
          <h1>{activeCategory}</h1>
          <p>
            {activeCategory === "DJ EQUIPMENT"
              ? "Carefully selected DJ equipment available from DJ RAY."
              : activeCategory === "HEADPHONES"
              ? "Professional DJ headphones selected for performance, comfort, and sound quality."
              : activeCategory === "MACBOOKS"
              ? "Reliable MacBooks carefully selected for DJs, music production, and creative work."
              : activeCategory === "DJ BAGS & CASES"
              ? "Protective DJ bags and cases designed to keep your equipment safe on the move."
              : activeCategory === "DJ ACCESSORIES"
              ? "Essential DJ accessories selected to complete and enhance your setup."
              : activeCategory === "SPEAKERS & AUDIO"
              ? "Quality speakers and audio equipment selected for powerful, clear sound."
              : "Professional microphones selected for DJs, events, performances, and live use."}
          </p>

          <div className="market-trade-in">
            <h2>Turn Your Old Gear Into Your Next Upgrade</h2>
            <p>We buy used DJ equipment and offer easy trade-ins,<br />so you can upgrade your setup with the gear you need.</p>

<div className="market-service-features">
  <span>🚚 Delivery Available Across All UAE</span>
  <span>🛡️ 3-Day Trial Warranty</span>
</div>
          </div>
        </div>
      </section>

      <section className="market-products">
        <div className="market-section-heading">
        </div>

        <div className="products-grid">
          {displayedProducts.map((product) => (
            <article
              className="product-card"
              key={product.id}
                          >
              <div className="product-image" onClick={() => router.push(`/market/${product.id}`)}>
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
                              : product.id === "dj-stand"
                                  ? standImages[standImage]
                                : product.id === "macbook-pro-2012"
                                  ? macbookImages[macbookImage]
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
                    className={`product-real-image ${product.id === "ddj-800" ? "ddj800-market-image" : ""} ${product.id === "dj-bag" ? "dj-bag-market-image" : ""} ${product.id === "dj-bag" && djBagImages[djBagImage].includes("61oZrjkTLLL.jpg") ? "djbag-full-frame-image" : ""} ${product.id === "flx10" ? "flx10-market-image" : product.id === "ddj-sb3" ? "ddjsb3-market-image" : ""} ${product.id === "hercules-inpulse-500" ? "hercules-market-image" : ""} ${product.id === "xdj-rr" ? "xdj-rr-market-image" : ""} ${product.id === "ddj-sx2" ? "ddj-sx2-market-image" : ""} ${product.id === "hdj-x5" ? "hdj-x5-market-image" : ""} ${product.id === "jbl-live-770" ? "jbl-live-770-market-image" : ""}`} style={{ objectFit: "contain", width: "100%", height: "100%" }}
                  />
                  {(product.id === "ddj-sx" || product.id === "ddj-400" || product.id === "hercules-inpulse-500" || product.id === "dj-bag" || product.id === "dj-stand" || product.id === "macbook-pro-2012" || product.id === "macbook-pro-m1-2021" || product.id === "xdj-rx" || product.id === "xdj-rr" || product.id === "ddj-sx2" || product.id === "hdj-x5" || product.id === "jbl-live-770") && (
                    <>
                      <button data-search-close="true"
                        type="button"
                        className="market-gallery-arrow market-gallery-arrow-left"
                        aria-label="Previous image"
                        onClick={() =>
                          product.id === "hercules-inpulse-500"
                              ? setHerculesImage((current) => (current - 1 + herculesImages.length) % herculesImages.length)
                              : product.id === "dj-bag"
                              ? setDjBagImage((current) => (current - 1 + djBagImages.length) % djBagImages.length)
                              : product.id === "dj-stand"
                                ? setStandImage((current) => (current - 1 + standImages.length) % standImages.length)
                              : product.id === "macbook-pro-2012"
                                ? setMacbookImage((current) => (current - 1 + macbookImages.length) % macbookImages.length)
                              : product.id === "macbook-pro-m1-2021"
                                ? setMacbookM1Image((current) => (current - 1 + macbookM1Images.length) % macbookM1Images.length)
                              : product.id === "xdj-rx"
                                ? setXdjRxImage((current) => (current - 1 + xdjRxImages.length) % xdjRxImages.length)
                              : product.id === "xdj-rr"
                                ? setXdjRrImage((current) => (current - 1 + xdjRrImages.length) % xdjRrImages.length)
                              : product.id === "ddj-sx2"
                                ? setDdjSx2Image((current) => (current - 1 + ddjSx2Images.length) % ddjSx2Images.length)
                              : product.id === "hdj-x5"
                                ? setHdjX5Image((current) => (current - 1 + hdjX5Images.length) % hdjX5Images.length)
                              : product.id === "jbl-live-770"
                                ? setJblLive770Image((current) => (current - 1 + jblLive770Images.length) % jblLive770Images.length)
                              : product.id === "ddj-400"
                                ? setDdj400Image((current) => (current - 1 + ddj400Images.length) % ddj400Images.length)
                                : setDdjsxImage((current) => (current - 1 + ddjsxImages.length) % ddjsxImages.length)
                        }
                      >
                        <span>‹</span>
                      </button>

                      <button data-search-close="true"
                        type="button"
                        className="market-gallery-arrow market-gallery-arrow-right"
                        aria-label="Next image"
                        onClick={() =>
                          product.id === "hercules-inpulse-500"
                              ? setHerculesImage((current) => (current + 1) % herculesImages.length)
                              : product.id === "dj-bag"
                              ? setDjBagImage((current) => (current + 1) % djBagImages.length)
                              : product.id === "dj-stand"
                                ? setStandImage((current) => (current + 1) % standImages.length)
                              : product.id === "macbook-pro-2012"
                                ? setMacbookImage((current) => (current + 1) % macbookImages.length)
                              : product.id === "macbook-pro-m1-2021"
                                ? setMacbookM1Image((current) => (current + 1) % macbookM1Images.length)
                              : product.id === "xdj-rx"
                                ? setXdjRxImage((current) => (current + 1) % xdjRxImages.length)
                              : product.id === "xdj-rr"
                                ? setXdjRrImage((current) => (current + 1) % xdjRrImages.length)
                              : product.id === "ddj-sx2"
                                ? setDdjSx2Image((current) => (current + 1) % ddjSx2Images.length)
                              : product.id === "hdj-x5"
                                ? setHdjX5Image((current) => (current + 1) % hdjX5Images.length)
                              : product.id === "jbl-live-770"
                                ? setJblLive770Image((current) => (current + 1) % jblLive770Images.length)
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
                      <button data-search-close="true"
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
                      <button data-search-close="true"
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
                      <button data-search-close="true"
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
                      <button data-search-close="true"
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

              </div>

              {product.status === "SOLD" &&
                product.id !== "ddj-flx4" &&
                product.id !== "ddj-sx" && (
                <span
                  className="product-status sold"
                  style={{ display: "block", width: "max-content", margin: "-42px 0 0 12px" }}
                >
                  SOLD
                </span>
              )}

              <div className="product-info">
                <span className="product-brand">{product.brand}</span>

                <h3>{product.name}</h3>

                <p className="product-condition">
                  {product.condition}
                </p>

                <div className="product-bottom">
                  <strong>{product.price}</strong>
                  <span className={`product-availability ${product.status === "SOLD" ? "sold" : ""}`}>{product.status}</span>





                </div>
              </div>
              <button data-search-close="true"
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
              <div className="market-cart-title">
                <img src="/logo2.png" alt="DJ RAY" />
                <h2>YOUR CART</h2>
              </div>
            </div>

            <div className="market-cart-items">
              {cartItems.length === 0 ? (
                <p className="market-cart-empty">YOUR CART IS EMPTY</p>
              ) : (
                cartItems.map((item) => (
                  <div className="market-cart-item" key={item.id}>
                    <img className={item.id === "xdj-rr" ? "xdj-rr-cart-image" : item.id === "ddj-sx2" ? "ddj-sx2-cart-image" : item.id === "hdj-x5" ? "hdj-x5-cart-image" : item.id === "jbl-live-770" ? "jbl-live-770-cart-image" : ""} src={item.image} alt={item.name} onClick={() => router.push(`/market/${item.id}`)} style={{cursor:"pointer", ...(item.id === "flx10" ? {transform:"scale(0.88)", transformOrigin:"center center"} : {})}} />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.price}</span>
                      <span className={`product-availability ${item.status === "SOLD" ? "sold" : ""}`}>
                        {item.status}
                      </span>
                    </div>
                    <button className="search-close"
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
                        padding: "4px 7px",
                        borderRadius: "3px",
                        fontSize: "8px",
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

            <div className="market-cart-actions">
              <button
                type="button"
                className="market-cart-order"
                onClick={() => {
                  const total = cartItems.reduce(
                    (sum, item) =>
                      sum + Number(item.price.replace(/[^0-9.]/g, "")),
                    0
                  );

                  const items = cartItems
                    .map((item) => `• ${item.name} — ${item.price}`)
                    .join("\n");

                  const message = `Hello DJ RAY, I would like to order:\n\n${items}\n\nTOTAL: AED ${total.toLocaleString()}`;
                  window.open(
                    `https://wa.me/971554057288?text=${encodeURIComponent(message)}`,
                    "_blank"
                  );
                }}
              >
                ORDER NOW
              </button>

              <button
                type="button"
                className="market-cart-continue"
                onClick={() => setCartOpen(false)}
              >
                CONTINUE SHOPPING
              </button>
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
