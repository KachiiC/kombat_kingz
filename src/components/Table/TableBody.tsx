import { faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ITableColumn } from "./Table.types";
import { useState } from "react";
import { TableExpanded } from "./TableExpanded";

interface ITableBody {
  data: any[];
  columns: ITableColumn[];
}

interface ITableBodyRow {
  columns: ITableColumn[];
  row: any;
}

export const TableBodyRow = ({ row, columns }: ITableBodyRow) => {
  const [expandedRow, setExpandedRow] = useState(false);

  const tableBodyColumn = columns.map((column) => (
    <div className="site-table-body-column" key={column.key}>
      {row[column.key]}
    </div>
  ));

  return (
    <>
      <div
        className="site-table-body-row"
        onClick={() => {
          setExpandedRow(!expandedRow);
        }}
      >
        <div className="site-table-body-column-list">{tableBodyColumn}</div>
        <div className="site-table-body-column-btn">
          <FontAwesomeIcon icon={expandedRow ? faSubtract : faPlus} />
        </div>
      </div>
      {expandedRow && <TableExpanded row={row} />}
    </>
  );
};

export const TableBody = ({ data, columns }: ITableBody) => {
  const tableBody = data.map((tableRow, index) => (
    <TableBodyRow row={tableRow} key={index} columns={columns} />
  ));

  return <div className="site-table-body">{tableBody}</div>;
};
