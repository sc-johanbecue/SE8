import React from 'react';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <p className="word-spacing-max pl-0 pt-24 text-left text-[3.5rem] font-bold leading-[4rem] md:text-[66px] lg:pl-20 lg:text-[80px] lg:leading-[88px]">
          FEARLESS. FORWARD. YOU.
        </p>
        <div className="md:ml-12 lg:ml-40">
          <div className="space-between mt-10 flex flex-row text-sm leading-6 md:mt-24">
            <div className="flex-1 pr-3 last:pr-0">
              <ul className="max-w-[230px] space-y-2">
                <li>
                  <Link className="hover:underline" href="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://supplier.coty.com"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Supplier Portal
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/terms-use">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://careers.coty.com/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://investors.coty.com/home/default.aspx"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Investors
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://assets.contentstack.io/v3/assets/blted39bd312054daca/blt46196b3a33d2d0ca/Coty-Modern-Slavery-Statement-2024.pdf"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Modern Slavery Act &amp; Transparency in Supply Chains Statement
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 pr-3 last:pr-0">
              <ul className="max-w-[230px] space-y-2">
                <li>
                  <Link className="hover:underline" href="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/sustainability/esg-reporting-hub">
                    Our Policies
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/cookie-policy">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.convercent.com/en-us/LandingPage/5c667d90-60bd-e711-80df-000d3ab6ebad"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ethics &amp; Compliance Hotline
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center text-sm sm:items-start">
            <div className="mb-4 hidden md:block">Follow Coty</div>
            <div className="flex justify-center gap-[1.6rem] w-full max-w-[188px] justify-between md:max-w-[176px]">
              <Link
                target="_blank"
                rel="noreferrer"
                data-testid="social-list-item"
                href="https://www.facebook.com/COTYInc/?ref=page_internal"
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
                    border: '0',
                    margin: '0',
                    padding: '0',
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
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                    />
                  </span>
                  <img
                    alt="facebook.svg"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="cursor-pointer"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                  <noscript>
                    <img
                      alt="facebook.svg"
                      loading="lazy"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: 'border-box',
                        padding: 0,
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: 0,
                        height: 0,
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                      className="cursor-pointer"
                      srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=32&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=48&amp;quality=50&amp;auto=webp 2x"
                      src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=48&amp;quality=50&amp;auto=webp"
                    />
                  </noscript>
                </span>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                data-testid="social-list-item"
                href="https://twitter.com/COTYInc"
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
                    border: '0',
                    margin: '0',
                    padding: '0',
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
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                    />
                  </span>
                  <img
                    alt="twitter.svg"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="cursor-pointer"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                  <noscript>
                    <img
                      alt="twitter.svg"
                      loading="lazy"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: 'border-box',
                        padding: 0,
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: 0,
                        height: 0,
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                      className="cursor-pointer"
                      srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=32&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=48&amp;quality=50&amp;auto=webp 2x"
                      src="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=48&amp;quality=50&amp;auto=webp"
                    />
                  </noscript>
                </span>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                data-testid="social-list-item"
                href="https://www.instagram.com/cotyinc"
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
                    border: '0',
                    margin: '0',
                    padding: '0',
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
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                    />
                  </span>
                  <img
                    alt="instagram.svg"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="cursor-pointer"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                  <noscript>
                    <img
                      alt="instagram.svg"
                      loading="lazy"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: 'border-box',
                        padding: 0,
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: 0,
                        height: 0,
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                      className="cursor-pointer"
                      srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=32&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=48&amp;quality=50&amp;auto=webp 2x"
                      src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=48&amp;quality=50&amp;auto=webp"
                    />
                  </noscript>
                </span>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                data-testid="social-list-item"
                href="https://in.linkedin.com/company/coty"
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
                    border: '0',
                    margin: '0',
                    padding: '0',
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
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                    />
                  </span>
                  <img
                    alt="linkedin.svg"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="cursor-pointer"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                  <noscript>
                    <img
                      alt="linkedin.svg"
                      loading="lazy"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: 'border-box',
                        padding: 0,
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: 0,
                        height: 0,
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                      className="cursor-pointer"
                      srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=32&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=48&amp;quality=50&amp;auto=webp 2x"
                      src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=48&amp;quality=50&amp;auto=webp"
                    />
                  </noscript>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] flex flex-row items-center md:mt-20">
        <div className="h-1 grow border-t border-white"></div>
        <div className="mx-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[56px] w-[56px] fill-white md:h-[80px] md:w-[80px]"
          >
            <path
              d="M28 3.24231e-06C22.4621 3.24231e-06 17.0486 1.64222 12.4441 4.7189C7.83949 7.79558 4.25064 12.1686 2.13139 17.2849C0.0121364 22.4012 -0.542363 28.0311 0.538023 33.4625C1.61841 38.894 4.28517 43.8831 8.20103 47.799C12.1169 51.7149 17.106 54.3816 22.5375 55.462C27.9689 56.5424 33.5988 55.9879 38.7151 53.8686C43.8315 51.7494 48.2045 48.1605 51.2811 43.556C54.3578 38.9514 56 33.5379 56 28C56.0018 24.3225 55.2787 20.6807 53.8722 17.2828C52.4657 13.8848 50.4033 10.7975 47.8029 8.19712C45.2025 5.59673 42.1152 3.53431 38.7172 2.12781C35.3193 0.721303 31.6775 -0.00176692 28 3.24231e-06ZM54.101 23.3266C51.0815 21.8688 47.7833 21.0787 44.431 21.0101C42.1568 21.0213 39.9087 21.4965 37.8245 22.4066C35.7403 23.3167 33.8638 24.6426 32.3098 26.3031C30.9397 27.7466 29.8118 29.4021 28.9697 31.2054C29.1794 27.8461 29.8734 24.5346 31.0303 21.3737C31.8411 19.1765 33.1397 17.1919 34.8283 15.569C36.6152 13.9639 38.8637 12.9646 41.2525 12.7138C42.7245 12.5144 44.2216 12.617 45.6526 13.0153C47.0836 13.4136 48.4184 14.0992 49.5757 15.0303C51.9145 17.0338 53.4893 19.7837 54.0336 22.8148C54.0336 22.9899 54.101 23.1515 54.1279 23.3266H54.101ZM52.0404 24.0404C51.1615 24.357 50.3386 24.8117 49.6027 25.3872C48.568 26.3238 47.6295 27.3615 46.8013 28.4849C45.0951 30.8492 42.9785 32.8882 40.5522 34.505C36.9832 36.574 32.9195 37.6353 28.7946 37.5758C29.0699 33.7197 30.6905 30.0828 33.3737 27.2997C34.7881 25.7793 36.4988 24.5648 38.4005 23.7309C40.3022 22.8971 42.3545 22.4616 44.431 22.4512C47.0318 22.5003 49.6017 23.0252 52.0134 24L52.0404 24.0404ZM28 26.6936C27.668 24.6735 27.1309 22.6925 26.3973 20.7812C24.2963 15.4883 20.8485 12.3368 16.1347 11.3536C17.5871 9.61643 19.403 8.21912 21.4543 7.26034C23.5057 6.30157 25.7424 5.80463 28.0067 5.80463C30.2711 5.80463 32.5078 6.30157 34.5591 7.26034C36.6105 8.21912 38.4264 9.61643 39.8788 11.3536C35.1515 12.3098 31.7172 15.394 29.6162 20.7812C28.8841 22.694 28.3427 24.6744 28 26.6936ZM28 1.45457C32.4599 1.45242 36.8483 2.57576 40.7586 4.72046C44.669 6.86517 47.975 9.96187 50.3703 13.7239C47.8763 11.7813 44.7381 10.8572 41.5892 11.1381C40.0088 9.02794 37.9585 7.31504 35.6008 6.13524C33.2432 4.95545 30.6431 4.34118 28.0067 4.34118C25.3704 4.34118 22.7703 4.95545 20.4126 6.13524C18.055 7.31504 16.0047 9.02794 14.4242 11.1381C11.2754 10.8572 8.13719 11.7813 5.64311 13.7239C8.0345 9.96118 11.3378 6.8636 15.2462 4.71865C19.1547 2.57371 23.5417 1.45095 28 1.45457ZM2.00677 22.8014C2.5658 19.7599 4.16567 17.0077 6.532 15.0169C7.68931 14.0857 9.02419 13.4001 10.4552 13.0018C11.8862 12.6036 13.3833 12.501 14.8552 12.7004C17.2433 12.9539 19.491 13.9529 21.2795 15.5556C22.968 17.1759 24.2626 19.1617 25.064 21.3603C26.2321 24.5186 26.9309 27.831 27.138 31.1919C26.296 29.3853 25.1631 27.7291 23.7845 26.2896C22.2325 24.6266 20.3563 23.299 18.2717 22.3887C16.187 21.4784 13.938 21.0047 11.6633 20.9967C8.31099 21.0653 5.01282 21.8553 1.99329 23.3131C1.99329 23.1515 1.9933 22.9899 2.08758 22.8283L2.00677 22.8014ZM27.2997 37.6431C23.1748 37.7026 19.1111 36.6414 15.5421 34.5724C13.0858 32.9419 10.9457 30.8793 9.2256 28.4849C8.40412 27.3684 7.46989 26.3393 6.43771 25.4141C5.71209 24.8306 4.89227 24.3752 4.01349 24.0673C6.42524 23.0925 8.99513 22.5676 11.596 22.5185C13.6724 22.5289 15.7248 22.9644 17.6265 23.7983C19.5281 24.6321 21.2389 25.8467 22.6532 27.367C25.3364 30.1501 26.957 33.787 27.2323 37.6431H27.2997ZM1.5219 28.0269C1.5219 27.0572 1.52192 26.1011 1.67007 25.1583H2.1549C3.38569 25.3 4.54745 25.8011 5.49498 26.5993C6.12994 27.1593 6.71152 27.777 7.23232 28.4444C9.40067 31.4208 10.2492 35.5017 11.0842 39.4344C11.9865 43.7576 12.9293 48.1751 15.5556 51.3939C11.3155 49.1329 7.76983 45.7617 5.2979 41.6411C2.82597 37.5204 1.52076 32.8053 1.5219 28V28.0269ZM12.5387 39.138C12.1338 37.0112 11.6168 34.9073 10.9899 32.835C12.1005 33.9668 13.3389 34.9657 14.6801 35.8115C17.3303 37.4166 20.2913 38.4403 23.367 38.8148C21.549 39.7197 20.0161 41.109 18.9372 42.8295C17.8583 44.5501 17.2753 46.535 17.2525 48.5656C17.2376 49.5035 17.3371 50.4397 17.5488 51.3535C14.505 48.4175 13.5084 43.8787 12.5387 39.138ZM18.7475 48.5656C18.7568 46.228 19.6343 43.9772 21.2096 42.25C22.785 40.5229 24.9458 39.4425 27.2727 39.2188C27.195 41.9189 26.4418 44.5564 25.082 46.8903C23.7221 49.2242 21.7989 51.1801 19.4882 52.5791C18.9661 51.2976 18.7139 49.9221 18.7475 48.5387V48.5656ZM28.0135 54.4781C25.5817 54.4784 23.1616 54.143 20.8215 53.4815C24.2825 51.2174 26.8303 47.8013 28.0135 43.8384C29.2074 47.7997 31.7584 51.2137 35.2188 53.4815C32.8744 54.1439 30.4497 54.4793 28.0135 54.4781ZM36.5387 52.5522C34.2374 51.1593 32.3202 49.2141 30.9608 46.8929C29.6015 44.5716 28.843 41.9478 28.7542 39.2593C31.0812 39.483 33.242 40.5632 34.8173 42.2904C36.3927 44.0175 37.2701 46.2684 37.2794 48.6061C37.3159 49.991 37.0589 51.368 36.5252 52.6465L36.5387 52.5522ZM32.6599 38.8821C35.7356 38.5076 38.6966 37.4839 41.3468 35.8788C42.6881 35.033 43.9265 34.0342 45.037 32.9024C44.4057 34.9745 43.8842 37.0784 43.4747 39.2054C42.4781 43.9462 41.5219 48.4849 38.4781 51.4209C38.6898 50.5071 38.7893 49.5709 38.7744 48.633C38.7516 46.6024 38.1686 44.6174 37.0898 42.8969C36.0109 41.1764 34.478 39.787 32.6599 38.8821ZM40.4714 51.4613C43.0977 48.2424 44.0269 43.8249 44.9427 39.5017C45.7643 35.569 46.6262 31.5017 48.7811 28.5118C49.31 27.8471 49.8959 27.2297 50.532 26.6667C51.4795 25.8685 52.6412 25.3673 53.872 25.2256H54.3569C54.4512 26.1684 54.505 27.1246 54.505 28.0943C54.4867 32.8813 53.1723 37.5739 50.7014 41.6739C48.2305 45.7738 44.6954 49.1281 40.4714 51.3805"
              fill="current"
            ></path>
          </svg>
        </div>
        <div className="h-0 grow border-t border-white"></div>
      </div>
      <div className="mt-auto flex justify-between">
        <p className="flex flex-col text-xs">
          <span className="font-bold">© 2025, Coty Inc.</span>
          <span className="inline-flex flex-col whitespace-pre-wrap md:flex-row">
            <span>All trademarks registered. </span>
            <span>All rights reserved.</span>
          </span>
        </p>
        <p className="flex flex-col text-right text-xs">
          <span className="font-bold">NYSE</span>
          <span>$0.0</span>
        </p>
      </div>
    </>
  );
};

export default Header;
