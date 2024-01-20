export const allProjectsQuery = `
query Projects {
    projects {
      description
      gitHubLink
      id
      liveDemoLink
      title
      projectImage {
        url
      }
    }
  }
  `;