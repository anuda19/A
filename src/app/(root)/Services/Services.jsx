"use client";
import Image from "next/image";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { SiWebmoney } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { GiDigitalTrace } from "react-icons/gi";
import '../../styles/home.css';
import Link from "next/link";

const Services = () => {
  return (
    <div>
      <p className="text-center mt-5 mb-5 text-blk team-head-text">Our Services</p>
      <div className="position-relative">
        <div className="text-center">
          <Image src="/images/services.jpg" height={300} width={1400} className="shadow" />
        </div>
        <div className="d-flex justify-content-center services_cards">
          <div className="mx-5 services_card">
            <Card style={{ width: "20rem", height:"22rem" }} className="bg-white">
              <SiWebmoney size={70} className="services_card_icon"/>
              <Card.Body>
                <Card.Title className="fw-bold">Web Devlopment</Card.Title>
                <Card.Text>
                At BiharTech Solutions PVT. LTD., we understand that one size does not fit all. Our web development services are crafted with precision, tailored to meet the unique needs and aspirations of your business. 
                </Card.Text>
                <Link href="#">More</Link>
              </Card.Body>
            </Card>
          </div>
          <div className="mx-5 services_card">
            <Card style={{ width: "20rem", height:"22rem"  }} className="bg-white">
            <FaMobileAlt size={70} className="services_card_icon"/>
              <Card.Body>
                <Card.Title className="fw-bold">App Devlopment</Card.Title>
                <Card.Text>
                At BiharTech Solutions PVT. LTD., we recognize the uniqueness of every app idea. Our app development services are tailored to your specific needs, ensuring a customized solution that aligns with your brand identity.
                </Card.Text>
                <Link href="#">More</Link>
              </Card.Body>
            </Card>
          </div>
          <div className="mx-5 services_card">
            <Card style={{ width: "20rem", height:"22rem"  }} className="bg-white">
            <GiDigitalTrace size={70} className="services_card_icon"/>
              <Card.Body>
                <Card.Title className="fw-bold">Digital Marketing</Card.Title>
                <Card.Text>
                At BiharTech Solutions PVT. LTD., we understand that one-size-fits-all doesn't apply to digital marketing. Our services are tailored to your brand's unique identity and goals. 
                </Card.Text>
                <Link href="#">More</Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
