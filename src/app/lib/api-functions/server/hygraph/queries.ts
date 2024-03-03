export const allProjectsQuery = `
query Projects {
    projects (orderBy: order_ASC) {
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
