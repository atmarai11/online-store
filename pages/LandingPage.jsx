import React from "react";

import { NavLink } from "react-router-dom";

import { BiSelectMultiple } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";

import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import FeatureCard from "../components/ui/FeatureCard";

const LandingPage = () => {
  const featureContent = [
    {
      id: 1,
      title: "Diverse Products",
      description:
        "Discover an extensive variety of products, ranging from cutting-edge electronics to fashionable apparel and everything in between, catering to diverse needs and preferences.",
      icon: <BiSelectMultiple />,
    },
    {
      id: 2,
      title: "Secure Payments",
      description:
        "Rest easy knowing that your transactions are protected with advanced security measures, providing a safe and secure payment experience for worry-free shopping",
      icon: <RiSecurePaymentLine />,
    },
    {
      id: 3,
      title: "Prompt Support",
      description:
        " Experience quick and responsive assistance from our dedicated customer support team, ready to address any queries, concerns, or issues you may encounter along the way.",
      icon: <MdOutlineSupportAgent />,
    },
    {
      id: 4,
      title: "Convenient Returns",
      description:
        "Enjoy a hassle-free return process, allowing you to easily initiate returns, exchanges, or refunds, ensuring your complete satisfaction and peace of mind with your purchases.",
      icon: <GiReturnArrow />,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container-fluid landing-container">
        <div className="landing-content">
          <div className="landing-text text-center">
            <h1 className="heading-primary landing-heading">
              Elevate Your Shopping Experience with OnlineStore
            </h1>
            <p className="para-sm landing-para">
              Experience the joy of shopping at OnlineStore, your one-stop-shop
              for all your needs. Whether you're searching for the latest
              electronics, fashionable apparel, home essentials, or unique
              gifts, we've got you covered. you'll find everything you need and
              more right here.
            </p>
            <button className="btn-custom btn--big btn--hero text-uppercase ">
              Browse Our Categories
            </button>
          </div>
        </div>
        <h3 className="why-us">Why Choose OnlineStore?</h3>
        <div className="container py-5 grid grid--4-cols">
          {featureContent.map((feature, i) => {
            return (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
        <div className="cta-section">
          <h2 className="heading-secondary">Ready to Start Shopping?</h2>
          <p className="para-md">
            Unlock a world of endless possibilities by creating an account with
            OnlineStore
          </p>
          <div className="cta-action">
            <NavLink to="/login" className="btn-custom cta-signup">
              Signup
            </NavLink>
            <p className="cta-para">
              <span className="cta-or text-uppercase">or</span> Alreay have an
              account?
            </p>
            <NavLink to="/login" className="btn-custom cta-login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
