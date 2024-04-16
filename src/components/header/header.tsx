import { Box, Grid, Typography, useTheme } from "@mui/material";
import { FunctionComponent } from "react";
import "./style.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const PageHeader: FunctionComponent = () => {
  const theme = useTheme();
  return (
    <Grid className="pageHeaderCard" container>
      <Grid>
        <Typography
          variant="body1"
          sx={{ color: `${theme.palette.text.secondary}` }}
        >
          Hi, my name is
        </Typography>
        <Typography variant="h3">Vlad Lazar</Typography>
        <Typography
          variant="body2"
          sx={{ color: `${theme.palette.text.secondary}` }}
        >
          {"<software developer>"}
        </Typography>

        <Typography variant="body2">
          Hello there! I'm a software developer based in the beautiful Denmark,
          diving deep into the world of coding, and all things tech. I'm
          graduating in 2024 with a degree in Software Engineering, and I'm all
          about turning bold ideas into reality. Whether it's through crafting
          cutting-edge solutions or exploring the latest in technology, I'm on a
          mission to make an impact and have a blast doing it!
        </Typography>
        <Box>
          <Typography>{"Let's connect :D"}</Typography>
          <a
            className="linkStyle"
            href="https://www.github.com/vlad151"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="linkIcon" />
          </a>
          <a
            className="linkStyle"
            href="https://www.linkedin.com/in/lazar-vlad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="linkIcon" />
          </a>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PageHeader;
