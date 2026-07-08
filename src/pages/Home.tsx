import { Link } from "react-router-dom";
import { ArrowRight, Mail, Send } from "lucide-react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import BlogCard from "../components/BlogCard";
import Testimonial from "../components/Testimonial";
import Icon from "../components/icon.tsx";
import {
  services,
  whyChooseUs,
  blogPosts,
  testimonials,
  trustedCompanies,
} from "../data/data";

const Home = () => {
  return (
    <>
      <Hero />

      
      <section className="border-y border-gray-100 bg-white py-12">
        <div className="container-custom px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
            Used by teams across a range of industries
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {trustedCompanies.map((company) => (
              <div
                key={company}
                className="flex items-center justify-center text-xl font-extrabold text-gray-300 transition-colors duration-300 hover:text-gray-500"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-6">
          <SectionTitle
            eyebrow="Our Services"
            title="Websites and tools built for growing teams"
            description="From landing pages to custom sites, we help businesses launch polished, practical online experiences."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Why clients choose us"
            description="We combine practical planning, thoughtful design, and solid development to solve real business problems."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((feature) => (
              <div
                key={feature.id}
                className="group rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center shadow-lg shadow-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-gray-400/10"
              >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon name={feature.icon} className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-6">
          <SectionTitle
            eyebrow="Our Blog"
            title="Recent stories and practical tips"
            description="Read short updates on web design, product launches, and online business tools."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/blog" className="btn-secondary">
              Explore All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <SectionTitle
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="We're proud to have earned the trust of businesses across every industry."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-8 py-16 text-center shadow-2xl shadow-gray-900/30 sm:px-16">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to improve your website?
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                Get occasional updates on new projects and useful web tips, or
                reach out to talk about your next site.
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

export default Home;