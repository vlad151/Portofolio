import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import skillsData from "./skillsData";
import { Box, ToggleButton, Typography } from "@mui/material";
import "./styles.css";
import { getIconUrlByName } from "./hooks";
const ChartSwitcher = () => {
  const chartRef = useRef(null);
  const [chartType, setChartType] = useState("sunburst");

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const getOption = () => {
        const commonSeriesOptions = {
          animationDuration: 1000,
          animationEasing: "cubicOut",
        };
        if (chartType === "treemap") {
          return {
            series: [
              {
                ...commonSeriesOptions,
                type: "treemap",
                data: skillsData,
              },
            ],
            tooltip: {
              formatter: function (params: any) {
                const iconUrl = getIconUrlByName(params.name);

                if (params.name === "Romanian") {
                  return `<div><img src="${iconUrl}" style="width: 20px; vertical-align: middle;" /> ${params.name} <img src="https://cdn.icon-icons.com/icons2/2087/PNG/512/romania_icon_127849.png" style="width: 20px;" /></div>`;
                }
                return `<div><img src="${iconUrl}" style="width: 20px; vertical-align: middle;" /> ${params.name} </div>`;
              },
            },
          };
        } else {
          return {
            series: {
              ...commonSeriesOptions,
              type: "sunburst",
              data: skillsData,
              radius: [20, "90%"],
              itemStyle: {
                borderWidth: 2,
              },
            },
            tooltip: {
              formatter: function (params: any) {
                const iconUrl = getIconUrlByName(params.name);

                if (params.name === "Romanian") {
                  return `<div><img src="${iconUrl}" style="width: 20px; vertical-align: middle;" /> ${params.name} <img src="https://cdn.icon-icons.com/icons2/2087/PNG/512/romania_icon_127849.png" style="width: 20px;" /></div>`;
                }
                return `<div><img src="${iconUrl}" style="width: 20px; vertical-align: middle;" /> ${params.name} </div>`;
              },
            },
          };
        }
      };

      myChart.setOption(getOption(), true);

      return () => {
        myChart.dispose();
      };
    }
  }, [chartType]);

  return (
    <Box className="chartContainer">
      <ToggleButton
        value={chartType === "treemap" ? "treemap" : "sunburst"}
        onClick={() =>
          setChartType(chartType === "treemap" ? "sunburst" : "treemap")
        }
      >
        <Typography>Switch Chart</Typography>
      </ToggleButton>
      <Box
        className="chart"
        ref={chartRef}
        sx={{
          width: "100%",
          height: "600px",
        }}
      />
    </Box>
  );
};

export default ChartSwitcher;
