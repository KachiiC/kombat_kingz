import { FC } from "react";
import { PageContainer } from "../../components/container";
import "./Podcast.scss";
import { podcastData } from "../../data/podcastData";

export const Podcast: FC = () => {
  const displayedEntries = podcastData.map(
    ({ link, thumbnail, title, description }, index) => (
      <a href={link} target="_blank" key={index}>
        <div className="podcast-entries-single">
          <div className="podcast-entries-thumbnail">
            <img src={thumbnail} />
          </div>
          <div className="podcast-entries-text">
            <div className="podcast-entries-text-title">{title}</div>
            <div className="podcast-entries-text-description">
              {description}
            </div>
          </div>
        </div>
      </a>
    )
  );

  return (
    <PageContainer>
      <div className="podcast-page">
        <h1>Podcast</h1>
        <div className="podcast-entries">{displayedEntries}</div>
      </div>
    </PageContainer>
  );
};
