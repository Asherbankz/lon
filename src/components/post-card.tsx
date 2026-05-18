import { useState } from "react";
import { MoreHorizontal, ThumbsUp, MessageCircle, Globe, VolumeX, Send } from "lucide-react";
import { VerifiedBadge } from "./verified-badge";
import type { Post } from "@/lib/mock-data";

export function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [expanded, setExpanded] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  const [commentCount, setCommentCount] = useState(post.comments);

  const media = post.image;

  const toggleLike = () => {
    setLiked((p) => {
      setLikes((l) => l + (p ? -1 : 1));
      return !p;
    });
  };

  const submitComment = () => {
    if (!comment.trim()) return;
    setCommentCount((c) => c + 1);
    setComment("");
    setShowComment(false);
  };

  return (
    <article className="px-4 py-5 border-b border-border">
      <div className="flex items-start gap-3">
        <img
          src={post.avatar}
          alt={post.author}
          className="h-10 w-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground">{post.author}</span>
            {post.verified && <VerifiedBadge />}
            <button
              type="button"
              className="ml-auto text-muted-foreground hover:text-foreground"
              aria-label="More options"
            >
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          {post.sponsored ? (
            <p className="text-xs text-muted-foreground">Sponsored • ad</p>
          ) : (
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              {post.date} <span>•</span> <Globe className="h-3 w-3" /> <span>•</span> {post.handle}
            </p>
          )}
        </div>
      </div>

      <div className="mt-3 flex gap-3">
        <div className="flex w-12 flex-col items-center gap-3 pt-1">
          {post.tags.map((t) => (
            <div key={t} className="flex flex-col items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] italic text-foreground/90">
                {t}
              </span>
            </div>
          ))}
        </div>
        <div className="flex-1 min-w-0 max-w-[88%]">
          {post.sponsored && (
            <p className="mb-2 text-center text-xs text-muted-foreground">
              {post.date} • {post.handle.replace("@", "@@")}
            </p>
          )}
          <p
            className={`text-[15px] leading-snug text-foreground ${
              expanded ? "" : "truncate"
            }`}
          >
            {post.text}
          </p>
          {post.text.length > 50 && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-0.5 text-[11px] text-muted-foreground hover:text-foreground"
            >
              {expanded ? "view less" : "view more"}
            </button>
          )}
          {media && (
            <div className="relative mt-3 overflow-hidden rounded-2xl bg-secondary aspect-[3/4]">
              <img src={media} alt="" className="h-full w-full object-cover" />
              {post.sponsored && (
                <div className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5">
                  <VolumeX className="h-4 w-4 text-white" />
                </div>
              )}
              <span className="absolute bottom-2 left-3 text-xs font-medium text-white/95 drop-shadow">
                {post.handle}
              </span>
              {post.sponsored && (
                <span className="absolute bottom-2 right-3 text-xs text-white/90 drop-shadow">
                  00:32
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 pl-[60px]">
        <button
          type="button"
          onClick={() => setShowComment((v) => !v)}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Add a comment
        </button>
        <button
          type="button"
          onClick={toggleLike}
          aria-pressed={liked}
          className={`ml-auto flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors ${
            liked ? "bg-primary/15 text-primary" : "bg-secondary text-foreground hover:bg-accent"
          }`}
        >
          <ThumbsUp className={`h-4 w-4 ${liked ? "fill-primary text-primary" : "text-primary"}`} />
          <span>{likes}</span>
        </button>
        <button
          type="button"
          onClick={() => setShowComment((v) => !v)}
          className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground hover:bg-accent"
        >
          <MessageCircle className="h-4 w-4 text-primary" />
          <span>{commentCount}</span>
        </button>
      </div>

      {showComment && (
        <div className="mt-3 flex items-center gap-2 pl-[60px]">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitComment()}
            placeholder="Write a comment…"
            className="flex-1 rounded-full bg-secondary px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={submitComment}
            className="rounded-full bg-primary p-2 text-primary-foreground disabled:opacity-50"
            disabled={!comment.trim()}
            aria-label="Send comment"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      )}
    </article>
  );
}