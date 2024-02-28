import { useState } from "react";
import { IMAGES, NAVITEMS } from "../../config/constants";
import "./header.css";

const HeaderSection = () => {
  const features = [
    "views",
    "automation",
    "powerups",
    "templates",
    "integration",
  ];

  const features_content = [
    "View your team's projects from every angle.",
    "Automate tasks and workflows with Butler automation.",
    "Power up your teams by linking their favorite tools with Trello plugins.",
    "Give your team a blueprint for success with easy-to-use templates from industry leaders and the Trello community.",
    "Find the apps your team is already using or discover new ways to get work done in Trello.",
  ];

  // const solutions = [
  //   "marketing_teams",
  //   "product_management",
  //   "engineeering_teams",
  //   "design_teams",
  //   "startups",
  //   "remote_teams",
  // ];

  const [showNavItems, setShowNavItems] = useState(false);

  function showNavDetails() {
    setShowNavItems(!showNavItems);
  }
  return (
    <>
      <header className="header-top">
        <div className="flex header-container">
          <a className="nav-logo flex padding-1 vertical-center" href="/">
            <img src={IMAGES.logo.image} alt={IMAGES.logo.alt} />
          </a>
          <div className="nav-items flex">
            {NAVITEMS.map((item) => {
              return (
                <button
                  onClick={showNavDetails}
                  className="header-btn"
                  key={item.id}
                >
                  <span>{item.itemName}</span>
                  {item.itemName !== "Pricing" && (
                    <img
                      src={IMAGES.down_arrow.image}
                      alt={IMAGES.down_arrow.alt}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="nav-routes flex towards-right">
            <a className="anchor-none login vertical-center" href="">
              Login
            </a>
            <a className="anchor-none get-trello vertical-center" href="">
              Get Trello for free
            </a>
          </div>
          <button className="nav-burger">
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>
      {showNavItems && (
        <div className="nav-details">
          {/* first nav item */}
          <div>
            <div className="flex">
              <div className="nav-item-details-1">
                <div className="flex">
                  <h3 className="nav-items-heading">
                    Explore the features that help your team succeed
                  </h3>
                  <nav className="flex">
                    {features.map((feature, index) => {
                      console.log(feature);
                      return (
                        <a className="header-anchor" key={index} href="">
                          <div className="flex link-data">
                            <div>
                              <img
                                style={{ height: "1.2rem", width: "auto" }}
                                src={IMAGES[feature].image}
                                alt={IMAGES[feature].alt}
                              />
                            </div>
                            <p>{feature}</p>
                          </div>
                          <div>
                            <p>{features_content[index]}</p>
                          </div>
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </div>
              <div className="nav-item-details-2">
                <div className="met-trello-content">
                  <h3 className="nav-items-heading met-trello">Meet Trello</h3>
                  <p>
                    Trello makes it easy for your team to get work done. No
                    matter the project, workflow, or type of team, Trello can
                    help keep things organized. It's simple - sign-up, create a
                    board, and you're off! Productivity awaits.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default HeaderSection;
