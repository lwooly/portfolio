import { Box, useTheme } from "@mui/material";

const HomePagePanel = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      component={"section"}
      sx={{
        width: "100%",
        scrollSnapAlign: "start",
        padding: "2em 2em 6em 2em",
        // display:'flex',
        // flexDirection:'column',
        // gap: "3rem",
        textAlign: "center",
        ":nth-child(2)": { backgroundColor: theme.palette.common.white },
        [theme.breakpoints.up("md")]: {
          height: "100vh",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default HomePagePanel;
