import TechCard from "./TechCard";
import { technologies } from "../data/Technologies";
import StackCard from "./StackCard";

const TechnologiesSection = () => {
  return (
    <section
      id="technologies"
      className="bg-gray-50 px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12">
          
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-500 text-lg">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>


        {/* Two-column layout: cards grid (left) + StackCard (right) */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left: Technology Cards grid — 2/3 sm, 3/4 lg */}
          <div className="col-span-8 lg:col-span-9">

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

          {/* Right: StackCard — 1/3 sm, 1/4 lg */}
          <div className="col-span-4 lg:col-span-3">
              <div className="sticky top-14 z-10">
                <StackCard />
              </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologiesSection;