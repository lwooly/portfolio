import { Box } from "@mui/material";

const ScrollPageContainer = ({children}: {children: React.ReactNode}) => {

    return (
        <Box sx={{
            width:"100%",
            height:"100vh",
            // overflowY:"scroll",
            // scrollSnapType:"y mandatory"
             }}>
            {children}
        </Box>
    );
};

export default ScrollPageContainer;