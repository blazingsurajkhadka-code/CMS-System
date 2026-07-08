import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import Icon from "../components/icon.tsx";
import { services, processSteps, whyChooseUs, faqItems } from "../data/data";

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <>
      
      <section className="relative overflow-hidden bg-white pt-32 pb-24 text-gray-900">
        <div className="container-custom relative px-6">
          <div className="rounded-[2rem] border border-gray-300 bg-gradient-to-br from-white via-gray-50 to-white px-8 py-10 text-center shadow-[0_30px_80px_-25px_rgba(15,23,42,0.28)] ring-1 ring-gray-200 sm:px-12 sm:py-14">
            <span className="inline-block rounded-full border border-blue-500/20 bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white">
              Our Services
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Websites and tools for
              <span className="block text-gray-600">growing teams</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              From design and development to launch and support, we help
              businesses create digital products that work.
            </p>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <div className="rounded-[2rem] border border-gray-300 bg-gradient-to-br from-white via-gray-50 to-white p-8 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.28)] ring-1 ring-gray-200 lg:p-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-6">
          <SectionTitle
            eyebrow="Our Process"
            title="How We Bring Ideas to Life"
            description="A proven, transparent process that keeps every project on track from concept to launch."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div key={step.id} className="group relative">
                <div className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-400/10">
                  <span className="text-5xl font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-gray-900">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 hidden h-px w-8 bg-gray-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="The NexaCMS Advantage"
            description="We combine strategy, creativity, and technology to deliver results that matter to your business."
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
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions about how we work and what to expect."
          />

          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {faqItems.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg shadow-gray-900/5"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-bold text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-700 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tell us about your goals and let's create a plan to achieve
                them together.
              </p>
              <Link
                to="/contact"
                className="btn-primary mt-8 inline-flex shadow-none"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;