import { useEffect, useRef, RefObject } from 'react';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';

type AnimationParams = ComponentParams & {
  AppearAnimation?: { Value?: { value: string } };
  AppearAnimationSpeed?: { Value?: { value: string } };
  AppearAnimationIteration?: { Value?: { value: string } };
  AppearAnimationDelay?: { Value?: { value: string } };
  AppearAnimationStepDelay?: { Value?: { value: string } };
};

interface UseAppearAnimationOptions {
  params: AnimationParams;
  threshold?: number;
}

export function useAppearAnimation<T extends HTMLElement = HTMLElement>(
  options: UseAppearAnimationOptions
): RefObject<T> {
  const { params, threshold = 0.1 } = options;
  const elementRef = useRef<T | null>(null);
  const hasAnimatedRef = useRef(false);

  const animation = params?.AppearAnimation?.Value?.value ?? '';
  const speed = params?.AppearAnimationSpeed?.Value?.value ?? '';
  const iteration = params?.AppearAnimationIteration?.Value?.value ?? '';
  const delay = params?.AppearAnimationDelay?.Value?.value ?? '';
  const classListArray = `${animation} ${speed} ${iteration} ${delay}`
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const el = elementRef.current;
    if (!el || !animation) return;

    if (!hasAnimatedRef.current && !el.classList.contains('invisible')) {
      el.classList.add('invisible');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.intersectionRatio > threshold;

        if (isVisible && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          el.classList.remove('invisible');
          el.classList.add(...classListArray);
        }
      },
      { threshold: [0, threshold, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, speed, iteration, delay, threshold, classListArray]);

  return elementRef;
}
