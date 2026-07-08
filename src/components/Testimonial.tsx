import { Star, Quote } from "lucide-react";
import type { Testimonial as TestimonialType } from "../data/data";

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
      <Quote className="absolute right-6 top-6 h-10 w-10 text-slate-600" />

      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, idx) => (
          <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="relative mt-5 leading-relaxed text-slate-300">
        "{testimonial.message}"
      </p>

      <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-white">{testimonial.name}</p>
          <p className="text-sm text-slate-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;