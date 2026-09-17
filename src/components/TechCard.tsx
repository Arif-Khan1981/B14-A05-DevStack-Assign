import type { ReactNode } from "react";
import StarIcon from "/ui/star.png";

interface TechCardProps {
  name: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  badge: string;
  badgeClassName: string;
  iconClassName: string;
  icon: ReactNode;
}

const TechCard = ({
  name,
  description,
  category,
  level,
  rating,
  badge,
  badgeClassName,
  iconClassName,
  icon,
}: TechCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Icon + Badge */}
      <div className="mb-5 flex items-center justify-between">
        
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${iconClassName}`}
        >
          {icon}
        </div>

        {badge && (
          <span
            className={`rounded-full px-3 py-1 text-x font-bold ${badgeClassName}`}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="mb-2 text-xl font-bold text-gray-900">
        {name}
      </h3>

      {/* Description */}
      <p className="mb-5 min-h-10 text-sm leading-6 text-gray-600">
        {description}
      </p>

      {/* Category + Level + Rating*/}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {category}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {level}
        </span>

        <div className="flex items-center gap-2 border-t border-gray-100 pb-3">
          <img src={StarIcon} alt="Rating" className="h-4"/>
          <span className="font-semibold text-gray-800">
          {rating}
          </span>

          <span className="text-sm text-gray-500">
          / 5.0
          </span>
        </div>
      </div> 
      
      {/* Add to Stack Btn */}
      <button className="bg-orange-500 hover:bg-pink-600 text-1xl text-white p-3 rounded-2xl w-full transition">Add to Stack</button>
         
    </div>
  );
};

export default TechCard;