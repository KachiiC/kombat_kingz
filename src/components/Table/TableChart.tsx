import { PieChart } from "@mui/x-charts/PieChart";
import { ResponsiveContainer } from "recharts";

interface ITableChart {
  row: any;
}

export const TableChart = ({ row }: ITableChart) => {
  const dataSeries = [
    {
      data: [
        {
          id: row.id,
          value: row?.knockoutsPredicted,
          label: "Knockouts"
        },
        {
          id: row.id,
          value: row?.submissionsPredicted,
          label: "Submissions"
        },
        {
          id: row.id,
          value: row?.decisionsPredicted,
          label: "Decisions"
        }
      ],
      arcLabel: (item: any) => `${item.value}`
    }
  ];

  return (
    <div className="site-table-body-row-expanded-chart">
      <PieChart
        colors={["#00b800", "#509bff", "#ffc929"]}
        series={dataSeries}
        width={400}
        height={200}
      />
    </div>
  );
};
