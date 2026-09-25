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
      font-size: clamp(0.92rem, 4.2vw, 1.1rem) !important;
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
</style>`;

const interactionScript = `
<script id="djray-course-interactions">
(() => {
  const bookingUrl = "https://wa.me/971554057288?text=Hello%20DJ%20RAY%2C%20I%20would%20like%20to%20book%20the%20DJ%20course.";

  document.addEventListener("click", (event) => {
    const button = event.target.closest?.(".contact-course-button");
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.href = bookingUrl;
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
  html = html.replace(/<\/head>/i, `${clarityStyles}${interactionScript}</head>`);

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
