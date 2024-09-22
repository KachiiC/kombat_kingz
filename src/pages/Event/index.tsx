import { FC } from "react";
import { PageContainer } from "../../components/container";
import "./Event.scss";
import { testEventsData } from "../../data/testData";
import { SingleFight } from "./SingleFight";

export const Event: FC = () => {
  const fightsList = testEventsData.fights.map((obj, index) => (
    <SingleFight fight={obj} key={index} />
  ));
  return (
    <PageContainer>
      <div className="event-page">
        <h1>{testEventsData.eventTitle}</h1>

        <div className="event-fight-container">{fightsList}</div>
      </div>
    </PageContainer>
  );
};
