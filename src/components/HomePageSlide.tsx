import { Box } from "@mui/material";

const HomePageSlide = ({children, color}: {children: React.ReactNode, color: string}) => {
    return (
        <Box sx={{
            width:"100%",
            height:"100vh",
            scrollSnapAlign:"start",
            display: "flex",
            alignItems:"center",
            background:color
             }}>
            {children}
        </Box>
    );
};

export default HomePageSlide;