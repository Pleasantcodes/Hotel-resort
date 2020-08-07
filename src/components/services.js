import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Cocktail recipes. 68 Recipes. Serve these fan-favourite cocktails at your next party. See our best ever classic cocktails, including cosmopolitans, old fashioneds",
      },
      {
        icon: <FaHiking />,
        title: "Amazing hiking experience",
        info:
          "Cocktail recipes. 68 Recipes. Serve these fan-favourite cocktails at your next party. See our best ever classic cocktails, including cosmopolitans, old fashioneds",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Cocktail recipes. 68 Recipes. Serve these fan-favourite cocktails at your next party. See our best ever classic cocktails, including cosmopolitans, old fashioneds",
      },
      {
        icon: <FaBeer />,
        title: "Feel The Rush",
        info:
          "Cocktail recipes. 68 Recipes. Serve these fan-favourite cocktails at your next party. See our best ever classic cocktails, including cosmopolitans, old fashioneds",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
