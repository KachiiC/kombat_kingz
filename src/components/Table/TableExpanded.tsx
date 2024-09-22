import { expandedTableData } from "../../data/dummyLeagueData";
import { TableChart } from "./TableChart";

interface ITableExpanded {
  row: any;
}

export const TableStatics = ({ row }: ITableExpanded) => {
  const displayedExpandedRows = expandedTableData.map(
    ({ label, key }, index) => (
      <div className="site-table-body-row-expanded-stat" key={index}>
        <div className="site-table-body-row-expanded-stat-label">
          {label}:&nbsp;
        </div>
        <div className="site-table-body-row-expanded-stat-value">
          {row[key]}
        </div>
      </div>
    )
  );

  return (
    <div className="site-table-body-row-expanded-stat-container">
      {displayedExpandedRows}
    </div>
  );
};

export const TableExpanded = ({ row }: ITableExpanded) => {
  return (
    <div className="site-table-body-row-expanded">
      <div className="site-table-body-row-expanded-title">
        {row.user}'s Statistics
      </div>
      <div className="site-table-body-row-expanded-content">
        <TableStatics row={row} />
        <TableChart row={row} />
      </div>
    </div>
  );
};
