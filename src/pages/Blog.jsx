import { useMemo, useState } from "react";
import BlogCard from "../components/BlogCard";
import GoToTop from "../components/GoToTop";
import { POSTS, TAGS } from "../data/posts";
import "./Blog.css";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((post) => {
      const matchesTag = activeTag === "all" || post.tag === activeTag;
      const matchesQuery = !q || `${post.title} ${post.excerpt}`.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [query, activeTag]);

  return (
    <div className="page container">
      <section aria-labelledby="blog-heading">
        <div className="section-head">
          <p className="eyebrow">Blog</p>
          <h1 id="blog-heading">Notes on shipping email</h1>
          <p>Rendering quirks, deliverability numbers, and the odd changelog, written by the team that builds Inkline.</p>
        </div>

        <div className="blog-controls">
          <div className="filter-chips" role="group" aria-label="Filter by topic">
            {TAGS.map((tag) => (
              <button
                key={tag.id}
                type="button"
                className="chip-filter"
                aria-pressed={activeTag === tag.id}
                onClick={() => setActiveTag(tag.id)}
              >
                {tag.label}
              </button>
            ))}
          </div>
          <div className="search-field">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search posts"
              aria-label="Search posts"
            />
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="blog-grid">
            {visible.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="blog-empty">
            No posts match {query ? `"${query}"` : "this filter"}. Try a different search or topic.
          </p>
        )}
      </section>
      <GoToTop />
    </div>
  );
}
