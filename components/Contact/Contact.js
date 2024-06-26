import React from "react";
import Link from "next/link";

import ContactForm from "./ContactForm";

const Contact = () => {
  const address = [
    "https://maps.app.goo.gl/Tptahpjm2yRov5vPA",
  ]
  return (
    <>
      <div className="main-content">
        <div className="rainbow-contact-area rainbow-section-gapTop-big">
          <div className="container">
            <div className="row mt--10 row--15">
              <div className="col-lg-8">
                <div className="contact-details-box">
                  {/* <h3 className="title">Get Started with a free quotation</h3> */}

                  <div className="profile-details-tab">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="image-genarator"
                        role="tabpanel"
                        aria-labelledby="image-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="photo-editor"
                        role="tabpanel"
                        aria-labelledby="photo-editor-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="email-genarator"
                        role="tabpanel"
                        aria-labelledby="email-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="code-genarator"
                        role="tabpanel"
                        aria-labelledby="code-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt_md--30 mt_sm--30">
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                  </div>
                  <div className="inner" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <h4 className="title">Location</h4>
                    <div className="b2">
                      <h2 className="title" style={{ fontSize: '1.4rem' }}>Pakistan</h2>
                      <Link href={address[0]} target="_blank">21-C 5th Zamzama Street, Zamzama <br /> Commercial Area, Phase-5, DHA Karachi</Link>
                    </div>
                    <div className="b2">
                      <h2 className="title" style={{ fontSize: '1.4rem' }}>UAE</h2>
                      <Link href={address[0]} target="_blank">Office 212, 2nd Floor, Pyramid <br /> Center, Oud metha, Dubai</Link>
                    </div>
                    <div className="b2">
                      <h2 className="title" style={{ fontSize: '1.4rem' }}>USA</h2>
                      <Link href={address[0]} target="_blank">12614 10th St. Chino, <br /> CA 91710, Los Angeles, USA</Link>
                    </div>
                  </div>
                </div>
                {/* <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-headphones"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact Number</h4>
                    <p className="b2">
                      <Link href="#">111-222-45</Link>
                    </p>
                  </div>
                </div> */}
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-envelope"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Email Address</h4>
                    <p className="b2">
                      <Link href="mailto:info@indenta.ai">info@indenta.ai</Link>
                    </p>
                    {/* <p className="b2">
                      <Link href="mailto:example@gmail.com">
                        example@gmail.com
                      </Link>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
