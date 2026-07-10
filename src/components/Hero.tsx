import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, Star, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-800 text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-custom relative px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
              Trusted by 120+ growing brands
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              We Build Websites
              <span className="block text-gray-300">That Help Your Business</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              NexaCMS is a small web studio that builds fast, easy-to-manage
              websites and digital tools for teams that want a stronger online presence.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                <PlayCircle className="h-4 w-4" />
                Our Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              {["Free consultation", "Clear pricing", "Fast replies"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="relative rounded-3xl bg-gray-900 p-2 shadow-2xl shadow-gray-900/20">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Team collaborating on a digital product"
                className="h-full w-full rounded-[1.4rem] object-cover"
              />
            </div>

            <div className="absolute -left-6 -top-6 hidden rounded-2xl bg-gray-700 p-4 shadow-xl sm:block animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-600 text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Project Delivered
                  </p>
                  <p className="text-xs text-gray-300">Ahead of schedule</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white p-4 shadow-xl sm:block animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="h-8 w-8 rounded-full border-2 border-white bg-gray-900"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">4.9/5.0</p>
                  <p className="text-xs text-gray-500">Client satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;