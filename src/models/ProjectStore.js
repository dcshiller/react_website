import projects from "../../public/data/projects.json";

 // const projects = { projects: [] }

const ProjectStore = function() {
  this.all = projects.projects;
};

ProjectStore.prototype.getTags = function() {
  var tags = new Set();
  this.all.forEach((proj) => {
    proj.tags.forEach(tag => tags.add(tag));
  })
  return Array.from(tags).sort();
}

ProjectStore.prototype.filter = function(tags) {
  if (tags.length === 0) return [];
  return this.all.
    filter(proj => tags.every(tag => proj.tags.indexOf(tag) !== -1))
}

ProjectStore.prototype.papers = function() {
  return this.all.filter(proj => proj.tags.indexOf('papers') !== -1)
}
ProjectStore.prototype.games = function() {
  return this.all.filter(proj => proj.tags.indexOf('games/sims') !== -1)
}
const instance  = new ProjectStore;
export default instance;
