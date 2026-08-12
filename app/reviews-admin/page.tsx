"use client";
import "../styles/reviews-admin.css";
import { useEffect, useState } from "react";
import { supabase } from "../components/utils/supabase";

type Review = {
  id: number;
  created_at: string;
  name: string;
  rating: number;
  message: string;
  approved: boolean;
};

export default function ReviewsAdmin() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // =====================================================
  // CHECK LOGIN
  // =====================================================

  useEffect(() => {
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // =====================================================
  // CHECK CURRENT USER
  // =====================================================

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    setLoggedIn(!!session);

    if (session) {
      fetchReviews();
    } else {
      setLoading(false);
    }
  };

  // =====================================================
  // LOGIN
  // =====================================================

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoginLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setErrorMessage("Invalid email or password.");
      setLoginLoading(false);
      return;
    }

    setLoggedIn(true);
    setLoginLoading(false);

    await fetchReviews();
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = async () => {
    await supabase.auth.signOut();

    setLoggedIn(false);
    setReviews([]);
  };

  // =====================================================
  // FETCH REVIEWS
  // =====================================================

  const fetchReviews = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading reviews:", error);
      setErrorMessage("Unable to load reviews.");
      setLoading(false);
      return;
    }

    setReviews(data || []);
    setLoading(false);
  };

  // =====================================================
  // APPROVE REVIEW
  // =====================================================

  const approveReview = async (id: number) => {
    const { error } = await supabase
      .from("reviews")
      .update({ approved: true })
      .eq("id", id);

    if (error) {
      console.error("Error approving review:", error);
      alert("Could not approve this review.");
      return;
    }

    setReviews((current) =>
      current.map((review) =>
        review.id === id
          ? { ...review, approved: true }
          : review
      )
    );
  };

  // =====================================================
  // HIDE REVIEW
  // =====================================================

  const hideReview = async (id: number) => {
    const { error } = await supabase
      .from("reviews")
      .update({ approved: false })
      .eq("id", id);

    if (error) {
      console.error("Error hiding review:", error);
      alert("Could not hide this review.");
      return;
    }

    setReviews((current) =>
      current.map((review) =>
        review.id === id
          ? { ...review, approved: false }
          : review
      )
    );
  };

  // =====================================================
  // DELETE REVIEW
  // =====================================================

  const deleteReview = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this review?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting review:", error);
      alert("Could not delete this review.");
      return;
    }

    setReviews((current) =>
      current.filter((review) => review.id !== id)
    );
  };

  // =====================================================
  // LOGIN SCREEN
  // =====================================================

  if (!loggedIn) {
    return (
      <main className="admin-page">
        <div className="admin-login-card">

          <div className="admin-logo">
            DJ <span>RAY</span>
          </div>

          <p className="admin-kicker">
            PRIVATE AREA
          </p>

          <h1>
            REVIEWS ADMIN
          </h1>

          <p className="admin-subtitle">
            Sign in to manage your reviews.
          </p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {errorMessage && (
              <p className="admin-error">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={loginLoading}
            >
              {loginLoading ? "SIGNING IN..." : "SIGN IN"}
            </button>

          </form>

        </div>
      </main>
    );
  }

  // =====================================================
  // ADMIN PANEL
  // =====================================================

  const pendingReviews = reviews.filter(
    (review) => !review.approved
  );

  const approvedReviews = reviews.filter(
    (review) => review.approved
  );

  return (
    <main className="admin-page">

      <div className="admin-container">

        {/* HEADER */}

        <header className="admin-header">

          <div>
            <p className="admin-kicker">
              DJ RAY
            </p>

            <h1>
              REVIEWS MANAGEMENT
            </h1>

            <p className="admin-subtitle">
              Manage customer testimonials.
            </p>
          </div>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            LOG OUT
          </button>

        </header>


        {/* PENDING */}

        <section className="admin-section">

          <div className="admin-section-title">

            <h2>
              PENDING REVIEWS
            </h2>

            <span>
              {pendingReviews.length}
            </span>

          </div>


          {loading ? (
            <p className="admin-empty">
              Loading reviews...
            </p>
          ) : pendingReviews.length === 0 ? (
            <p className="admin-empty">
              No pending reviews.
            </p>
          ) : (

            <div className="admin-reviews">

              {pendingReviews.map((item) => (

                <article
                  className="admin-review-card"
                  key={item.id}
                >

                  <div className="review-info">

                    <div className="review-top">

                      <h3>
                        {item.name}
                      </h3>

                      <div className="admin-stars">
                        {"★".repeat(item.rating)}
                        {"☆".repeat(5 - item.rating)}
                      </div>

                    </div>

                    <p className="admin-message">
                      “{item.message}”
                    </p>

                    <small>
                      {new Date(
                        item.created_at
                      ).toLocaleString()}
                    </small>

                  </div>


                  <div className="review-actions">

                    <button
                      className="approve-button"
                      onClick={() =>
                        approveReview(item.id)
                      }
                    >
                      ✓ APPROVE
                    </button>

                    <button
                      className="delete-button"
                      onClick={() =>
                        deleteReview(item.id)
                      }
                    >
                      DELETE
                    </button>

                  </div>

                </article>

              ))}

            </div>

          )}

        </section>


        {/* APPROVED */}

        <section className="admin-section">

          <div className="admin-section-title">

            <h2>
              APPROVED REVIEWS
            </h2>

            <span>
              {approvedReviews.length}
            </span>

          </div>


          {approvedReviews.length === 0 ? (

            <p className="admin-empty">
              No approved reviews.
            </p>

          ) : (

            <div className="admin-reviews">

              {approvedReviews.map((item) => (

                <article
                  className="admin-review-card approved-card"
                  key={item.id}
                >

                  <div className="review-info">

                    <div className="review-top">

                      <h3>
                        {item.name}
                      </h3>

                      <div className="admin-stars">
                        {"★".repeat(item.rating)}
                        {"☆".repeat(5 - item.rating)}
                      </div>

                    </div>

                    <p className="admin-message">
                      “{item.message}”
                    </p>

                    <small>
                      {new Date(
                        item.created_at
                      ).toLocaleString()}
                    </small>

                  </div>


                  <div className="review-actions">

                    <button
                      className="hide-button"
                      onClick={() =>
                        hideReview(item.id)
                      }
                    >
                      HIDE
                    </button>

                    <button
                      className="delete-button"
                      onClick={() =>
                        deleteReview(item.id)
                      }
                    >
                      DELETE
                    </button>

                  </div>

                </article>

              ))}

            </div>

          )}

        </section>

      </div>

    </main>
  );
}