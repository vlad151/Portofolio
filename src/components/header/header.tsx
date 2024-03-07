import { Card, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import "./style.css";
const PageHeader: FunctionComponent = () => {
  return (
    <Card className="pageHeaderCard">
      <Typography variant="h3">Welcome to my personal page</Typography>
    </Card>
  );
};
export default PageHeader;
