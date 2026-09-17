import { useState } from "react";
import TechCard from "./TechCard";
import StackCard from "./StackCard";
import { technologies } from "../data/Technologies";
import Toast, { type ToastMessage } from "./Toast";

const TechnologiesSection = () => {
  const [selectedIds, setSelectedIds] = useState<Array<string | number>>([]);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (text: string, type: ToastMessage["type"] = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, text, type }]);
  };

  const dismissToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleToggle = (id: string | number) => {
    const tech = technologies.find((item) => item.id === id);
    const isCurrentlySelected = selectedIds.includes(id);

    setSelectedIds((prev) =>
      isCurrentlySelected ? prev.filter((item) => item !== id) : [...prev, id]
    );

    if (tech) {
      showToast(
        isCurrentlySelected
          ? `${tech.name} removed from stack`
          : `${tech.name} added to stack`,
        isCurrentlySelected ? "error" : "success"
      );
    }
  };

  const handleRemove = (id: string | number) => {
    const tech = technologies.find((item) => item.id === id);
    setSelectedIds((prev) => prev.filter((item) => item !== id));

    if (tech) {
      showToast(`${tech.name} removed from stack`, "error");
    }
  };

  const handleRemoveAll = () => {
    setSelectedIds([]);
    showToast("All technologies removed", "error");
  };

  const stack = technologies.filter((tech) => selectedIds.includes(tech.id));

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

          {/* Left: Technology Cards grid */}
          <div className="col-span-6 sm:col-span-8 lg:col-span-9">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechCard
                  key={technology.id}
                  id={technology.id}
                  name={technology.name}
                  description={technology.description}
                  category={technology.category}
                  level={technology.level}
                  rating={technology.rating}
                  badge={technology.badge}
                  badgeClassName={technology.badgeClassName}
                  iconClassName={technology.iconClassName}
                  icon={technology.icon}
                  isSelected={selectedIds.includes(technology.id)}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </div>

          {/* Right: StackCard — sticky beneath navbar */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-3">
            <div className="sticky top-14 z-10">
              <StackCard
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>

        </div>

      </div>

      {/* Toast notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

    </section>
  );
};

export default TechnologiesSection;