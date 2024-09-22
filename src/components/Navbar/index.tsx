import { Link } from "react-router-dom";
import "./Navbar.scss";
import BannerLogo from "../../assets/banner.jpg";
import { menuData } from "../../data/menuData";

export const SiteNavbar = () => {
  const linksList = menuData.map(({ label, slug }, index) => {
    return (
      <div className="site-navbar-link-single" key={index}>
        <Link to={`/${slug}`}>{label}</Link>
      </div>
    );
  });
  return (
    <div className="site-navbar">
      <div className="site-navbar-container">
        <div className="site-navbar-heading">
          <Link to="/">
            <div className="site-navbar-title">
              <div className="site-navbar-title-logo">
                <img src={BannerLogo}></img>
              </div>
              <div className="site-navbar-title-link">Kombat Kingz</div>
            </div>
          </Link>
        </div>
        <div className="site-navbar-link-list">{linksList}</div>
      </div>
    </div>
  );
};
