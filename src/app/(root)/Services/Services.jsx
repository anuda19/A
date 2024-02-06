
import "../../styles/home.css";

const Services = () => {
  return (
    <main class="services_main">
      <div class="container">
        <div class="inner">
          <div class="inner__headings">
          <p class="text-blk team-head-text mt-4">Our Services</p>
          </div>
        </div>
        <div class="cards-grid">
          <div class="card">
            <img
              class="card__icon"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2709552/icon-ux.svg"
              alt="ux-design"
            />
            <div class="card__body">
              <h4 class="card__head">Web Devlopment</h4>
              <p class="card__content">
              At BiharTech Solutions PVT. LTD., we understand that one size does not fit all. Our web development services are crafted with precision, tailored to meet the unique needs and aspirations of your business. 
              </p>
            </div>
          </div>
          <div class="card">
            <img
              class="card__icon"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2709552/icon-dev.svg"
              alt="development"
            />
            <div class="card__body">
              <h4 class="card__head">App Devlopment</h4>
              <p class="card__content">
              At BiharTech Solutions PVT. LTD., we recognize the uniqueness of every app idea. Our app development services are tailored to your specific needs, ensuring a customized solution that aligns with your brand identity.
              </p>
            </div>
          </div>
          <div class="card">
            <img
              class="card__icon"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2709552/icon-brand.svg"
              alt="brand"
            />
            <div class="card__body">
              <h4 class="card__head">Digital Marketing</h4>
              <p class="card__content">
              At BiharTech Solutions PVT. LTD., we understand that one-size-fits-all doesn't apply to digital marketing. Our services are tailored to your brand's unique identity and goals. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
