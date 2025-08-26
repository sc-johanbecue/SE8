import React from 'react';
import * as FaIcons6 from 'react-icons/fa6';
import type { IconType } from 'react-icons';

export type HorizontalCarouselProps = {
  /** Outer wrapper (we’ll add sensible defaults too). */
  wrapperClass?: string;
  /** Scrollable track classes. */
  trackClass?: string;
  /** Per-item wrapper classes. */
  itemClass?: string;

  /** Scroll distance per click: 'page' (~90% viewport width) or a pixel number. */
  scrollBy?: number | 'page';

  /** Arrow visibility: 'always' | 'hover' | 'never'. Default: 'hover'. */
  arrows?: 'always' | 'hover' | 'never';

  /** Show exactly one item per view (full width). Default: false. */
  single?: boolean;

  /** Extra classes for both arrow buttons. */
  buttonClass?: string;

  /** Override the arrow icons (defaults: FaChevronLeft / FaChevronRight). */
  prevIcon?: IconType;
  nextIcon?: IconType;
  /** Optional extra class for the icon elements (color, transitions, etc.). */
  iconClass?: string;
  /** Pixel size for the icons (react-icons size prop). Default: 20. */
  iconSize?: number;

  /** ARIA labels. */
  prevAriaLabel?: string;
  nextAriaLabel?: string;
  ariaLabel?: string;

  /** Your items (cards/images/socials...). */
  children?: React.ReactNode;
};

export default function HorizontalCarousel({
  wrapperClass,
  trackClass,
  itemClass,
  scrollBy = 'page',
  arrows = 'hover',
  single = false,
  buttonClass,
  prevIcon,
  nextIcon,
  iconClass,
  iconSize = 20,
  prevAriaLabel = 'Previous',
  nextAriaLabel = 'Next',
  ariaLabel = 'Carousel',
  children,
}: HorizontalCarouselProps) {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(false);

  const computeScrollBounds = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const left = el.scrollLeft;
    setCanLeft(left > 1);
    setCanRight(left < maxScroll - 1);
  }, []);

  React.useEffect(() => {
    computeScrollBounds();
    const el = trackRef.current;
    if (!el) return;

    let rAF = 0;
    const onScroll = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(computeScrollBounds);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', computeScrollBounds);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', computeScrollBounds);
      cancelAnimationFrame(rAF);
    };
  }, [computeScrollBounds]);

  const doScroll = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const delta =
      scrollBy === 'page' ? Math.floor(el.clientWidth * 0.9) : Math.max(1, Number(scrollBy) || 0);
    el.scrollBy({ left: dir * delta, behavior: 'smooth' });
  };

  const prev = () => doScroll(-1);
  const next = () => doScroll(1);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  };

  // Arrow visibility behavior
  const groupBehavior = arrows === 'hover' ? 'group' : '';
  const buttonVisibility =
    arrows === 'never'
      ? 'hidden'
      : arrows === 'always'
        ? 'opacity-100'
        : 'opacity-0 group-hover:opacity-100 transition-opacity';

  const defaultButton =
    'absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur ' +
    'shadow focus:outline-none focus:ring-2 focus:ring-black/20 text-black disabled:opacity-40 ' +
    'disabled:cursor-not-allowed';
  const mergedButton = [defaultButton, buttonVisibility, buttonClass].filter(Boolean).join(' ');

  // ✅ Defaults so it works even with no props provided
  const resolvedWrapper = ['relative w-full overflow-hidden', wrapperClass, groupBehavior]
    .filter(Boolean)
    .join(' ');

  const defaultTrackMulti = 'flex overflow-x-auto snap-x snap-mandatory gap-4';
  const defaultItemMulti = 'snap-start shrink-0 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4';

  const defaultTrackSingle = 'flex overflow-x-auto snap-x snap-mandatory gap-0';
  const defaultItemSingle = 'snap-start shrink-0 basis-full';

  const resolvedTrack =
    (trackClass && trackClass.trim()) || (single ? defaultTrackSingle : defaultTrackMulti);
  const resolvedItem =
    (itemClass && itemClass.trim()) || (single ? defaultItemSingle : defaultItemMulti);

  // Icons (defaults from fa6; override via props if desired)
  const PrevIcon: IconType = prevIcon ?? FaIcons6.FaChevronLeft;
  const NextIcon: IconType = nextIcon ?? FaIcons6.FaChevronRight;

  return (
    <div className={resolvedWrapper}>
      {/* Prev */}
      <button
        type="button"
        aria-label={prevAriaLabel}
        className={[mergedButton, 'left-2'].join(' ')}
        onClick={prev}
        disabled={!canLeft}
      >
        <PrevIcon size={iconSize} className={iconClass} aria-hidden="true" />
      </button>

      {/* Next */}
      <button
        type="button"
        aria-label={nextAriaLabel}
        className={[mergedButton, 'right-2'].join(' ')}
        onClick={next}
        disabled={!canRight}
      >
        <NextIcon size={iconSize} className={iconClass} aria-hidden="true" />
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className={resolvedTrack}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {React.Children.map(children, (child, idx) => (
          <div key={idx} className={resolvedItem}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
