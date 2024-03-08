import { Box } from "@mui/material";
import ChartSwitcher from "../chart/chart";
import PageHeader from "../header/header";
import "./styles.css";
const Content: React.FC = () => {
  return (
    <Box className="appContent">
      <PageHeader />
      <ChartSwitcher />
    </Box>
  );
};
export default Content;
