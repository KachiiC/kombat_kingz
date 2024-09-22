import { useEffect, useState } from "react";
import "./Table.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { TableBody } from "./TableBody";

interface ITable {
  columns: {
    label: string;
    key: string;
  }[];
  data: any[];
  defaultSort?: string;
  searchPlaceHolder?: string;
}

type sortOrder = "asc" | "dsc";

export const SiteTable = ({
  columns,
  data,
  defaultSort,
  searchPlaceHolder
}: ITable) => {
  const [displayData, setDisplayData] = useState(data);
  const [sortKey, setSortKey] = useState(defaultSort ?? columns[0]?.key);
  const [sortOrder, setSortOrder] = useState<sortOrder>("asc");
  const [searchInput, setSearchInput] = useState("");

  const sortData = (inputKey: string, inputSort: sortOrder) => {
    return displayData.sort((a, b) => {
      const aKey = a[inputKey];
      const bKey = b[inputKey];

      const isAsc = inputSort === "asc";

      if (typeof aKey === "string" && typeof bKey === "string") {
        if (isAsc) {
          return aKey.localeCompare(bKey);
        }

        return bKey.localeCompare(aKey);
      }

      if (isAsc) {
        return aKey - bKey;
      }

      return bKey - aKey;
    });
  };

  useEffect(() => {
    const filteredData = displayData.filter(({ user }) =>
      user.toLowerCase().includes(searchInput.toLowerCase())
    );

    setDisplayData(searchInput === "" ? data : filteredData);
  }, [searchInput]);

  const tableHeadings = columns.map(({ label, key }, index) => {
    const isSortedColumn = sortKey === key;
    const sortIcon =
      sortOrder === "asc" ? faArrowAltCircleUp : faArrowAltCircleDown;

    const handleClick = () => {
      if (isSortedColumn) {
        const newOrder = sortOrder === "asc" ? "dsc" : "asc";

        setDisplayData(sortData(key, newOrder));
        setSortOrder(newOrder);
      } else {
        setDisplayData(sortData(key, "asc"));
        setSortKey(key);
      }
    };

    return (
      <div
        className="site-table-heading-column"
        key={index}
        onClick={handleClick}
      >
        <div className="site-table-heading-column-text">{label}</div>
        <div className="site-table-heading-column-sort-icon">
          {isSortedColumn && <FontAwesomeIcon icon={sortIcon} />}
        </div>
      </div>
    );
  });

  return (
    <div className="site-table">
      <div className="site-table-search">
        <div className="site-table-search-input">
          <input
            value={searchInput}
            placeholder={searchPlaceHolder ?? ""}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <div className="site-table-search-input-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      <div className="site-table-container">
        <div className="site-table-heading-row">
          <div className="site-table-heading-column-list">{tableHeadings}</div>
          <div className="site-table-heading-column-placeholder"></div>
        </div>
        <TableBody columns={columns} data={displayData} />
      </div>
    </div>
  );
};
