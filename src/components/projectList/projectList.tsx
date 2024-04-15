import { FunctionComponent, useEffect, useState } from "react";
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
import { CSSTransition } from "react-transition-group";
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
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [selectedProject]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ProjectKey;
    setSelectedProject(value);
  };
  function formatLabel(label: string) {
    return label.replace(/([A-Z])/g, " $1").trim();
  }
  useEffect(() => {
    // Preload images
    const preloadImages = Object.values(projectImages);
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);
  return (
    <Grid
      container
      className="projectListContainer alignCenter"
      sx={{ width: "100%" }}
    >
      <Grid xs={12} md={4} item>
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
              <Box
                key={projectKey}
                sx={{
                  flexGrow: 1,
                }}
              >
                <FormControlLabel
                  control={<Radio sx={{ display: "none" }} />}
                  label={formatLabel(projectKey)}
                  value={projectKey}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      width: "100%",
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
      <Grid xs={12} sm={10} md={6} item>
        <CSSTransition
          key={selectedProject}
          timeout={300}
          classNames="fade"
          sx={{ width: "100%" }}
        >
          <Box
            component="img"
            sx={{
              width: "auto",
              height: "300px",
              marginTop: 2,
            }}
            src={projectImages[selectedProject]}
            alt={selectedProject}
            onLoad={() => setImageLoaded(true)}
          />
        </CSSTransition>
      </Grid>
    </Grid>
  );
};

export default ProjectList;
