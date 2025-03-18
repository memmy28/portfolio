import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Buttons from "./ComponentButtons";
import { LanguageLabels } from './ComponentLabels';

import Info from "./ComponentInfo";
import { CompetitionInfo } from './ComponentInfo';

import "../style/component-cards.css"
import "../App.css"

export default function ProjectCard({ project }) {
  if (!project) {
    return <p>Fehler beim importieren der Projekte. Bitte versuche es später nochmal.</p>;
  }

  return (
    <Card className="project-card" >
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
        <div id="projects-container">
          {project.description.map((description, index) => (
            <Typography className="card-text" variant="body2" key={index}>{description}</Typography>
          ))}
        </div>
        <Buttons className="card-buttons" buttons={project.buttons} />
      </CardContent>
    </Card >
  );
}

export function CompetitionCard({ competition }) {
  if (!competition) {
    return <p>Fehler beim importieren der Projekte. Bitte versuche es später nochmal.</p>;
  }

  return (
    <Card className="competition-card" >
      <CardMedia className="competition-card-media"
        component="img"
        height="200"
        image={competition.image}
        alt={competition.alt}
      />
      <CardContent className="competition-card-content">
        <Typography className="card-heading" variant="h5" component="div">{competition.title}</Typography>
        <CompetitionInfo time={competition.time} place={competition.place} placement={competition.placement} />
        <div id="competition-container">
          {competition.description.map((description, index) => (
            <Typography className="card-text" variant="body2" key={index}>{description}</Typography>
          ))}
        </div>
        <Buttons className="card-buttons" buttons={competition.buttons} />
      </CardContent>
    </Card >
  );
}
