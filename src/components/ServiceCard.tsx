import { ArrowUpRight, Check } from "lucide-react";
import Icon from "./icon.tsx";
import type { Service } from "../data/data";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-400/10">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon name={service.icon} className="h-7 w-7 text-white" />
      </div>

      <h3 className="relative mt-6 text-xl font-bold text-gray-900">
        {service.title}
      </h3>
      <p className="relative mt-3 text-gray-600 leading-relaxed">
        {service.description}
      </p>

      <ul className="relative mt-5 space-y-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <Check className="h-4 w-4 shrink-0 text-blue-600" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex items-center gap-1 text-sm font-bold text-gray-900 transition-all duration-300 group-hover:gap-2">
        Learn More
        <ArrowUpRight className="h-4 w-4 text-blue-600" />
      </div>
    </div>
  );
};

export default ServiceCard;