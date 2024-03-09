import { Box } from "@mui/material";
import ChartSwitcher from "../chart/chart";
import PageHeader from "../header/header";
import "./styles.css";
import ChatUI from "../chatbot/chatUI";
const Content: React.FC = () => {
  return (
    <Box className="appContent">
      <PageHeader />
      <ChatUI />
      <ChartSwitcher />
    </Box>
  );
};
export default Content;
