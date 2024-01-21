"use client";
import "../../styles/home.css";

const ContactUs = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="container">
          <div>
            <p className=" text-blk team-head-text">Contact Us</p>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center flex-column">
              <h3>BiharTech Solutions PVT. LTD.</h3>
              <p>
                In the dynamic world of online business, your digital presence
                is your most potent asset. Elevate your brand, captivate your
                audience, and outpace your competition with our cutting-edge web
                development services. Discover a transformative journey where
                innovation meets functionality, and where your vision is
                seamlessly translated into a captivating digital reality.
              </p>
            </div>
            <div className="col-2"></div>
            <div className="col-md-6">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="btn btn-block" type="submit">
                  Send Now!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
