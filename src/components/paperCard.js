import React from 'react'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import paperIcon from '../../static/assets/papericon.png'

const ProjectCard = ({image, file, title, description}) => {
  const notifyGa = () => {ga && ga('send', 'event', 'File Download', 'click', title)};
  return pug`
    .paper-card
      .paper-card__icon
        if file && file !== ""
          a(href=${file} onClick=${notifyGa})
            img.paper-card__image(src=${paperIcon})
      .paper-card__content
        h2.paper-card__title= title
        .paper-card__info
          ReactMarkdown(source=${description})
  `
};

export default ProjectCard
