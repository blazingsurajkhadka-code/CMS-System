import ServiceCard from "../components/ServiceCard";
import type { Service } from "../types/service";

const services: Service[] = [
  {
    id: 1,
    title: "Outpatient & Impatient Care",
    description:
      "Our Hospital is known as Makalu Everest Hospital where we provide complete Out Patient and In Patient Care for various ailments. From our team of doctors and specialists, we make sure that no patient is neglected and another treated properly. From consultations to full diagnostic evaluation, right down to acute and chronic treatment, we are personal, dedicated and treating you—you are not just a number!",
    highlights: [
      "Consultation & Diagnosis: Expert doctors available for all conditions",
      "Hospitalization: Comfortable inpatient care with modern facilities",
    ],
    imageLeft: true,
  },
  {
    id: 2,
    title: "Diagnostic & Services",
    description:
      "We offer Diagnostic Services aimed at delivering accurate, prompt and complete diagnosis to patients. Accurate diagnosis is important in the successful treatment plan, so we recognize this. We provide state-of-the-art diagnostic equipment, such as blood screens, X-rays, MRIs, CT scans, and others.",
    highlights: [
      "Comprehensive Diagnostics: Blood tests, X-ray, MRI, ECG, and more",
      "Advanced Technology: Latest imaging and diagnostic machines",
    ],
    imageLeft: false,
  },
  {
    id: 3,
    title: "Pharmacy",
    description:
      "Patients are able to access the medicines they need at any time from our Pharmacy, with a convenient service that ensures that it is reliable and efficient. With a 24/7 operation, our pharmacy is equipped with a wide range of over-the-counter medications, prescription drugs, and specialized medicines.",
    highlights: [
      "24/7 Availability: Medicines available at all hours",
      "Variety: Wide range of over-the-counter and prescription drugs",
    ],
    imageLeft: false,
  },
  {
    id: 4,
    title: "Emergency & Trauma Care",
    description:
      "Our Emergency and Trauma Care unit is fully equipped to handle critical and life-threatening situations around the clock. Our trained emergency response team ensures rapid patient stabilization and immediate treatment for accident and trauma cases.",
    highlights: [
      "24/7 Emergency Service: Round-the-clock availability",
      "Trauma Management: Rapid response and stabilization",
    ],
    imageLeft: false,
  },
  {
    id: 5,
    title: "Ambulance Services",
    description:
      "We provide fast and fully equipped ambulance services for emergency patient transport. Our ambulances are staffed with trained personnel and carry essential medical equipment to provide trauma support during transit.",
    highlights: [
      "Quick Response: Fast dispatch for emergencies",
      "Fully Equipped: Medical support available during transport",
    ],
    imageLeft: true,
  },
  {
    id: 6,
    title: "Vaccination & Immunization",
    description:
      "We offer a complete range of vaccination and immunization services for children and adults. Our program includes routine vaccinations, travel vaccines, and disease prevention programs to keep our community healthy.",
    highlights: [
      "Routine Vaccinations: Available for all age groups",
      "Travel Vaccines: Immunization for international travel",
    ],
    imageLeft: false,
  },
];

function ServicesPage() {
  return (
    <div>
      <div>
        <h1>Services</h1>
        <p>Home &gt; Services</p>
      </div>
      <div>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
