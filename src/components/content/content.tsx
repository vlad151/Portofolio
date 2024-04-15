import { Box, Grid, Typography, useTheme } from "@mui/material";
import ChartSwitcher from "../chart/chart";
import PageHeader from "../header/header";
import "./styles.css";
import ChatUI from "../chatbot/chatUI";
import ProjectList from "../projectList/projectList";
const Content: React.FC = () => {
  const theme = useTheme();
  return (
    <Box className="appContent">
      <Grid
        container
        className="alignCenter"
        sx={{ marginBottom: "50px !important" }}
      >
        <Grid item xs={10} md={8} sx={{ margin: { xs: 1, md: 0 } }}>
          <PageHeader />
        </Grid>
        <Grid className="alignCenter" item>
          <Grid item xs={10} md={8} sx={{ margin: { xs: 1, md: 0 } }}>
            <Typography
              variant="body1"
              sx={{ color: `${theme.palette.text.secondary}` }}
            >
              My Skills Spectrum:
            </Typography>
            <Typography variant="body2">
              Discover the visual symphony of my technical proficiencies with
              the interactive Skills Spectrum. This dynamic wheel doesn't just
              chart my expertise; it's a radial representation of the diverse
              skill set I bring to the table. From the robust backend frameworks
              to the sleek stylings of front-end development, each segment of
              the wheel illuminates a part of the complete developer that I am:
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={10} className="alignCenter">
          <ChartSwitcher />
        </Grid>
        <Grid
          container
          className="alignCenter"
          sx={{
            flexDirection: "row-reverse",
            marginBottom: { xs: 2, md: 2 },
            marginTop: { xs: 2, md: 2 },
          }}
        >
          <Grid item xs={10} sm={10} md={8} sx={{ margin: { xs: 1, md: 0 } }}>
            <Typography
              variant="body1"
              sx={{ color: `${theme.palette.text.secondary}` }}
            >
              Explore My Portfolio:
            </Typography>
            <Typography variant="body2">
              Step into the digital showcase of my ingenuity – a curated
              collection of projects where code meets creativity. Each project
              is a digital tapestry woven with the threads of cutting-edge
              technology and innovative problem-solving.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sm={10}
            sx={{ margin: { xs: 1, md: 0 } }}
            className="alignCenter"
          >
            <ProjectList />
          </Grid>
        </Grid>
        <Grid item xs={10} md={2} sx={{ margin: { xs: 1, md: 0 } }}>
          <Typography
            variant="body1"
            sx={{ color: `${theme.palette.text.secondary}` }}
          >
            Discover my chatbot
          </Typography>
          <Typography variant="body2">
            Harness the power of AI with my custom-built chatbot, a seamless
            integration of advanced natural language processing with OpenAI API.
            Designed to understand and respond to your queries with
            context-aware precision.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ margin: { xs: 1, md: 0 } }}>
          <ChatUI />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Content;
