import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Buttons from "./ComponentButtons";

import Info from "./ComponentInfo";

import "../style/component-cards.css"
import "../App.css"

export default function ProjectCard() {
  return (
    <Card className="project-card" >
      <CardActionArea sx={{
        ".MuiCardActionArea-focusHighlight": {
          background: "transparent",
        },
      }} >
      <CardMedia className="project-card-media"
        component="img"
        height="200"
        image="assets/foto.jpg"
        alt="green iguana"
      />
      <CardContent className="project-card-content">
        <Typography className="card-heading" variant="h5" component="div">Project</Typography>
        <Info time="2021-2024" place="Nürnberg, Deutschland" />
        <Typography className="card-text" variant="body2">Text</Typography>
        <Buttons className="card-buttons" buttons={[
          { text: "Download CV", href: "assets/cv.pdf", target: "_blank", download: true },
          { text: "Contact me", href: "#contact", target: "_self", download: false },
        ]} />
      </CardContent>

    </CardActionArea>
    </Card >
  );
}
