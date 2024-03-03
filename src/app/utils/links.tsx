import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const createProfileLinks = ({ isFooter }: { isFooter?: boolean }) => {
  const iconSize = isFooter ? "inherit" : "medium";

  return [
    {
      link: "https://github.com/lwooly",
      title: "GitHub",
      icon: <GitHubIcon fontSize={iconSize} />,
    },
    {
      link: "https://www.linkedin.com/in/lloyd-woolacott-ceng-mice",
      title: "LinkedIn",
      icon: <LinkedInIcon fontSize={iconSize} />,
    },
  ];
};
