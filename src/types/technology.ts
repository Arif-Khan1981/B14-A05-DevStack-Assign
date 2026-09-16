export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "DevOps";

export type TechLevel = "Beginner-Friendly" | "Intermediate" | "Advanced";

export interface Technology {
  /** Stable unique key, also used for icon lookup */
  id: string;
  name: string;
  description: string;
  category: TechCategory;
  level: TechLevel;
  rating: number;
  /** Small pill shown top-right of the card, e.g. "Popular", "Fast" */
  badge: string;
  /** Tailwind classes for the badge background + text color */
  badgeClassName: string;
  /** Tailwind classes for the icon chip background + text color */
  iconClassName: string;
}
