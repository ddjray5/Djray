const COURSE_ORIGIN = "https://goldendjcourse.vercel.app";

const clarityStyles = `
<style id="djray-course-clarity">
  [class~="bg-black/65"] { background-color: rgb(0 0 0 / 0.48) !important; }
  main img[class*="object-cover"] { filter: brightness(1.08) contrast(1.04); }
  [class~="z-[9999]"] {
    animation: djrayWelcomeExit 4.2s ease-in-out forwards;
  }
  @keyframes djrayWelcomeExit {
    0%, 78% { opacity: 1; visibility: visible; }
    100% { opacity: 0; visibility: hidden; pointer-events: none; }
  }
  @media (max-width: 639px) {
    html,
    body,
    main {
      width: 100% !important;
      max-width: 100% !important;
      overflow-x: hidden !important;
      overscroll-behavior-x: none !important;
    }
    [class~="z-[9999]"] { padding: 1.25rem; text-align: center; }
    [class~="z-[9999]"] img { max-width: 78vw !important; }
    [class~="z-[9999]"] p {
      max-width: 18rem !important;
      margin: 1.5rem auto 0 !important;
      font-size: clamp(1.35rem, 6vw, 2rem) !important;
      line-height: 1.25 !important;
      text-align: center !important;
    }
    main > section:nth-of-type(5) > div:nth-child(2) > p {
      white-space: nowrap !important;
      font-size: clamp(0.92rem, 4.2vw, 1.1rem) !important;
      letter-spacing: 0.1em !important;
    }
    main > section:nth-of-type(3) > div:nth-child(2) > p {
      white-space: nowrap !important;
      font-size: clamp(1.22rem, 5.6vw, 1.4rem) !important;
      letter-spacing: 0.1em !important;
    }
    main > section:nth-of-type(3) > div:nth-child(2) > h2,
    main > section:nth-of-type(5) > div:nth-child(2) > h2 {
      max-width: 20rem !important;
      margin-left: auto !important;
      margin-right: auto !important;
      font-size: clamp(1.65rem, 7.5vw, 2.1rem) !important;
      line-height: 1.16 !important;
      white-space: normal !important;
      overflow-wrap: normal !important;
    }
    main > section:nth-of-type(6) > div:nth-child(2) > div[class*="mt-10"][class*="grid"] > div:last-child {
      flex-direction: column !important;
      gap: 0.5rem !important;
      justify-content: center !important;
    }
    main > section:nth-of-type(6) > div:nth-child(2) > div[class*="mt-10"][class*="grid"] > div:last-child > h3 {
      order: 2 !important;
      margin-top: 0 !important;
    }
    main > section:nth-of-type(6) > div:nth-child(2) > div[class*="mt-10"][class*="grid"] > div:last-child > p {
      order: 1 !important;
      margin-top: 0 !important;
      text-align: center !important;
    }
  }

  .djray-booking-overlay {
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgb(0 0 0 / 0.82);
    backdrop-filter: blur(8px);
  }
  .djray-booking-modal {
    position: relative;
    width: min(100%, 32rem);
    max-height: calc(100dvh - 2rem);
    overflow-y: auto;
    padding: 2rem;
    border: 1px solid rgb(212 175 55 / 0.7);
    border-radius: 1.5rem;
    background: #111;
    color: #fff;
    box-shadow: 0 20px 80px rgb(0 0 0 / 0.7);
  }
  .djray-booking-close {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    border: 0;
    background: transparent;
    color: #d4af37;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
  }
  .djray-booking-modal h2 {
    margin: 0;
    color: #d4af37;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2rem, 7vw, 3rem);
    font-weight: 400;
    letter-spacing: 0.08em;
    text-align: center;
    text-transform: uppercase;
  }
  .djray-booking-form {
    display: grid;
    gap: 1.15rem;
    margin-top: 1.75rem;
  }
  .djray-booking-field {
    display: grid;
    gap: 0.5rem;
  }
  .djray-booking-field label {
    color: #f0c94a;
    font-size: 1.05rem;
    font-weight: 600;
  }
  .djray-booking-field input,
  .djray-booking-field select {
    width: 100%;
    box-sizing: border-box;
    padding: 0.8rem 1rem;
    border: 1px solid rgb(255 255 255 / 0.18);
    border-radius: 1rem;
    outline: none;
    background: #050505;
    color: #fff;
    font: inherit;
  }
  .djray-booking-field input:focus,
  .djray-booking-field select:focus {
    border-color: #d4af37;
  }
  .djray-booking-submit {
    width: 100%;
    margin-top: 0.35rem;
    padding: 0.9rem 1.25rem;
    border: 1px solid #f0c94a;
    border-radius: 1rem;
    background: #a97808;
    color: #050505;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    cursor: pointer;
  }
  .djray-booking-submit:disabled {
    cursor: wait;
    opacity: 0.65;
  }
  .djray-booking-error {
    margin: 0;
    color: #ff8888;
    font-size: 0.95rem;
    text-align: center;
  }
  .djray-booking-success {
    display: grid;
    justify-items: center;
    gap: 1.5rem;
    padding: 2.25rem 0.5rem 1rem;
    color: #00e479;
    text-align: center;
  }
  @keyframes djrayBookingCheckReveal {
    from { clip-path: inset(0 100% 0 0); }
    to { clip-path: inset(0 0 0 0); }
  }
  .djray-booking-success p {
    max-width: 28rem;
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.35rem, 4vw, 1.75rem);
    line-height: 1.55;
  }
  .djray-booking-check {
    display: grid;
    width: 5rem;
    height: 5rem;
    place-items: center;
    border: 2px solid #00e479;
    border-radius: 999px;
    font-size: 2.5rem;
    font-weight: 700;
  }
  .djray-booking-check-mark {
    display: inline-block;
    clip-path: inset(0 100% 0 0);
    animation: djrayBookingCheckReveal 0.9s ease-out 0.1s forwards;
  }
  @media (max-width: 639px) {
    .djray-booking-modal { padding: 1.5rem; }
    .djray-booking-modal h2 { padding: 0 1.5rem; font-size: 1.9rem; }
  }
</style>`;

