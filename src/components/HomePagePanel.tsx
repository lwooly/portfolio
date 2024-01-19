import { Box } from "@mui/material";

const HomePagePanel = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  return (
    <Box
      component={"section"}
      sx={{
        width: "100%",
        height: "100vh",
        scrollSnapAlign: "start",
        background: color,
        padding: "2em 2em 2em 2em",
        // display:'flex',
        // flexDirection:'column',
        // gap: "3rem",
        textAlign:'center'
      }}
    >
        {children}
    </Box>
  );
};

export default HomePagePanel;
