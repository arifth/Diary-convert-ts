import React from "react";
import NavBar from "../components/organism/NavBar";
import { Box, Stack, typography } from "@mui/system";
import { Typography } from "@mui/material";

const Home = () => {
  const image =
    "https://images.unsplash.com/photo-1574629173115-01ba37282238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  return (
    <React.Fragment>
      <NavBar />
      <Box width="90vw" height="70vh" padding="2em">
        <Stack flexDirection="row">
          <Box>
            <img
              src={image}
              alt="diary"
              style={{ borderRadius: "2em", boxShadow: "2em" }}
            />
          </Box>
          <Box p="2em">
            <Typography variant="h2">
              My new Feature app, Register to know more
            </Typography>
            <Typography variant="h5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sapiente, dolore at doloremque molestias delectus iure
              voluptatibus in, dolorum cumque atque saepe adipisci.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Home;
