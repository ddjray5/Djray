const COURSE_ORIGIN = "https://goldendjcourse.vercel.app";

const clarityStyles = `
<style id="djray-course-clarity">
  [class~="bg-black/65"] { background-color: rgb(0 0 0 / 0.48) !important; }
  main img[class*="object-cover"] { filter: brightness(1.08) contrast(1.04); }
  [class~="z-[9999]"] { display: none !important; }
</style>`;

function rewriteCourseUrls(html: string) {
  // Keep the course's existing Next.js markup and assets working while the
  // page is served through the main DJ RAY domain.
  return html.replace(
    /(\s(?:src|href|action|poster)=['"])\/(?!\/)/gi,
    `$1${COURSE_ORIGIN}/`,
  );
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
  html = html.replace(/<\/head>/i, `${clarityStyles}</head>`);

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