const interactionScript = `
<script id="djray-course-interactions">
(() => {
  const bookingEndpoint = "https://script.google.com/macros/s/AKfycbzzuXsYvAJYpXVv9WpDGr5FddFslvyUaZVGS7b6hulQTeo3QdoWap3vaHCve2bBfyua/exec";

  const closeBookingModal = (overlay, previousOverflow) => {
    overlay.remove();
    document.documentElement.style.overflow = previousOverflow;
  };

  const openBookingModal = () => {
    if (document.querySelector(".djray-booking-overlay")) return;

    const previousOverflow = document.documentElement.style.overflow;
    const overlay = document.createElement("div");
    overlay.className = "djray-booking-overlay";
    overlay.innerHTML = [
      '<div class="djray-booking-modal" role="dialog" aria-modal="true" aria-labelledby="djray-booking-title">',
      '<button type="button" class="djray-booking-close" aria-label="Close booking form">×</button>',
      '<h2 id="djray-booking-title">Book Your DJ Course</h2>',
      '<form class="djray-booking-form">',
      '<div class="djray-booking-field"><label for="djray-booking-name">Name</label><input id="djray-booking-name" name="name" type="text" required></div>',
      '<div class="djray-booking-field"><label for="djray-booking-level">Level</label><select id="djray-booking-level" name="level"><option value="Beginner">Beginner</option><option value="Intermediate">Intermediate</option></select></div>',
      '<div class="djray-booking-field"><label for="djray-booking-mobile">Mobile Number</label><input id="djray-booking-mobile" name="mobile" type="tel" placeholder="+971 5X XXX XXXX" required></div>',
      '<button type="submit" class="djray-booking-submit">SEND</button>',
      '<p class="djray-booking-error" hidden>Unable to send your request. Please try again.</p>',
      '</form>',
      '<div class="djray-booking-success" hidden><p>Thank you! Your booking request has been sent successfully. We’ll contact you shortly to confirm the details of your DJ course.</p><div class="djray-booking-check" aria-hidden="true"><span class="djray-booking-check-mark">✓</span></div></div>',
      '</div>'
    ].join("");

    document.body.appendChild(overlay);
    document.documentElement.style.overflow = "hidden";

    const modal = overlay.querySelector(".djray-booking-modal");
    const form = overlay.querySelector(".djray-booking-form");
    const closeButton = overlay.querySelector(".djray-booking-close");
    const success = overlay.querySelector(".djray-booking-success");
    const error = overlay.querySelector(".djray-booking-error");
    const submit = overlay.querySelector(".djray-booking-submit");
    const title = overlay.querySelector("#djray-booking-title");

    closeButton.addEventListener("click", () => closeBookingModal(overlay, previousOverflow));
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeBookingModal(overlay, previousOverflow);
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      submit.disabled = true;
      submit.textContent = "SENDING...";
      error.hidden = true;

      const data = new FormData(form);
      try {
        await fetch(bookingEndpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            name: data.get("name"),
            level: data.get("level"),
            mobile: data.get("mobile")
          })
        });
        form.hidden = true;
        title.hidden = true;
        success.hidden = false;
      } catch (submissionError) {
        console.error("BOOKING SUBMISSION ERROR:", submissionError);
        submit.disabled = false;
        submit.textContent = "SEND";
        error.hidden = false;
      }
    });

    modal.querySelector("input")?.focus();
  };

  document.addEventListener("click", (event) => {
    const button = event.target.closest?.(".contact-course-button");
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    openBookingModal();
  }, true);
})();
</script>`;

function rewriteCourseUrls(html: string) {
  // Keep the course's existing Next.js markup and assets working while the
  // page is served through the main DJ RAY domain.
  return html
    .replace(
      /(\s(?:src|href|action|poster)=['"])\/(?!\/)/gi,
      `$1${COURSE_ORIGIN}/`,
    )
    // Next.js also keeps the original asset paths inside its inline RSC
    // payload. Rewrite those strings too so hydration can attach all of the
    // course's client-side button handlers on the proxied page.
    .replace(/(["':])\/(?!\/)/g, `$1${COURSE_ORIGIN}/`);
}

export async function GET() {
  const upstream = await fetch(`${COURSE_ORIGIN}/`, { cache: "no-store" });

  if (!upstream.ok) {
    return new Response("The DJ course page is temporarily unavailable.", {
      status: 502,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  let html = rewriteCourseUrls(await upstream.text());
    const mobileViewport = '<meta name="viewport" content="width=device-width, initial-scale=1" />';
  html = html.replace(/<\/head>/i, `${mobileViewport}${clarityStyles}${interactionScript}</head>`);

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
