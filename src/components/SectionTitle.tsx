interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span
          className={`inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${
            light
              ? "bg-blue-600 text-white"
              : "bg-blue-50 text-blue-700 border border-blue-100"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;