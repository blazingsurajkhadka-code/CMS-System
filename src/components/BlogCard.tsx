import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { BlogPost } from "../data/data";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-400/10">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-700 backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-gray-900">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
          <span className="text-sm font-semibold text-gray-700">
            By {post.author}
          </span>
          <span className="flex items-center gap-1 text-sm font-bold text-gray-900 transition-all duration-300 group-hover:gap-2">
            Read More
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      </Link>
    </article>
  );
};

export default BlogCard;