import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Roomscontainer from "../components/Roomscontainer";
export default function Rooms() {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="Our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <Roomscontainer />
    </React.Fragment>
  );
}
