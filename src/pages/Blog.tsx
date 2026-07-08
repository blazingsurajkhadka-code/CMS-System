import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Send, Calendar, Clock, ArrowRight, User } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import BlogCard from "../components/BlogCard";
import { blogPosts, blogCategories } from "../data/data";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const featuredPost = blogPosts[0];

  const filteredPosts = useMemo(() => {
    const rest = blogPosts.slice(1);
    if (activeCategory === "All") return rest;
    return rest.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      
      <section className="relative overflow-hidden bg-white pt-32 pb-24 text-gray-900">
        <div className="container-custom relative px-6">
          <div className="rounded-[2rem] border border-gray-300 bg-gradient-to-br from-white via-gray-50 to-white px-8 py-10 text-center shadow-[0_30px_80px_-25px_rgba(15,23,42,0.28)] ring-1 ring-gray-200 sm:px-12 sm:py-14">
            <span className="inline-block rounded-full border border-blue-700 bg-blue-700 px-4 py-1.5 text-sm font-semibold text-white">
              Our Blog
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Insights, Ideas &
              <span className="block text-gray-600">Industry Perspectives</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Practical articles on design, development, and marketing to help
              you grow your digital presence.
            </p>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <div className="group grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[2rem] border border-gray-300 bg-gradient-to-br from-white via-gray-50 to-white p-6 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.28)] ring-1 ring-gray-200 transition-all duration-300 hover:shadow-[0_35px_90px_-20px_rgba(15,23,42,0.32)] lg:grid-cols-2 lg:p-10">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                Featured · {featuredPost.category}
              </span>
              <h2 className="mt-4 text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>

              <Link
                to={`/blog/${featuredPost.slug}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-all duration-300 hover:gap-3"
              >
                Read Full Article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <SectionTitle
            eyebrow="Latest Articles"
            title="Fresh Perspectives, Every Week"
            description="Browse by category to find the topics most relevant to you."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-700 text-white shadow-lg shadow-blue-700/25"
                    : "bg-blue-50 text-blue-700 shadow-md shadow-blue-100/50 hover:-translate-y-0.5 hover:text-blue-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="mt-12 text-center text-gray-500">
              No articles found in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-8 py-16 text-center shadow-2xl shadow-gray-900/10 sm:px-16">
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Never Miss an Update
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Get our best articles delivered straight to your inbox, once
                a week.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border-0 py-4 pl-12 pr-4 text-sm font-medium text-gray-900 placeholder-blue-300 shadow-lg outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;