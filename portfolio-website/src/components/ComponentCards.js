import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Buttons from "./ComponentButtons";
import { LanguageLabels } from './ComponentLabels';

import Info from "./ComponentInfo";

import "../style/component-cards.css"
import "../App.css"

export default function ProjectCard({ project }) {
  if (!project) {
    return <p>Fehler beim importieren der Projekte. Bitte versuche es später nochmal.</p>;
  }

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
          image={project.image}
          alt={project.alt}
        />
        <CardContent className="project-card-content">
          <Typography className="card-heading" variant="h5" component="div">{project.title}</Typography>
          <Info time={project.time} place={project.place} />
          <LanguageLabels labels={project.labels} />
          <Typography className="card-text" variant="body2">{project.description}</Typography>
          <Buttons className="card-buttons" buttons={project.buttons} />
        </CardContent>

      </CardActionArea>
    </Card >
  );
}
