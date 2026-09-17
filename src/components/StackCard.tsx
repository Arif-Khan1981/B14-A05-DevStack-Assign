import type { ReactNode } from "react";

interface StackedTech {
  id: string | number;
  name: string;
  category: string;
  icon: ReactNode;
  iconClassName: string;
}

interface StackCardProps {
  stack: StackedTech[];
  onRemove: (id: string | number) => void;
  onRemoveAll: () => void;
}

const StackCard = ({ stack, onRemove, onRemoveAll }: StackCardProps) => {
  const isEmpty = stack.length === 0;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Heading */}
      <h3 className="text-xl font-bold text-gray-900">
        Your Stack
      </h3>

      {/* Subtext */}
      <p className="mt-1 text-sm text-gray-400">
        {isEmpty
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {isEmpty ? (
        /* Empty state box */
        <div className="mt-5 flex min-h-33 items-center justify-center rounded-xl border border-dashed border-gray-200">
          <p className="text-sm text-gray-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          {/* Selected List Box */}
          <div className="mt-5 flex flex-col gap-3">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${tech.iconClassName}`}
                  >
                    {tech.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {tech.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {tech.category}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  aria-label={`Remove ${tech.name}`}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-full border border-pink-200 py-3 text-sm font-semibold text-pink-600 hover:bg-pink-50 transition"
          >
            Remove All
          </button>
        </>
      )}

    </div>
  );
};

export default StackCard;