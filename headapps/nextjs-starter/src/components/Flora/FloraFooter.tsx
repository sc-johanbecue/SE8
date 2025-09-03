/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'; //{ useState }
import { ComponentRendering, ComponentParams, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Logo: ImageField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component Footer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  if (props.fields) {
    return (
      <div id="footer" className="">
        <div className="component image">
          <div className="component-content"></div>
        </div>

        <div className="component image" id="footer-background-image">
          <div className="component-content">
            <img
              alt="Violife"
              src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Logos/Footerbubble.svg?rev=1fa2d7fccff94983adbd04635a6dcb0a"
            />
          </div>
        </div>

        <div className="component container footer-top">
          <div className="component-content">
            <div className="row component column-splitter">
              <div className="col-12">
                <div className="component image">
                  <div className="component-content">
                    <div className="footer-logo field-image">
                      <Link title="Logo Footer" href="https://www.violife.com/en-us">
                        <img
                          src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New/Logos/Violife_DairyFreeLogo.png?h=2840&amp;iar=0&amp;w=5971&amp;rev=10e6906d425c42c4897cecc81a30a215"
                          alt="Violife 100% dairy-free"
                          width="5971"
                          height="2840"
                          data-variantitemid="{8A9263DE-97BF-4E0E-AB06-8F368DF348A6}"
                          data-variantfieldname="Image"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div
                  className="component container layout--fluid container--no-padding"
                  id="footer-columns"
                >
                  <div className="component-content">
                    <div className="row component column-splitter">
                      <div className="col-12 col-sm-12 col-md-3">
                        <div className="component link-list" id="footer-column-1">
                          <div className="component-content">
                            <h3>Directory</h3>
                            <ul role="list">
                              <li className="item0 odd first" role="listitem">
                                <div className="field-link">
                                  <Link
                                    data-variantfieldname="Link"
                                    title="Our Products"
                                    href="https://www.violife.com/en-us/products"
                                    data-variantitemid="{6EC7EF17-C23B-4A52-8BE5-BDFB91782543}"
                                  >
                                    Products
                                  </Link>
                                </div>
                              </li>
                              <li className="item1 even" role="listitem">
                                <div className="field-link">
                                  <Link
                                    data-variantfieldname="Link"
                                    title="Recipes"
                                    href="https://www.violife.com/en-us/easy-recipes"
                                    data-variantitemid="{ADA66BF7-492D-446C-9878-C51DD6A39435}"
                                  >
                                    Recipes
                                  </Link>
                                </div>
                              </li>
                              <li className="item2 odd" role="listitem">
                                <div className="field-link">
                                  <Link
                                    data-variantfieldname="Link"
                                    title="Our Story"
                                    href="https://www.violife.com/en-us/our-story"
                                    data-variantitemid="{C59065C2-94F6-4267-8834-3F639899A373}"
                                  >
                                    Our Story
                                  </Link>
                                </div>
                              </li>
                              <li className="item3 even" role="listitem">
                                <div className="field-link">
                                  <Link
                                    data-variantfieldname="Link"
                                    title="Store Locator"
                                    href="https://www.violife.com/en-us/store-locator"
                                    data-variantitemid="{0831F2F7-ED80-4CD4-8E14-2251BE26335F}"
                                  >
                                    Store Locator
                                  </Link>
                                </div>
                              </li>
                              <li className="item4 odd" role="listitem">
                                <div className="field-link">
                                  <Link
                                    data-variantfieldname="Link"
                                    title="FAQ"
                                    href="https://www.violife.com/en-us/faq"
                                    data-variantitemid="{5669693B-2FE9-4160-8C96-01EF2F8ABFB0}"
                                  >
                                    FAQ
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-3" style={{ display: 'none' }}>
                        <div className="component link-list" id="footer-column-2">
                          <div className="component-content">
                            <ul role="list"></ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-3" style={{ display: 'none' }}>
                        <div className="component link-list" id="footer-column-3">
                          <div className="component-content">
                            <ul role="list"></ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-3">
                        <div className="component link-list" id="footer-column-4">
                          <div className="component-content">
                            <h3>About us</h3>
                            <ul role="list">
                              <li className="item0 odd first" role="listitem">
                                <div className="field-link">
                                  <Link
                                    data-variantfieldname="Link"
                                    href="https://www.florafoodgroup.com/"
                                    data-variantitemid="{4F7DE86A-90C2-4626-92AD-9F0E7C8175EB}"
                                  >
                                    Flora Food Group
                                  </Link>
                                </div>
                              </li>
                              <li className="item1 even" role="listitem">
                                <div className="field-link">
                                  <Link
                                    data-variantfieldname="Link"
                                    href="https://www.florafoodgroup.com/contact"
                                    data-variantitemid="{BC11A00C-9A7B-4B37-A813-5738798B04C5}"
                                  >
                                    Contact
                                  </Link>
                                </div>
                              </li>
                              <li className="item2 odd" role="listitem">
                                <div className="field-link">
                                  <Link
                                    data-variantfieldname="Link"
                                    href="https://www.florafoodgroup.com/cookiepolicy"
                                    data-variantitemid="{86B2B363-DB95-43C6-A7F2-AB08AC9E9985}"
                                  >
                                    Cookies
                                  </Link>
                                </div>
                              </li>
                              <li className="item3 even" role="listitem">
                                <div className="field-link">
                                  <Link
                                    data-variantfieldname="Link"
                                    href="https://www.florafoodgroup.com/privacypolicy"
                                    data-variantitemid="{6311FA48-51C9-4C8A-9542-7E7C541585BE}"
                                  >
                                    Privacy Policy
                                  </Link>
                                </div>
                              </li>
                              <li className="item4 odd last" role="listitem">
                                <div className="field-link">
                                  <Link
                                    data-variantfieldname="Link"
                                    href="https://www.florafoodgroup.com/terms-and-conditions"
                                    data-variantitemid="{A958CDEA-A009-47A8-A23C-BF6D1E4DAE53}"
                                  >
                                    Terms &amp; Conditions
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="component link-list" id="footer-column-5">
                          <div className="component-content">
                            <ul role="list"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7">
                <div className="component rich-text" id="footer-rich-text">
                  <div className="component-content">
                    <h3>CONTACT DETAILS</h3>
                    Flora Food US Inc.
                    <br />
                    433 Hackensack Ave. Suite 401
                    <br />
                    Hackensack NJ, 07601
                    <br />
                    <br />
                    This website is directed only to U.S. consumers for products and services of
                    Flora Food Group. This website is not directed to consumers outside of the U.S.
                    and Flora Food Group makes no representation that materials on this website are
                    appropriate or available for use in other locations outside the United States.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="component container">
          <div className="component-content">
            <div className="row component column-splitter">
              <div className="col-12">
                <div className="component plain-html" id="footer-separator-line">
                  <div className="component-content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="component container footer-bottom">
          <div className="component-content">
            <div className="row component column-splitter">
              <div className="col-12 col-sm-12 col-md-6">
                <div className="component image-list image-list-logo" id="footer-social-links">
                  <div className="component-content">
                    <ul role="list">
                      <li className="item0 odd first" role="listitem">
                        <Link
                          target="_blank"
                          title="Instagram"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/violife_foods/"
                        >
                          <img
                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New/Assets/Socials/instagram-icon-white.svg?iar=0&amp;rev=-1"
                            alt=""
                            data-variantitemid="{BE89C870-2E4F-4E5B-A77B-994D60F45DE0}"
                            data-variantfieldname="Image"
                          />
                        </Link>
                      </li>
                      <li className="item1 even last" role="listitem">
                        <Link
                          className="Tik Tok"
                          target="_blank"
                          title="Tik Tok"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/@violife_foods"
                        >
                          <img
                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Icons/tiktok-icon-white.svg?iar=0&amp;rev=934e254a534c46b6806f3b37dd155295"
                            alt="tiktok"
                            data-variantitemid="{A0677EDB-8EE2-4119-86C8-9D41F03767AC}"
                            data-variantfieldname="Image"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <div className="component rich-text" id="footer-copy-right">
                  <div className="component-content">
                    2025 - Flora Food Group | All rights reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <FooterDefaultComponent {...props} />;
};
