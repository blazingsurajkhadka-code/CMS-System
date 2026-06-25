import type { Service } from "../types/service";

type ServiceCardProps = {
  service: Service;
};

type ServiceContentProps = {
  title: string;
  description: string;
  highlights: string[];
};

function ServiceContent({ title, description, highlights }: ServiceContentProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, highlights, imageLeft } = service;

  return (
    <div>

      {imageLeft ? (
        
        <div>
          <div>
            <img src="https://placehold.co/400x250" alt={title} />
          </div>
          <div>
            <ServiceContent
              title={title}
              description={description}
              highlights={highlights}
            />
          </div>
        </div>
      ) : (
        
        <div>
          <div>
            <ServiceContent
              title={title}
              description={description}
              highlights={highlights}
            />
          </div>
          <div>
            <img src="https://placehold.co/400x250" alt={title} />
          </div>
        </div>
      )}

      <hr />
    </div>
  );
}

export default ServiceCard;