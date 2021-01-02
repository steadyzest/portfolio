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
      <Box mt={3} pt={3} style={{ color: "#33F1D8" }}>
        <Box>Developer</Box>
        <Box>KWON DONG HAK</Box>
      </Box>

      <Box mt={3} pt={3}>
        <Box
          style={{
            fontSize: "5rem",
            WebkitTextStroke: "1px white",
            WebkitTextFillColor: "rgba(255, 255, 255, 0.02)",
            opacity: 0.5,
          }}
        >
          Any Desing,
        </Box>
        <Box style={{ color: "#FFFFFF" }}>I can make it!</Box>
      </Box>

      <Box mt={3} pt={3}>
        <Box style={{ color: "#ffffff" }}>어떤 디자인이든,</Box>
        <Box style={{ color: "#FFFFFF" }}>제가 만들어 드릴게요!</Box>
      </Box>

      <Box mt={3} pt={3} display="flex" flexDirection="row">
        <Box style={{ color: "#FF407D" }}>want to hire me?</Box>
        <Box style={{ color: "#FF407D" }}>ㅡㅡㅡㅡ</Box>
        <Box style={{ color: "#FF407D" }}>yes!</Box>
      </Box>

      {/* <Grid>
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
      </Grid> */}
    </Container>
  );
};

export default Home;
