import { FC } from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerLinksData } from "../../data/footerData";

export const SiteFooter: FC = () => {
  const iconList = footerLinksData.map(({ link, icon }, index) => {
    return (
      <a href={link} target="_blank" className="link" key={index}>
        <FontAwesomeIcon icon={icon} />
      </a>
    );
  });
  return (
    <footer id="footer">
      <div className="col col1">
        <h3>Kombat Kingz</h3>
        <div className="social">
            {iconList}
        </div>
        <p>2024 © Kombat Kingz</p>
        <p>Website designed by Kachi Cheong</p>
      </div>
      <div className="col col3">
        <p>Home</p>
        <p>Podcast</p>
        <p>League</p>
        <p>About</p>
      </div>
      <div className="backdrop"></div>
    </footer>
  );
};
