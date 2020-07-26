import React from 'react'
import Section from '../components/section'
import ProjectCard from '../components/projectCard'
import PaperCard from '../components/paperCard'
import ProjectStore from '../models/ProjectStore'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = { selectedFields: [] }
  }
  render() {
    return pug`
      div
        Section
          h2 About me
          p
            | Professionally, I'm a web developer for 
            a(href="https://thehumaneleague.org") The Humane League
            | , an international farm animal welfare organization that campaigns for better treatment of the most intensively-farmed animals. 
            | In my previous life, I was an academic philosopher who specialized in metaethics and consciousness. 
          p
            | In my free time, I still like to think and write about moral issues and other more speculative or esoteric topics. 
            | I also like to make simple games. 
            | On this website, you can find a selection of my 
            Link(to='/articles') academic papers
            |  and 
            Link(to='/code') coding projects
            | .
            | I live in New York City with my wife, Megan, our dog and our rats.

          br
          br
    `}

        // Section
          // h1 Projects
          // .row
            // ${this.renderCheckBoxes()}
          // br
          // br
          // ReactCSSTransitionGroup(
            // transitionName=${ {
              // enter: 'bounce',
              // enterActive: 'fadeIn',
              // leave: 'fadeOut',
              // leaveActive: 'leaveActive',
            // } }
            // transitionEnterTimeout=${500}
            // transitionLeaveTimeout=${500}
          // )
            // ${this.renderProjects()}
    renderCheckBoxes() {
      const selectables = ProjectStore.getTags();
      return pug`
        .row
          = selectables.map(this.renderSelectable.bind(this))
      `;
    }

    renderSelectable(name) {
      return pug`
        span.select-option
          .button(
            onClick=${this.handleSelect.bind(null, name)}
            className=${this.state.selectedFields.includes(name) && "selected"}
            disabled=${ProjectStore.filter(this.state.selectedFields.concat([name])).length == 0}
          )
          label= name
      `;
    }
    renderProjects() {
      return ProjectStore.filter(this.state.selectedFields).filter(p => !p.isHidden).map(project => (
        pug`
          ProjectCard(
            image=${project.image},
            description=${project.description},
            key=${project.title},
            file=${project.file},
            title=${project.title},
          )
        `
      ))
    }

    renderPapers() {
      return ProjectStore.papers().filter(p => !p.isHidden).map(project => (
        pug`
          PaperCard(
            image=${project.image},
            description=${project.description},
            key=${project.title},
            file=${project.file},
            title=${project.title},
          )
        `
      ))
    }
    handleSelect = ( field ) => {
      let fields = this.state.selectedFields;
      if (!fields.includes(field)) { fields.push(field) }
      else { fields.splice(fields.indexOf(field), 1);}
      this.setState({ selectedFields: fields })
      typeof ga !== 'undefined' && ga('send', 'event', 'Project Category', 'select', field);
    }
}

export default IndexPage
