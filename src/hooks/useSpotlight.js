import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useSpotlight() {
  const reducedMotion = usePrefersReducedMotion();

  return function onPointerMove(event) {
    if (reducedMotion) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };
}
