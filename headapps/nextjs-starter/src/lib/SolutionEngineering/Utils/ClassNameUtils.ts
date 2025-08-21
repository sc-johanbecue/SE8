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
