import { useSpotlight } from "../hooks/useSpotlight";

// A card that reads and behaves like a link (pointer cursor over the whole
// area, title underlines only on hover) but has no real destination in this
// concept, so the navigation is a no-op rather than a jump to "#".
export default function LinkCard({ className = "", children, ...rest }) {
  const onPointerMove = useSpotlight();

  return (
    <a
      className={`card card-link ${className}`.trim()}
      href="#"
      onClick={(event) => event.preventDefault()}
      onPointerMove={onPointerMove}
      {...rest}
    >
      {children}
    </a>
  );
}
