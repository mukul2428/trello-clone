import { IMAGES, NAVITEMS } from "../../config/constants";
import "./header.css";

const HeaderSection = () => {
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
                <button className="header-btn" key={item.id}>
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
      <div style={{ height: "110vh" }}></div>
    </>
  );
};

export default HeaderSection;
