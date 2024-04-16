import { FunctionComponent, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  useTheme,
  Grid,
} from "@mui/material";
import ARBooking from "../../assets/ARBooking.png";
import BestMovies from "../../assets/BestMovies.png";
import Gemquest from "../../assets/Gemquest.png";
import RemoteGreenhouse from "../../assets/RemoteGreenhouse.png";
import ViaClub from "../../assets/ViaClub.png";

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

  function formatLabel(label: string) {
    return label.replace(/([A-Z])/g, " $1").trim();
  }

  return (
    <Grid container className="projectListContainer alignCenter">
      <Grid xs={6} md={5} item>
        <FormControl
          component="fieldset"
          sx={{ display: "flex", justifyContent: "center" }}
        >
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
              <Box key={projectKey}>
                <FormControlLabel
                  control={<Radio sx={{ display: "none" }} />}
                  label={formatLabel(projectKey)}
                  value={projectKey}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      width: "200px",
                      borderRadius: "20px",
                      padding: "8px 16px",
                      marginLeft: "15px",
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
                      "&:hover": {
                        backgroundColor: theme.palette.text.secondary,
                        color: theme.palette.secondary.main,
                      },
                    },
                  }}
                />
              </Box>
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid xs={12} sm={10} md={7} item sx={{ margin: { xs: 4, md: 0 } }}>
        {Object.keys(projectImages).map((key) => {
          const projectKey = key as ProjectKey;
          return (
            <img
              key={projectKey}
              src={projectImages[projectKey]}
              alt={projectKey}
              style={{
                width: "100%",
                height: "auto",
                display: selectedProject === projectKey ? "block" : "none",
                transition: "opacity 0.3s ease-in-out",
              }}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ProjectList;
