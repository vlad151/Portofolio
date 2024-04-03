import { Box } from "@mui/material";
import ChartSwitcher from "../chart/chart";
import PageHeader from "../header/header";
import "./styles.css";
import ChatUI from "../chatbot/chatUI";
import ProjectList from "../projectList/projectList";
const Content: React.FC = () => {
  return (
    <Box className="appContent">
      <PageHeader />
      <ChatUI />
      <ProjectList />
      <ChartSwitcher />
    </Box>
  );
};
export default Content;
