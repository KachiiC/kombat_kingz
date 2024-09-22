import { faPlusCircle, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type columnKeys =
  | "name"
  | "record"
  | "country"
  | "height"
  | "reach"
  | "legReach"
  | "odds";

interface IFightCorner {
  name: string;
  record: string;
  country: string;
  height: string;
  reach: number;
  legReach: number;
  odds: string;
}

interface ISingleFight {
  fight: {
    division: string;
    blueCorner: IFightCorner;
    redCorner: IFightCorner;
    rounds: number;
    id: string;
  };
}

interface IFighterStats {
  key: columnKeys;
  label: string;
}

const fighterStats: IFighterStats[] = [
  { key: "name", label: "Name" },
  { key: "record", label: "Record" },
  { key: "odds", label: "Odds" }
];

const expandedFighterStats: IFighterStats[] = [
  { key: "country", label: "Country" },
  { key: "height", label: "Height" },
  { key: "reach", label: "Reach" },
  { key: "legReach", label: "Leg Reach" }
];

export const SingleFight = ({ fight }: ISingleFight) => {
  const { division, blueCorner, redCorner, rounds } = fight;

  const [cookies, setCookie] = useCookies([fight.id]);

  const [showStats, setShowStats] = useState(false);
  const [selectedWinner, setSelectedWinner] = useState("");
  const [selectedRound, setSelectedRound] = useState<number>(1);
  const [selectedMethod, setSelectedMethod] = useState("");

  useEffect(() => {
    if (cookies[fight.id]) {
      const cookieData = cookies[fight.id];

      setSelectedWinner(cookieData?.selectedWinner ?? "");
      setSelectedRound(cookieData?.selectedRound ?? 1);
      setSelectedMethod(cookieData?.selectedMethod ?? "");
    }
  }, []);

  useEffect(() => {
    setCookie(
      fight.id,
      JSON.stringify({ selectedWinner, selectedRound, selectedMethod })
    );
  }, [selectedWinner, selectedRound, selectedMethod]);

  const renderStatRow = (data: IFighterStats[]) => {
    return data.map(({ key, label }, index) => (
      <div className="event-fight-stats-single" key={index}>
        <div className="event-fight-stats-single-column">
          {redCorner[key as columnKeys]}
        </div>
        <div className="event-fight-stats-single-label">{label}</div>
        <div className="event-fight-stats-single-column">
          {blueCorner[key as columnKeys]}
        </div>
      </div>
    ));
  };

  const statRow = renderStatRow(fighterStats);
  const expandedStatRow = renderStatRow(expandedFighterStats);

  const roundMarks = [
    {
      value: 1,
      label: "1"
    },
    {
      value: 2,
      label: "2"
    },
    {
      value: 3,
      label: "3"
    }
  ];

  const fiveFoundMarks = [
    ...roundMarks,
    {
      value: 4,
      label: "4"
    },
    {
      value: 5,
      label: "5"
    }
  ];

  const renderedRounds = rounds === 5 ? fiveFoundMarks : roundMarks;

  const renderedMarks = renderedRounds.map(({ label, value }) => (
    <div className="event-fight-single-slide-mark" key={value}>
      {label}
    </div>
  ));

  return (
    <div className="event-fight-single">
      <div className="event-fight-single-division">{division} bout</div>
      {statRow}
      <div className="event-fight-single-form">
        <div className="event-fight-single-select">
          <div className="event-fight-single-select-label">
            Winner: {selectedWinner}
          </div>
          <select
            className="event-fight-single-select-input"
            value={selectedWinner}
            onChange={(e) => {
              const targetVal = e.target.value as string;

              if (targetVal === "draw") {
                setSelectedRound(rounds);
                setSelectedMethod("decision");
              }

              setSelectedWinner(targetVal);
            }}
          >
            <option>Select a winner</option>
            <option value={redCorner.name}>{redCorner.name}</option>
            <option value={blueCorner.name}>{blueCorner.name}</option>
            <option value="draw">Draw</option>
          </select>
        </div>
        <div className="event-fight-single-select">
          <div className="event-fight-single-select-label">
            Method: {selectedMethod}
          </div>
          <select
            className="event-fight-single-select-input"
            value={selectedMethod}
            onChange={(e) => {
              const targetVal = e.target.value as string;
              if (targetVal === "decision") {
                setSelectedRound(rounds);
              }
              setSelectedMethod(targetVal);
            }}
          >
            <option>Select a method</option>
            <option value="knockout">Knockout</option>
            <option value="submission">Submission</option>
            <option value="decision">Decision</option>
          </select>
        </div>
        <div className="event-fight-single-slide">
          <div className="event-fight-single-slide-label">
            Select Round: Round {selectedRound}
          </div>
          <input
            type="range"
            min={1}
            max={rounds}
            value={selectedRound}
            className="event-fight-single-slide-input"
            onChange={(e) => setSelectedRound(Number(e.target.value))}
          />
          <div className="event-fight-single-slide-mark-container">
            {renderedMarks}
          </div>
        </div>
      </div>
      <div
        className="event-fight-single-expand"
        onClick={() => {
          setShowStats(!showStats);
        }}
      >
        <div className="event-fight-single-expand-title">Show More Stats</div>
        <div className="event-fight-single-expand-icon">
          <FontAwesomeIcon icon={showStats ? faSubtract : faPlusCircle} />
        </div>
      </div>
      {showStats && <div className="event-fight-stats">{expandedStatRow}</div>}
    </div>
  );
};
