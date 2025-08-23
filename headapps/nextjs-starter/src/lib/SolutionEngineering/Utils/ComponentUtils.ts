// lib/SolutionEngineering/Utils/ListGridLayout.ts

/**
 * Utility to join CSS class names conditionally.
 * Filters out undefined, null, false, and empty strings.
 *
 * Example:
 *   classNames('base', isActive && 'active', customClass)
 *   -> "base active custom-class"
 */
export const joinClassNames = (...parts: Array<string | undefined | null | false>): string => {
  return parts.filter(Boolean).join(' ');
};

/**
 * Returns the final container class list for list/grid components.
 * - Assumes `viewportColumns` contains final Tailwind classes (e.g. "sm:grid-cols-2 lg:grid-cols-6 gap-6")
 * - Ensures "grid" is present once.
 * - Falls back to "grid grid-cols-1" if empty.
 */
export function buildListContainerClasses(
  viewportColumns: string | null,
  fallback = 'grid grid-cols-1'
): string {
  const trimmed = viewportColumns?.trim();
  if (!trimmed) return fallback;

  // ensure " grid " token is present (boundary-safe)
  const hasGrid = ` ${trimmed} `.includes(' grid ');
  return joinClassNames(hasGrid ? '' : 'grid', trimmed);
}
