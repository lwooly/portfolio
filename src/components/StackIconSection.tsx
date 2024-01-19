import { Box, Stack, Typography } from "@mui/material";
import StackImgList from "./StackImgList";

const StackIconSection = () => {
    return (
        <Stack component={'article'} direction="column" spacing={2}>
            <Typography variant="h4" component={'h2'} >
                Tech Stack
            </Typography>
            <StackImgList />
        </Stack>
    );
};

export default StackIconSection;

