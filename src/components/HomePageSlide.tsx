import { Box } from "@mui/material";

const HomePageSlide = ({children}: {children: React.ReactNode}) => {
    return (
        <Box sx={{
            width:"100%",
            height:"100vh",
            scrollSnapAlign:"start",
            display: "flex",
            alignItems:"center"
             }}>
            {children}
        </Box>
    );
};

export default HomePageSlide;