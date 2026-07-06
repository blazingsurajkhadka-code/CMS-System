import {
  Microscope,
  Eye,
  Droplet,
  Syringe,
  UserRound,
  Building2,
  Clock,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  BedDouble,
  Activity,
  Truck,
} from "lucide-react";

type ServiceHighlight = {
  icon: keyof typeof ICON_MAP;
  label: string;
  detail: string;
};

type Service = {
  id: number;
  title: string;
  description: string;
  highlights: ServiceHighlight[];
  imageLeft: boolean;
  imageUrl: string;
};

const ICON_MAP = {
  microscope: Microscope,
  eye: Eye,
  droplet: Droplet,
  syringe: Syringe,
  user: UserRound,
  building: Building2,
  clock: Clock,
  heart: HeartPulse,
  shield: ShieldCheck,
  stethoscope: Stethoscope,
  bed: BedDouble,
  activity: Activity,
  truck: Truck,
} as const;

const services: Service[] = [
  {
    id: 1,
    title: "Outpatient & Inpatient Care",
    description:
      "Our outpatient and inpatient teams work together to deliver coordinated care from the first consultation to bedside recovery. We provide prompt check-ins, expert initial assessment, fast referral to specialists, and comfortable inpatient stays for all acute and chronic conditionsOur multidisciplinary healthcare professionals ensure that every patient receives personalized treatment plans tailored to their specific needs. With modern diagnostic facilities, advanced medical technology, and compassionate nursing care, we strive to provide accurate diagnoses and effective treatments in a timely manner.",
    highlights: [
      { icon: "stethoscope", label: "Consultation & Diagnosis", detail: "Expert doctors available for all conditions" },
      { icon: "bed", label: "Hospitalization", detail: "Comfortable inpatient care with modern facilities" },
    ],
    imageLeft: true,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Diagnostic & Services",
    description:
      "Our diagnostic center delivers fast, accurate results with advanced imaging and lab services. From X-rays and PET scans to blood work and ultrasound, we use precision technology to find the cause quickly and support the right treatment plan.Our experienced radiologists, pathologists, and laboratory professionals work closely with physicians to ensure reliable results and informed medical decisions. Equipped with modern diagnostic equipment and quality assurance standards, we provide comprehensive testing services with a strong focus on accuracy, efficiency, and patient safety.",
    highlights: [
      { icon: "microscope", label: "Comprehensive Diagnostics", detail: "Blood tests, X-ray, MRI, ECG, and more" },
      { icon: "eye", label: "Advanced Technology", detail: "Latest imaging and diagnostic machines" },
    ],
    imageLeft: false,
    imageUrl: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Pharmacy",
    description:
      "Our pharmacy team fills prescriptions quickly and safely while offering expert medicine guidance. Patients can count on a full range of prescriptions, OTC supplies, and support for managed care programs in a convenient, 24/7 setting.Our licensed pharmacists work closely with physicians and healthcare providers to ensure the safe and effective use of medications, helping to minimize risks and improve treatment outcomes. We offer medication counseling, dosage guidance, drug interaction checks, and assistance with chronic disease management to help patients better understand and manage their treatment plans.",
    highlights: [
      { icon: "syringe", label: "24/7 Availability", detail: "Medicines available at all hours" },
      { icon: "user", label: "Variety", detail: "Wide range of over-the-counter and prescription drugs" },
    ],
    imageLeft: true,
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Emergency & Trauma Care",
    description:
      "Our emergency and trauma department is ready 24/7 for serious injuries and sudden illness. We combine rapid triage, advanced emergency protocols, and critical care stabilization so every patient receives immediate, lifesaving treatment.Our highly trained emergency physicians, trauma specialists, nurses, and support staff work together to deliver comprehensive care for a wide range of conditions, including accidents, cardiac emergencies, strokes, respiratory distress, and other critical situations. Equipped with modern emergency facilities and advanced medical technology, we are prepared to handle complex and time-sensitive cases efficiently and effectively.",
    highlights: [
      { icon: "building", label: "24/7 Emergency Service", detail: "Round-the-clock availability" },
      { icon: "activity", label: "Trauma Management", detail: "Rapid response and stabilization" },
    ],
    imageLeft: false,
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Ambulance Services",
    description:
      "Our ambulance fleet delivers fast, safe transport during medical emergencies and urgent care transfers. Each vehicle carries life support equipment and trained paramedics to keep patients stable while moving them quickly to the right treatment facility.Available 24/7, our ambulance services are designed to provide rapid response and immediate medical assistance when every minute matters. Our teams are trained to manage a wide range of emergency situations, including trauma cases, cardiac emergencies, respiratory distress, and critical care transfers between healthcare facilities.",
    highlights: [
      { icon: "building", label: "Emergency Support", detail: "24/7 ambulance services" },
      { icon: "clock", label: "Quick Response", detail: "Rapid transport to hospitals and clinics" },
    ],
    imageLeft: true,
    imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Vaccination & Immunization",
    description:
      "Our vaccination services help protect families and communities with safe, up-to-date immunizations. We offer routine childhood vaccines, seasonal flu shots, and travel immunizations, all administered by caring nurses in a clean clinic setting.Our team follows the latest national and international immunization guidelines to ensure every patient receives the appropriate vaccines at the right time. We are committed to making the vaccination process simple, convenient, and reassuring by providing clear information, personalized recommendations, and professional support throughout each visit.",
    highlights: [
      { icon: "heart", label: "Routine Vaccines", detail: "For infants, children, and adults" },
      { icon: "shield", label: "Travel Vaccines", detail: "Vaccinations for international travel" },
    ],
    imageLeft: false,
    imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80",
  },
];

