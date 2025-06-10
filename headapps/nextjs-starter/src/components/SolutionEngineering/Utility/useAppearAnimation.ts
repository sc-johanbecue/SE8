import { useEffect, useRef, RefObject } from 'react';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';

type AnimationParams = ComponentParams & {
  AppearAnimation?: { Value?: { value: string } };
  AppearAnimationSpeed?: { Value?: { value: string } };
  AppearAnimationIteration?: { Value?: { value: string } };
  AppearAnimationDelay?: { Value?: { value: string } };
  AppearAnimationMode?: { Value?: { value: 'letter' | 'word' } };
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
  const stepDelay = parseInt(params?.AppearAnimationStepDelay?.Value?.value || '50', 10);
  const mode = params?.AppearAnimationMode?.Value?.value;

  useEffect(() => {
    const el = elementRef.current;
    if (!el || !animation) return;

    const rawClasses = `${animation} ${speed} ${iteration} ${delay}`;
    const classListArray = rawClasses.trim().split(/\s+/).filter(Boolean);

    if (!hasAnimatedRef.current && !el.classList.contains('invisible')) {
      el.classList.add('invisible');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.intersectionRatio > threshold;

        if (isVisible && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          if (mode === 'letter' || mode === 'word') {
            const text = el.textContent || '';
            const units = mode === 'word' ? text.split(/(\s+)/).filter(Boolean) : Array.from(text);

            el.innerHTML = '';

            const animateNext = (index: number) => {
              if (index >= units.length) return;
              const item = units[index];
              const isWhitespace = /^\s+$/.test(item);

              const wrapper = document.createElement('span');
              const inner = document.createElement('span');
              wrapper.className =
                mode === 'word' ? 'animated-words-wrapper' : 'animated-letters-wrapper';

              if (isWhitespace) {
                inner.innerHTML = '&nbsp;';
                wrapper.appendChild(inner);
                el.appendChild(wrapper);
                animateNext(index + 1);
              } else {
                inner.className = `${
                  mode === 'word' ? 'animated-words-item' : 'animated-letters-item'
                } animated ${animation} ${speed} ${iteration} ${delay}`;
                inner.style.display = 'inline-block';
                inner.textContent = item;
                setTimeout(() => animateNext(index + 1), stepDelay);
                wrapper.appendChild(inner);
                el.appendChild(wrapper);
              }
            };

            el.classList.remove('invisible');
            animateNext(0);
          } else {
            el.classList.remove('invisible');
            el.classList.add(...classListArray);
          }
        }
      },
      { threshold: [0, threshold, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, speed, iteration, delay, threshold, mode, stepDelay]);

  return elementRef;
}
