import { useEffect } from "react";

/**
 * Reveals every [data-reveal] element once it enters the viewport.
 * Elements already revealed stay revealed (copy model switching never resets them).
 */
export function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (prefersReduced) {
      nodes.forEach((n) => n.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((n) => {
      if (n.getAttribute("data-revealed") !== "true") observer.observe(n);
    });

    return () => observer.disconnect();
  }, []);
}

/** Writes scroll progress (0 to 1) into --scroll-progress on <html>. */
export function useScrollProgress() {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      doc.style.setProperty("--scroll-progress", String(value));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
