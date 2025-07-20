import React from 'react';
import Link from 'next/link';

import {
  ImageField,
  TextField,
  RichTextField,
  LinkField,
  Link as JssLink,
  Text,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Description: RichTextField;
  BannerImage: ImageField;
  AboutImage: ImageField;
  HomepageLink: LinkField;
}

type ComponentProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const Header = (props: ComponentProps): JSX.Element => {
  return (
    <>
      <h1 className="sr-only">
        Page Details - Brand Page - <Text field={props.fields.Title}></Text>
      </h1>
      <div className="pt-24">
        <div className="absolute z-[9] ml-16 mt-5 hidden md:block">
          <ul className="flex" aria-label="Breadcrumb">
            <li className="opacity-[0.56] last-of-type:font-bold last-of-type:opacity-100">
              <Link href="/">
                <Link className="flex cursor-pointer items-center text-xs !text-white" href="">
                  HOMEPAGE
                </Link>
              </Link>
            </li>
            <li className="opacity-[0.56] last-of-type:font-bold last-of-type:opacity-100">
              <Link href="/our-brands">
                <Link className="flex cursor-pointer items-center text-xs !text-white" href="">
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 !stroke-white"
                  >
                    <path d="M5 9L1 5L5 1" />
                  </svg>
                  OUR BRANDS
                </Link>
              </Link>
            </li>
            <li className="opacity-[0.56] last-of-type:font-bold last-of-type:opacity-100">
              <Link href="/our-brands/prestige-brands">
                <Link className="flex cursor-pointer items-center text-xs !text-white" href="">
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 !stroke-white"
                  >
                    <path d="M5 9L1 5L5 1" />
                  </svg>
                  PRESTIGE BRANDS
                </Link>
              </Link>
            </li>
            <li className="opacity-[0.56] last-of-type:font-bold last-of-type:opacity-100">
              <span className="flex items-center text-xs !text-white" aria-current="page">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2 !stroke-white"
                >
                  <path d="M5 9L1 5L5 1" />
                </svg>
                <Text field={props.fields.Title}></Text>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <div style={{ willChange: 'transform', transform: 'translateY(-3.16949%)' }}>
            <div className="banner_gradient__7umfc relative h-[440px] overflow-hidden rounded-br-[195px] md:rounded-br-[272px]">
              <div className="block z-0 w-full overflow-hidden">
                <JssImage
                  field={props.fields.BannerImage}
                  // layout="fill"
                  // objectFit="cover"
                  // priority
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center pb-10 pt-[60px] md:pb-16 md:pt-20"
          style={{ fontSize: '40px;', fontWeight: '700' }}
        >
          <div
            className="items-center h-20 w-2/3 md:h-32 max-h-[64px]"
            style={{ fontSize: '50px', fontWeight: '700' }}
          >
            <Text field={props.fields.Title}></Text>
          </div>
          <JssLink
            field={props.fields.HomepageLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold tracking-wider text-blue underline underline-offset-[7px] even:mt-5 md:even:mt-[35px]"
            href="https://www.burberry.com"
          />
        </div>
      </div>
      <div className="mb-[72px] flex border-t-[1px] border-blue md:mb-[136px] md:h-[512px] md:border-y">
        <div className="mx-auto flex max-w-[1440px] flex-col px-4  md:flex-row">
          <div className="flex justify-center md:w-1/2">
            <div className="h-[568px] w-full overflow-hidden rounded-bl-[190px] md:w-[432px]">
              <div
                className="block   h-full z-0 w-full overflow-hidden "
                style={{ marginBottom: '-2.5%' }}
              >
                <div
                  style={{
                    marginTop: '-5%',
                    height: '110%',
                    willChange: 'transform',
                    transform: 'translateY(0.48798%)',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      position: 'absolute',
                      inset: '0px',
                    }}
                  >
                    <JssImage
                      field={props.fields.AboutImage}
                      decoding="async"
                      data-nimg="fill"
                      className=""
                      sizes="100vw"
                      style={{
                        position: 'absolute',
                        inset: '0px',
                        boxSizing: 'border-box',
                        padding: '0px',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0px',
                        height: '0px',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper relative mt-11 flex flex-col md:mt-0 md:w-1/2 md:pl-[66px] md:pr-[72px] md:pt-[17px] lg:pl-[96px] lg:pr-[132px] lg:pt-[47px] xl:pl-[126px] xl:pr-[162px]  xl:pt-[77px]">
            <div className="bg-blue w-px h-full mx-2 absolute left-0 top-[8%] mx-0 hidden h-[84%] w-px bg-blue md:block"></div>
            <p className="mb-[21px] text-xs uppercase text-darkGray">About</p>
            <p className="description mb-[38px] text-xl leading-8 text-blue">
              <Text field={props.fields.Description}></Text>
            </p>
            <div className="flex justify-center gap-[1.6rem] !justify-start gap-6">
              <a
                target="_blank"
                rel="noreferrer"
                data-testid="social-list-item"
                href="https://www.facebook.com/Burberry"
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                      }}
                    />
                  </span>
                  <img
                    alt="facebook-blue.svg"
                    srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltb78dba0796904a83/62849a83466b1b559357c160/facebook-blue.svg?width=32&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/bltb78dba0796904a83/62849a83466b1b559357c160/facebook-blue.svg?width=48&amp;quality=50&amp;auto=webp 2x"
                    src="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltb78dba0796904a83/62849a83466b1b559357c160/facebook-blue.svg?width=48&amp;quality=50&amp;auto=webp"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="cursor-pointer"
                    style={{
                      position: 'absolute',
                      inset: '0px',
                      boxSizing: 'border-box',
                      padding: '0px',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0px',
                      height: '0px',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                data-testid="social-list-item"
                href="https://www.instagram.com/burberrybeauty"
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                />
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                    }}
                  />
                </span>
                <span>
                  <img
                    alt="instagram-blue.svg"
                    srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltcd48b92436a56adb/62849a34d5f9386926e63b10/instagram-blue.svg?width=32&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/bltcd48b92436a56adb/62849a34d5f9386926e63b10/instagram-blue.svg?width=48&amp;quality=50&amp;auto=webp 2x"
                    src="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltcd48b92436a56adb/62849a34d5f9386926e63b10/instagram-blue.svg?width=48&amp;quality=50&amp;auto=webp"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="cursor-pointer"
                    style={{
                      position: 'absolute',
                      inset: '0px',
                      boxSizing: 'border-box',
                      padding: '0px',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0px',
                      height: '0px',
                    }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
