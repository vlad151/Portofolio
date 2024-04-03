import { Box, Card, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import "./style.css";
const PageHeader: FunctionComponent = () => {
  return (
    <Box className="pageHeaderCard">
      <Typography variant="body1" className="greetingText">
        Hi, my name is
      </Typography>
      <Typography variant="h3">Vlad Lazar</Typography>
      <Typography variant="body2">{"<software developer>"}</Typography>

      <Typography variant="body2">
        Hey there! I'm a software developer based in the beautiful Denmark,
        diving deep into the world of coding, and all things tech. I'm
        graduating in 2024 with a degree in Software Engineering, and I'm all
        about turning bold ideas into reality. Whether it's through crafting
        cutting-edge solutions or exploring the latest in technology, I'm on a
        mission to make an impact and have a blast doing it!
      </Typography>
    </Box>
  );
};
export default PageHeader;
