import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Services from "../components/services";
import Featuredrooms from "../components/featuredrooms";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Epicurean rooms"
          subtitle="deluxe rooms starting at ₦600,000"
        >
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Featuredrooms />
    </React.Fragment>
  );
}
