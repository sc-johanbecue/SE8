import React from 'react';
import {
  ImageField,
  TextField,
  RichTextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Number: TextField;
  Label: TextField;
  Name: TextField;
  Category: TextField;
  Family: TextField;
  ShortDescription: RichTextField;
  LongDescription: RichTextField;
  MasterAsset: ImageField;
}

type TheRigHeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigHeaderDefaultComponent = (props: TheRigHeaderProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigHeaderProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const direction = sitecoreContext.language === 'ar-SA' ? 'rtl' : 'ltr';

  if (props.fields) {
    return (
      <header className="css-cea17v" dir={direction}>
        <div className="css-58w1wt">
          <div className="css-0">
            <Link href="/">
              <img
                alt="rig logo"
                loading="lazy"
                width="112"
                height="95"
                decoding="async"
                data-nimg="1"
                className="css-xzc2ri"
                style={{ color: 'transparent' }}
                src="https://therig.sa/header/rig_logo.svg"
              />
            </Link>
          </div>
          <div className="css-f8bp36">
            <nav className="css-lqzyi5">
              <div dir="ltr">
                <Link className=" css-an3xli" href="/about/">
                  ABOUT THE RIG.
                  <div className="underline css-th6fei"></div>
                </Link>
              </div>
              <div dir="auto">
                <Link className=" css-an3xli" href="/press/">
                  press
                  <div className="underline css-th6fei"></div>
                </Link>
              </div>

              <button className="css-r2sx70">
                <img src="https://therig.sa/svg/moon-icon.svg" alt="" />
              </button>
              <Link className="css-1tssrit" href="/ar/">
                العربية
                <div className="underline css-th6fei"></div>
              </Link>
            </nav>
            <div className="css-9qr6hs">
              <div className="line line-a"></div>
              <div className="line line-b"></div>
              <div className="line line-c"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
