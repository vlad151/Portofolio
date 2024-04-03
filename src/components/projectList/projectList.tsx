import { FunctionComponent, useState } from "react";
import "./styles.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
  useTheme,
} from "@mui/material";
import ARBooking from "../../assets/ARBooking.png";
import BestMovies from "../../assets/BestMovies.png";
import Gemquest from "../../assets/Gemquest.png";
import RemoteGreenhouse from "../../assets/RemoteGreenhouse.png";
import ViaClub from "../../assets/ViaClub.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";
type ProjectKey =
  | "ARBooking"
  | "BestMovies"
  | "Gemquest"
  | "RemoteGreenhouse"
  | "ViaClub";

const ProjectList: FunctionComponent = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectKey>("RemoteGreenhouse");
  const theme = useTheme();
  const projectImages: Record<ProjectKey, string> = {
    ARBooking: ARBooking,
    BestMovies: BestMovies,
    Gemquest: Gemquest,
    RemoteGreenhouse: RemoteGreenhouse,
    ViaClub: ViaClub,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ProjectKey;
    setSelectedProject(value);
  };

  return (
    <Box
      sx={{ width: "100%", typography: "body1" }}
      className="projectListContainer"
    >
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="project"
          name="project-radio-buttons-group"
          value={selectedProject}
          onChange={handleChange}
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {Object.keys(projectImages).map((projectKey) => (
            <Box
              key={projectKey}
              sx={{
                flexGrow: 1,
              }}
            >
              <FormControlLabel
                control={<Radio sx={{ display: "none" }} />}
                label={projectKey}
                value={projectKey}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    display: "block",
                    width: "100%",
                    borderRadius: "20px",
                    padding: "8px 16px",
                    transition: "background-color 0.3s ease",
                    backgroundColor:
                      selectedProject === projectKey
                        ? theme.palette.text.secondary
                        : "#f5f5f5",
                    color:
                      selectedProject === projectKey
                        ? theme.palette.secondary.main
                        : "black",
                    textAlign: "center",
                  },
                }}
              />
            </Box>
          ))}
        </RadioGroup>
      </FormControl>
      <CSSTransition key={selectedProject} timeout={500} classNames="fade">
        <Box
          component="img"
          sx={{
            width: "auto",
            height: "300px",
            marginTop: 2,
          }}
          src={projectImages[selectedProject]}
          alt={selectedProject}
        />
      </CSSTransition>
    </Box>
  );
};

export default ProjectList;
