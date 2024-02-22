import { IMAGES, NAVITEMS } from "../../config/constants";
import "./header.css";

const HeaderSection = () => {
  return (
    <header className="flex header-container">
      <a className="flex padding-1 header-logo" href="/">
        <img src={IMAGES.logo.image} alt={IMAGES.logo.alt} />
      </a>
      <div className="flex">
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
      <div className="flex towards-right">
        <a className="anchor-none login vertical-center" href="">
          Login
        </a>
        <a className="anchor-none get-trello vertical-center" href="">
          Get Trello for free
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;
