import TechCard from "./TechCard";
import { technologies } from "../data/Technologies";

const TechnologiesSection = () => {
  return (
    <section
      id="technologies"
      className="bg-gray-50 px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-600">
            Technologies
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Technologies We Use
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore the modern technologies and tools we use to build
            powerful, scalable, and reliable applications.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechCard
              key={technology.id}
              name={technology.name}
              description={technology.description}
              category={technology.category}
              level={technology.level}
              rating={technology.rating}
              badge={technology.badge}
              badgeClassName={technology.badgeClassName}
              iconClassName={technology.iconClassName}
              icon={technology.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnologiesSection;