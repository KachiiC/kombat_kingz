import { FC } from "react";
import "./About.scss";
import { PageContainer } from "../../components/container";

export const About: FC = () => {
  return (
    <PageContainer>
      <div className="about-page">
        <div className="about-title">About Us</div>
        <div className="about-description">
          A weekly show from the most passionate MMA pundits. Voicing our
          opinions on the fight game, no matter how wild and extreme. We assure
          you technical views, heated debates and jokes along the way to crown
          the undisputed Kombat King! Hosts: Rimz, Lankz, Braggz.
        </div>
      </div>
    </PageContainer>
  );
};
