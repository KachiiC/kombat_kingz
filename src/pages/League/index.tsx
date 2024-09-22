import { FC } from "react";
import { PageContainer } from "../../components/container";
import { SiteTable } from "../../components/Table";
import { testColumnsData, testData } from "../../data/dummyLeagueData";
import "./League.scss";

export const League: FC = () => {
  return (
    <PageContainer>
      <div className="league-page">
        <h1>Kombat Kingz League</h1>
        <SiteTable
          data={testData}
          columns={testColumnsData}
          searchPlaceHolder="Search for User"
        />
      </div>
    </PageContainer>
  );
};
