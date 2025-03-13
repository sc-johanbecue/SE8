import React from 'react'; //{ useState }
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type FooterProps = {
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
  // // Handle input click event
  // const handleInputClick = (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   console.log('Input clicked:', event.target);
  // };

  return (
    <>
      <div className="container pb-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-6">
            <h2 className="font-weight-normal text-color-dark text-center text-8 mb-4">
              <strong className="font-weight-extra-bold">Contact</strong> Us
            </h2>
            <p className="text-4 opacity-8 text-center mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.
              Nullam id varius nunc. Vivamus bibendum
            </p>
            <form className="contact-form form-style-3" action="php/contact-form.php" method="POST">
              <div className="contact-form-success alert alert-success d-none">
                Message has been sent to us.
              </div>
              <div className="contact-form-error alert alert-danger d-none">
                Error sending your message.
                <span className="mail-error-message text-1 d-block"></span>
              </div>
              <input type="hidden" value="" name="subject" id="subject" />
              <div className="row">
                <div className="form-group col-md-6 pe-md-2">
                  <input
                    type="text"
                    data-msg-required="Please enter your name."
                    maxLength={100}
                    className="form-control h-auto py-2"
                    placeholder="Your Name..."
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6 ps-md-2">
                  <input
                    type="text"
                    data-msg-required="Please enter your phone."
                    maxLength={100}
                    className="form-control h-auto py-2"
                    placeholder="Your Phone..."
                    name="phone"
                    id="phone"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  data-msg-required="Please enter your email address."
                  data-msg-email="Please enter a valid email address."
                  maxLength={100}
                  className="form-control h-auto py-2"
                  placeholder="Your Email Address..."
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="row">
                <div className="form-group col">
                  <textarea
                    maxLength={5000}
                    data-msg-required="Please enter your message."
                    rows={4}
                    className="form-control"
                    placeholder="Your Message..."
                    name="message"
                    id="message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col text-center">
                  <input
                    type="submit"
                    defaultValue="SUBMIT"
                    className="btn btn-primary font-weight-semibold text-3 px-5 btn-py-2"
                    data-loading-text="Loading..."
                    readOnly
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-copyright curved-border curved-border-top d-flex align-items-center">
        <div className="container py-2">
          <div className="row py-4">
            <div className="col text-center">
              <p className="text-3">
                2024 ©{' '}
                <strong className="font-weight-normal text-color-light opacity-7">
                  Porto Template
                </strong>{' '}
                - Copyright. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return <FooterDefaultComponent {...props} />;
};
