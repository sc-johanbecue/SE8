/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  TextField,
  ImageField,
  Item,
  LinkField,
  Image as JssImage,
  Text,
  Link as JssLink,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

type CarouselItemRef = Item & {
  fields: {
    Title: TextField;
    Intro: TextField;
    LinkText: TextField;
    Image: ImageField;
    Link: LinkField;
  };
};

interface Fields {
  Items: CarouselItemRef[];
}

type CarouselProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CarouselProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = !!sitecoreContext?.pageEditing;

  const items = (props.fields?.Items as CarouselItemRef[]) ?? [];
  const slideCount = items.length;

  const autoMs = 10000; // 2.5x longer
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (slideCount <= 1) return; // nothing to rotate
    timerRef.current = window.setInterval(() => setActive((i) => (i + 1) % slideCount), autoMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [slideCount, autoMs]);

  const isActive = (idx: number) => slideCount > 0 && idx === active % slideCount;
  const navLinkClass = (idx: number) => `timer__link${isActive(idx) ? '' : ' timer__link--xs'}`;

  // ----- EMPTY STATE (editing) -----
  if (isEditing && slideCount === 0) {
    return (
      <header className="block block--carousel carousel" id={props.rendering.uid}>
        <div className="carousel__container ls-gutter ls-container--m">
          <ul className="carousel__list">
            <li
              id={`${props.rendering.uid}-empty`}
              className="carousel__item carousel__item--colorful carousel__item--active"
              data-key-id="ft-0"
              aria-hidden={false}
            >
              <article className="carousel__inner">
                {/* Keep the link wrapper so layout is identical */}
                <a className="carousel__link" href="#" id={`${props.rendering.uid}-empty-link`}>
                  <div className="carousel__visual ls-first-item">
                    {/* Use active image class so it’s visible */}
                    <img
                      className="carousel__image carousel__image--active"
                      alt=""
                      width={325}
                      height={250}
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='325' height='250'%3E%3Crect width='100%25' height='100%25' fill='%23eeeeee'/%3E%3C/svg%3E"
                    />
                  </div>
                  <div className="carousel__content ls-second-item">
                    <h1 className="carousel__title title--m">
                      <span className="is-empty-hint">No carousel items selected</span>
                    </h1>
                    <p className="carousel__intro text--l">
                      <span className="is-empty-hint">Use the “Items” multilist field.</span>
                    </p>
                    <footer className="carousel__fauxlink">
                      <span className="link is-empty-hint">No link</span>
                    </footer>
                  </div>
                </a>
              </article>
            </li>

            {/* Minimal nav to keep layout consistent */}
            <nav className="carousel__nav timer">
              <ul className="timer__list">
                <li className="timer__item">
                  <a
                    href="#"
                    className="timer__link"
                    aria-current="true"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="timer__indicator" />
                  </a>
                </li>
              </ul>
              <svg className="timer__icon" height="60" width="55" aria-hidden="true">
                <use xlinkHref="#icon--bee" />
              </svg>
            </nav>
          </ul>
        </div>
      </header>
    );
  }

  // NORMAL STATE
  return (
    <header className="block block--carousel carousel" id={props.rendering.uid}>
      <div className="carousel__container ls-gutter ls-container--m">
        <ul className="carousel__list">
          {items.map((it, index) => {
            const liClass =
              `carousel__item carousel__item--colorful ` +
              (isActive(index) ? 'carousel__item--active' : 'carousel__item--static');
            const imgClass =
              `carousel__image ` +
              (isActive(index) ? 'carousel__image--active' : 'carousel__image--static');

            const hasLink = Boolean(it?.fields?.Link?.value?.href);

            const CardContent = (
              <>
                <div className="carousel__visual ls-first-item">
                  <JssImage field={it.fields.Image} className={imgClass} />
                </div>
                <div className="carousel__content ls-second-item">
                  <h1 className="carousel__title title--m">
                    <Text field={it.fields.Title} />
                  </h1>
                  <p className="carousel__intro text--l">
                    <Text field={it.fields.Intro} />
                  </p>
                  <footer className="carousel__fauxlink">
                    <span className="link">
                      <Text field={it.fields.LinkText} />
                    </span>
                  </footer>
                </div>
              </>
            );

            return (
              <li
                key={index}
                id={`${props.rendering.uid}-${index}`}
                className={liClass}
                data-key-id={`ft-${index}`}
                aria-hidden={!isActive(index)}
              >
                <article className="carousel__inner">
                  {hasLink ? (
                    <JssLink
                      field={it.fields.Link}
                      className="carousel__link"
                      id={String(it?.id ?? index)}
                    >
                      {CardContent}
                    </JssLink>
                  ) : (
                    <a className="carousel__link" id={String(it?.id ?? index)} href="#">
                      {CardContent}
                    </a>
                  )}
                </article>
              </li>
            );
          })}

          {slideCount > 0 && (
            <nav className="carousel__nav timer">
              <ul className="timer__list">
                {items.map((_, i) => (
                  <li className="timer__item" key={`dot-${i}`}>
                    <a
                      href="#"
                      className={navLinkClass(i)}
                      aria-current={isActive(i) ? 'true' : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(i);
                      }}
                    >
                      <span className="timer__indicator" />
                    </a>
                  </li>
                ))}
              </ul>
              <svg className="timer__icon" height="60" width="55" aria-hidden="true">
                <use xlinkHref="#icon--bee" />
              </svg>
            </nav>
          )}
        </ul>
      </div>
    </header>
  );
};
