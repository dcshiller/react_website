import React from 'react'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import paperIcon from '../../static/assets/papericon.png'

const PaperCard = ({image, file, title, subtitle, description}) => {
  const notifyGa = () => {ga && ga('send', 'event', 'File Download', 'click', title)};
  const hasFile = file && file !== "";
  return pug`
    .paper-card
      .paper-card__content
        .paper-card__title-row
          .paper-card__title-column(className=${!hasFile && 'full-width'})
            h2.paper-card__title= title
            h5.paper-card__subtitle
              ReactMarkdown(source=${subtitle})
          .paper-card__icon
            if hasFile
              a(href=${file} onClick=${notifyGa})
                img.paper-card__image(src=${paperIcon})
        .paper-card__info
          ReactMarkdown(source=${description})
  `
};

export default PaperCard
