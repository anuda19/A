import "../styles/frontend-theme.css";
import "../styles/animation.css";
import Image from "next/image";
import FrontNavigation from "../components/FrontNavigation";
import { Inter } from "next/font/google";
import Provider from "@/app/components/Provider";
import { FaEarthAmericas } from "react-icons/fa6";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${process.env.APP_NAME}`,
  description: `${process.env.APP_NAME}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main>
            <main className="main" id="top">
              <nav
                className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
                data-navbar-on-scroll="data-navbar-on-scroll"
              >
                <div className="container">
                  {/* <a className="navbar-brand" href="/">
                    <Image
                      src="/images/logo-front.png"
                      alt="Vercel Logo"
                      width={301}
                      height={49}
                      priority
                    />
                  </a> */}
                  <div className="d-flex align-items-center">
                    <h2 className="text-white me-2 mb-3">
                      <FaEarthAmericas />
                    </h2>
                    <h2 className="fw-bold text-white">BiharTech Solutions</h2>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fa-solid fa-bars text-white fs-3"></i>
                  </button>
                  <FrontNavigation />
                </div>
              </nav>

              {children}
            </main>
            <section>
              <div className="bg-dark overflow-hidden rounded-1">
                <div className="container">
                  <div className="bg-holder promo-bg"></div>
                  <div className="px-5 py-7 position-relative">
                    <h1 className="text-center w-lg-75 mx-auto fs-lg-6 fs-md-4 fs-3 text-white">
                      Get updated with all our announcement.
                    </h1>
                    <div className="row justify-content-center mt-5">
                      <div className="col-auto w-100 w-lg-50">
                        <input
                          className="form-control mb-2 border-light fs-1"
                          type="email"
                          placeholder="Your email address"
                        />
                      </div>
                      <div className="col-auto mt-2 mt-lg-0">
                        <button className="btn btn-success text-dark fs-1">
                          Start now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-0">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-lg-6 col-sm-12">
                    <a href="index.html">
                      <img
                        className="img-fluid mt-5 mb-4"
                        src="assets/img/black-logo.png"
                        alt=""
                      />
                    </a>
                    <p className="w-lg-75 text-gray">
                      Elevate your digital presence to unprecedented heights
                      with BiharTech Solutions PVT. LTD. Our web development
                      services are not just a service; they're a commitment to
                      transforming your digital aspirations into a captivating
                      reality.
                    </p>
                  </div>
                  <div className="col-lg-2 col-sm-4">
                    <h3 className="fw-bold fs-1 mt-5 mb-4">Landings</h3>
                    <ul className="list-unstyled">
                      <li className="my-3 col-md-4">
                        <a href="#">Home</a>
                      </li>
                      <li className="my-3">
                        <a href="#">Products</a>
                      </li>
                      <li className="my-3">
                        <a href="#">Services</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-sm-4">
                    <h3 className="fw-bold fs-1 mt-5 mb-4">Company</h3>
                    <ul className="list-unstyled">
                      <li className="my-3">
                        <a href="#">Home</a>
                      </li>
                      <li className="my-3">
                        <a href="#">Careers</a>
                        <span className="py-1 px-2 rounded-2 bg-success fw-bold text-dark ms-2">
                          Hiring!
                        </span>
                      </li>
                      <li className="my-3">
                        <a href="#">Services</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-sm-4">
                    <h3 className="fw-bold fs-1 mt-5 mb-4">Resources</h3>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <a href="#">Home</a>
                      </li>
                      <li className="mb-3">
                        <a href="#">Products</a>
                      </li>
                      <li className="mb-3">
                        <a href="#">Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray">All rights reserved.</p>
              </div>
            </section>
          </main>
          <Script src="/stickyheader.js" />
        </Provider>
      </body>
    </html>
  );
}
