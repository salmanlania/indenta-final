import React from "react";

const ContactForm = () => {
  return (
    <>
      <form action="#" className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="firstname1">First Name</label>
            <input id="firstname1" type="text" placeholder="Enter Your First Name" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="lastname1">Last Name</label>
            <input id="lastname1" type="text" placeholder="Enter Your Last Name" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="username1">Email</label>
            <input id="username1" type="email" placeholder="Enter Your Email" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="phonenumber1">Phone Number</label>
            <input id="phonenumber1" type="tel" placeholder="Enter Your Contact Number" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="bio1">Bio</label>
            <textarea
              id="bio1"
              cols="20"
              rows="5"
              placeholder="Enter Your Bio"
              // placeholder="I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."
            ></textarea>
          </div>
        </div>
        <div className="col-12 mt--20">
          <div className="form-group mb--0">
            <a className="btn-default" href="#">
              {/* Update Info */}
              Contact Us
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
