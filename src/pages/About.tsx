import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import Icon from "../components/icon.tsx";
import { coreValues, stats, teamMembers } from "../data/data";

const About = () => {
  return (
    <>
      
      <section className="relative overflow-hidden bg-white pt-32 pb-24 text-gray-900">
        <div className="container-custom relative px-6">
          <div className="rounded-[2rem] border border-gray-300 bg-white px-8 py-10 text-center shadow-[0_35px_90px_-25px_rgba(15,23,42,0.3)] ring-2 ring-blue-100/70 sm:px-12 sm:py-14">
            <span className="inline-block rounded-full border border-blue-500/20 bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white">
              About NexaCMS
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              We make websites that are useful
              <span className="block text-gray-600">for real businesses</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Since day one, we've helped businesses build websites that are
              easy to manage, look professional, and support real growth.
            </p>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white text-gray-900">
        <div className="container-custom px-6">
          <div className="rounded-[2rem] border border-gray-300 bg-white p-8 shadow-[0_35px_90px_-25px_rgba(15,23,42,0.3)] ring-2 ring-blue-100/70 lg:p-10">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl shadow-gray-900/10">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Our team working together"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-6 shadow-xl sm:block">
                  <p className="text-3xl font-extrabold text-gray-900">9+</p>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                </div>
              </div>

              <div>
                <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
                  Who We Are
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  A Passionate Team Driving Digital Transformation
                </h2>
                <p className="mt-5 leading-relaxed text-gray-600">
                  NexaCMS was founded with a simple belief: every business should
                  have a website that fits its goals. What started as a small
                  team of designers and developers has grown into a tight-knit
                  studio that helps brands across industries.
                </p>
                <p className="mt-4 leading-relaxed text-gray-600">
                  Today, we combine practical planning, clean design, and
                  reliable engineering to help our clients launch websites that
                  work long term.
                </p>
                <Link to="/contact" className="btn-primary mt-8">
                  Work With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group rounded-3xl border border-gray-100 bg-white p-10 shadow-xl shadow-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-400/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/25 transition-transform duration-300 group-hover:scale-110">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                To empower businesses with digital solutions that are not
                only beautiful but genuinely effective — driving measurable
                growth through thoughtful design and reliable technology.
              </p>
            </div>

            <div className="group rounded-3xl border border-gray-100 bg-white p-10 shadow-xl shadow-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-400/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/25 transition-transform duration-300 group-hover:scale-110">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                To be the dependable web partner for growing businesses,
                known for clear communication and consistently solid results.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-6">
          <SectionTitle
            eyebrow="Core Values"
            title="What Guides Everything We Do"
            description="These principles shape every decision, every project, and every relationship we build."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="group rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-lg shadow-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-50 hover:shadow-2xl hover:shadow-gray-400/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon name={value.icon} className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section-padding relative overflow-hidden bg-white">
        <div className="container-custom relative px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <p className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-6">
          <SectionTitle
            eyebrow="Our Team"
            title="Meet the People Behind NexaCMS"
            description="A diverse team of strategists, designers, and engineers united by a passion for great work."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-white">
        <div className="container-custom px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-8 py-16 text-center shadow-2xl sm:px-16">
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Let's Build Something Great Together
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Have a project in mind? We'd love to hear about it and show
                you how we can help.
              </p>
              <Link
                to="/contact"
                className="btn-primary mt-8 inline-flex shadow-none"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;