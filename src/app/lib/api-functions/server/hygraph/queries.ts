export const allProjectsQuery = `
query Projects {
    projects(orderBy: publishedAt_ASC)  {
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
