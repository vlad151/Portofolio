import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import skillsData from "./skillsData";
import { Box, Button, Typography } from "@mui/material";

const ChartSwitcher = () => {
  const chartRef = useRef(null);
  const [chartType, setChartType] = useState("treemap");

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const getOption = () => {
        if (chartType === "treemap") {
          return {
            series: [
              {
                type: "treemap",
                data: skillsData,
              },
            ],
          };
        } else {
          return {
            series: {
              type: "sunburst",
              data: skillsData,
              radius: [0, "90%"],
            },
          };
        }
      };

      myChart.setOption(getOption());

      return () => {
        myChart.dispose();
      };
    }
  }, [chartType]);

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() =>
          setChartType(chartType === "treemap" ? "sunburst" : "treemap")
        }
      >
        <Typography>Switch Chart</Typography>
      </Button>
      <div ref={chartRef} style={{ width: "100%", height: "1000px" }}></div>
    </Box>
  );
};

export default ChartSwitcher;
