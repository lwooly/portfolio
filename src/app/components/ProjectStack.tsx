import { Box, Typography } from "@mui/material";

function ProjectStack({ techStack }: { techStack: string[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      {techStack.map((software) => (
        <Box
          key={software}
          sx={{
            mb: 1,
            mx: 0.5,
            borderRadius: "1em",
            padding: "0.5em 0.75em",
            backgroundColor: "black",
            color: "white",
            boxShadow: " 0 0 20px lightgrey",
            margin: "3px, 3px",
            transition: "0.3s",
            '&:hover':{
                boxShadow: 4,
            }
          }}
        >
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontWeight: "bold",
              lineHeight: "1em ",
              color: "white",
            }}
          >
            {software}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
export default ProjectStack;
