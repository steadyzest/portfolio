import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Grid, Box, Button } from "@material-ui/core";

const Home = () => {
  let history = useHistory();

  const MovePage = (path: string) => {
    history.push(`${path}`);
  };

  return (
    <Container>
      메인페이지
      <Grid>
        <Box>
          <Button onClick={() => MovePage("about")}>About</Button>
        </Box>
        <Box>
          <Button onClick={() => MovePage("portfolio")}>Portfolio</Button>
        </Box>
        <Box>
          <Button onClick={() => MovePage("skills")}>Skills</Button>
        </Box>
        <Box>
          <Button onClick={() => MovePage("contact")}>Contact</Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default Home;