function ServiceContent({ title, description, highlights }: Omit<Service, "id" | "imageLeft" | "imageUrl">) {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600">{description}</p>

      <div className="mt-7 space-y-4">
        {highlights.map((item, i) => {
          const Icon = ICON_MAP[item.icon];
          return (
            <div key={i} className="flex items-start gap-3">
              <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" strokeWidth={2} />
              <p className="text-base leading-7 text-slate-700">
                <span className="font-semibold text-blue-700">{item.label}:</span>{" "}
                <span className="text-slate-600">{item.detail}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { title, description, highlights, imageUrl, imageLeft } = service;

  return (
    <div
      className={`mx-auto w-[88%] max-w-[1980px] flex flex-col gap-10 items-start ${
        imageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } md:gap-12 xl:gap-16`}
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="w-full md:w-1/2 relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-slate-200/40">
        <img
          src={imageUrl}
          alt={title}
          className="h-[340px] w-full object-cover sm:h-[380px]"
        />
        <div className="absolute inset-0 bg-[#0d4b8e]/30 pointer-events-none" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <ServiceContent title={title} description={description} highlights={highlights} />
      </div>
    </div>
  );
}

function ServicesPage() {

  return (
    <div className="font-sans bg-sky-50 text-slate-900">
      {/* Hero */}
      <div
        className="relative overflow-hidden bg-[#0d4b8e] text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13, 75, 142, 0.88), rgba(13, 75, 142, 0.88)), url('https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative z-10 mx-auto flex w-[88%] min-h-[18rem] max-w-[1760px] flex-col items-center justify-center px-6 py-16 text-center sm:px-8 lg:px-16"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">
            Home / Services
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Services
          </h1>
          <p className="mx-auto mt-4 max-w-[860px] text-base leading-8 text-slate-200 sm:text-lg">
            Explore our full range of services designed to deliver compassionate care, accurate diagnosis, and fast emergency support whenever you need it.
          </p>
        </div>
      </div>

      <div className="bg-sky-50 h-12" />

      {/* Services list */}
      <section className="bg-sky-50 pt-20 pb-20 px-6 sm:px-8 lg:px-10">
        <div className="mx-auto w-[88%] max-w-[1980px]" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="space-y-24">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;