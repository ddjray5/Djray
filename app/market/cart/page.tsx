"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "../page";

type CartProduct = (typeof products)[number];

export default function CartPage() {
  const router = useRouter();
  const [items, setItems] = useState<CartProduct[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("djray-market-cart");
      const parsed: unknown = saved ? JSON.parse(saved) : [];
      const normalized = (Array.isArray(parsed) ? parsed : [])
        .map((entry) => {
          if (!entry || typeof entry !== "object") return null;
          const raw = entry as { id?: unknown; name?: unknown };
          const productId = raw.id === "macbook-pro-2012" && raw.name === "MacBook Pro M1 16-inch 2021"
            ? "macbook-pro-m1-2021"
            : raw.id;
          const product = products.find((candidate) => candidate.id === productId);
          return product ? product : null;
        })
        .filter((product): product is CartProduct => Boolean(product))
        .sort((a, b) => Number(a.status === "SOLD") - Number(b.status === "SOLD"));

      setItems(normalized);
      localStorage.setItem("djray-market-cart", JSON.stringify(normalized));
    } catch (error) {
      console.error("LOAD CART PAGE ERROR:", error);
      setItems([]);
    }
  }, []);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + Number(item.price.replace(/[^0-9.]/g, "")), 0),
    [items]
  );

  const removeItem = (productId: string) => {
    const updated = items.filter((item) => item.id !== productId);
    setItems(updated);
    localStorage.setItem("djray-market-cart", JSON.stringify(updated));
  };

  const orderNow = () => {
    const lines = items.map((item) => `• ${item.name} — ${item.price}`).join("\n");
    const message = `Hello DJ RAY, I would like to order:\n\n${lines}\n\nTOTAL: AED ${total.toLocaleString()}`;
    window.open(`https://wa.me/971554057288?text=${encodeURIComponent(message)}`, "_blank");
  };

  const contactToBuy = () => {
    const lines = items.map((item) => `• ${item.name} — ${item.price}`).join("\n");
    const message = `Hello DJ RAY, I would like to contact you to buy:\n\n${lines}\n\nTOTAL: AED ${total.toLocaleString()}`;
    window.open(`https://wa.me/971554057288?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="market-cart-page">
      <button type="button" className="cart-page-back-button" onClick={() => router.push("/market")}>
        BACK
      </button>

      <section className="market-cart-page-hero">
        <img src="/logo2.png" alt="DJ RAY" />
        <div>
          <span>DJ RAY MARKET</span>
          <h1>YOUR CART</h1>
          <p>Review your selected DJ equipment and headphones.</p>
        </div>
      </section>

      <section className="market-cart-page-content">
        <div className="market-cart-page-heading">
          <h2>CART ITEMS</h2>
          <button type="button" onClick={() => router.push("/market")}>CONTINUE SHOPPING</button>
        </div>

        {items.length === 0 ? (
          <div className="market-cart-page-empty">
            <p>YOUR CART IS EMPTY</p>
            <button type="button" onClick={() => router.push("/market")}>BROWSE MARKET</button>
          </div>
        ) : (
          <>
            <div className="market-cart-page-list">
              {items.map((item) => (
                <article className="market-cart-page-item" key={item.id}>
                  <img
                    className={`market-cart-page-image ${item.id}-cart-page-image`}
                    src={item.image}
                    alt={item.name}
                    onClick={() => router.push(`/market/${item.id}`)}
                  />
                  <div className="market-cart-page-item-info">
                    <small>{item.brand}</small>
                    <h3>{item.name}</h3>
                    <p>{item.condition}</p>
                    <strong>{item.price}</strong>
                    <div className="market-cart-page-item-bottom">
                      <span className={`product-availability ${item.status === "SOLD" ? "sold" : ""}`}>
                        {item.status}
                      </span>
                      <button type="button" onClick={() => removeItem(item.id)}>REMOVE</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="market-cart-page-summary">
              <span>TOTAL</span>
              <strong>AED {total.toLocaleString()}</strong>
            </div>
            <div className="market-cart-page-actions">
              <button type="button" className="market-cart-page-order" onClick={orderNow}>ORDER NOW</button>
              <button type="button" className="market-cart-page-contact" onClick={contactToBuy}>CONTACT TO BUY</button>
              <button type="button" className="market-cart-page-continue" onClick={() => router.push("/market")}>CONTINUE SHOPPING</button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
