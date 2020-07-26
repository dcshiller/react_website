import React from 'react'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({image, file, title, description}) => {
  const notifyGa = () => {ga && ga('send', 'event', 'File Download', 'click', title)};
  return pug`
    .project-card.animated
      h3.project-card__title= title
      .project-card__info
        if image && image !== ""
          img.project-card__image(src=${image})
        ReactMarkdown(source=${description})
  `
};

export default ProjectCard
