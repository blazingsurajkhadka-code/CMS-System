import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/data";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Post Not Found</h1>
          <p className="mt-4 text-gray-600">
            We couldn't find the article you're looking for.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-900/5">
            <img
              src={post.image}
              alt={post.title}
              className="h-96 w-full object-cover"
            />
            <div className="p-10">
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                {post.category}
              </span>
              <h1 className="mt-6 text-4xl font-extrabold text-gray-900">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
                <span>By {post.author}</span>
              </div>

              <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-700">
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-start gap-4 border-t border-gray-200 pt-6">
                <Link
                  to="/blog"
                  className="inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
