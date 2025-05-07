import { useEffect } from 'react';

export function useAppearAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-appear-animation]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          const animationName = el.dataset.appearAnimation;
          const once = el.dataset.appearAnimationOnce !== 'false'; // Default true
          const speed = el.dataset.appearAnimationSpeed || '1s';
          const delay = el.dataset.appearAnimationDelay || '0s';
          const iteration = el.dataset.appearAnimationIteration || '1';

          if (entry.isIntersecting) {
            // Set Animate.css classes
            el.classList.add('animate__animated', `animate__${animationName}`);

            // Set timing via inline styles
            el.style.setProperty('--animate-duration', speed);
            el.style.setProperty('animation-delay', delay);
            el.style.setProperty('animation-iteration-count', iteration);

            if (once) {
              observer.unobserve(el);
            }
          } else if (!once) {
            // Remove classes when out of viewport if not once
            el.classList.remove('animate__animated', `animate__${animationName}`);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
