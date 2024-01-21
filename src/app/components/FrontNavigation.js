"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/frontNav.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button } from "react-bootstrap";

export default function FrontNavigation() {
  const pathname = usePathname();
  const session = useSession();
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link
            href="/"
            className={pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">
              Services <BiSolidDownArrow className="arrow" />
            </button>
            <div className="dropdown-content">
              <Link
                // href="/about"
                href="#"
                className={
                  pathname === "/about" ? "nav-link active" : "nav-link"
                }
              >
                Web Development
              </Link>
              <Link
              href="#"
                // href="/about/impact"
                className={
                  pathname === "/about/impact" ? "nav-link active" : "nav-link"
                }
              >
                App Development
              </Link>
              <Link
              href="#"
                // href="/about/oregonWorkerRelief"
                className={
                  pathname === "/about/oregonWorkerRelief"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Digital Marketing
              </Link>
              <Link
              href="#"
                // href="/about/attorneysInfo"
                className={
                  pathname === "/about/attorneysInfo"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Online Consultation
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">
              Products <BiSolidDownArrow className="arrow" />
            </button>
            <div className="dropdown-content">
              <Link
              href="#"
                // href="/getInvolved"
                className={
                  pathname === "/getInvolved" ? "nav-link active" : "nav-link"
                }
              >
                ERP
              </Link>
              <Link
              href="#"
                // href="/getInvolved/attorneyProgram"
                className={
                  pathname === "/getInvolved/attorneyProgram"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                HRMS
              </Link>
              <Link
              href="#"
                // href="/getInvolved/ecoClinic"
                className={
                  pathname === "/getInvolved/ecoClinic"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                POS
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link
          href="#"
            // href="https://secure.actblue.com/donate/equity-corps"
            className={
              pathname === "https://secure.actblue.com/donate/equity-corps"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Career
          </Link>
        </li>
        <li className="nav-item">
          <Link
            // href="/download"
            href="#"
            className={
              pathname.startsWith("/download") ? "nav-link active" : "nav-link"
            }
          >
            Downloads
          </Link>
        </li>
        {session.data !== null && session.status === "authenticated" ? (
          <li className="nav-item mt-2 mt-lg-0">
            <div className="dropdown">
              <button className="dropbtn">
                My Account <BiSolidDownArrow className="arrow" />
              </button>
              <div className="dropdown-content" style={{right:0}}>
                <Link href="/login" className="nav-link">
                  Dashboard
                </Link>
                <Link
                  href="#!"
                  className="nav-link"
                  onClick={() => signOut({ callbackUrl: "/login" })}
                >
                  Sign Out
                </Link>
              </div>
            </div>
          </li>
        ) : (
          <li className="nav-item mt-2 mt-lg-0">
            <Link
              href="/login"
              className={
                pathname.startsWith("/login") ? "nav-link active" : "nav-link"
              }
            >
              Log In
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
