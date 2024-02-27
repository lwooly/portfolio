export const allProjectsQuery = `
query Projects {
    projects {
      description
      gitHubLink
      id
      liveDemoLink
      techStack
      title
      projectImage {
        url
      }
    }
  }
  `;
