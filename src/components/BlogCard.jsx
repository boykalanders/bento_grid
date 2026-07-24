import { useSpotlight } from "../hooks/useSpotlight";

export default function BlogCard({ post }) {
  const onPointerMove = useSpotlight();

  return (
    <a
      className="card card-link blog-card"
      data-tag={post.tag}
      href="#"
      onClick={(event) => event.preventDefault()}
      onPointerMove={onPointerMove}
      tabIndex={0}
    >
      <div className="blog-thumb" data-tag={post.tag}>
        <span className="thumb-letter">{post.letter}</span>
      </div>
      <div className="blog-card-body">
        <div className="blog-meta-row">
          <span className="tag-pill">{post.tagLabel}</span>
          <span className="blog-date">
            {post.date} · {post.readTime}
          </span>
        </div>
        <h3 className="card-title blog-title">{post.title}</h3>
        <p className="card-body">{post.excerpt}</p>
      </div>
    </a>
  );
}
